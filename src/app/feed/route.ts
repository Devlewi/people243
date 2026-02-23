import { NextResponse } from 'next/server';
import { Feed } from 'feed';
import he from "he";

// --- Types pour WordPress ---
interface WPCategory {
  id: number;
  name: string;
}

interface WPPost {
  id: number;
  link: string;
  date: string;
  title: { rendered: string };
  content: { rendered: string };
  categories: number[];
  _embedded?: {
    "wp:featuredmedia"?: Array<{ source_url: string }>;
    "wp:term"?: Array<WPCategory[]>;
  };
}

const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
const apiBackendUrl = process.env.NEXT_PUBLIC_BACKEND_API_URL;

async function getArticles(): Promise<WPPost[]> {
  const response = await fetch(`${apiBackendUrl}/wp-json/wp/v2/posts?_embed`, {
    cache: "no-store",
  });
  if (!response.ok) throw new Error("Failed to fetch posts");
  return response.json();
}

export async function GET() {
  try {
    const posts = await getArticles();

    const feed = new Feed({
      title: "People237 - RSS Feed",
      description: "Derniers articles du site People237",
      id: apiBaseUrl ?? "",
      link: apiBaseUrl ?? "",    
      language: "fr",
      copyright: `© ${new Date().getFullYear()} People237`,
      updated: new Date(),
    });

    const baseUrl = apiBaseUrl?.endsWith('/') ? apiBaseUrl.slice(0, -1) : (apiBaseUrl || "");

    posts.forEach((post: WPPost) => {
      try {
        // Extraction sécurisée du path pour éviter le double domaine
        const postPath = new URL(post.link).pathname;
        const postUrl = `${baseUrl}${postPath}`;

        feed.addItem({
          title: he.decode(post.title.rendered),
          id: postUrl,
          link: postUrl,
          description: he.decode(post.content.rendered),
          date: new Date(post.date),
          image: post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "",
          author: [{ name: "people237@people237.com" }],
          category: post.categories?.map((catId) => {
            // Accès sécurisé aux termes (catégories)
            const categoriesList = post._embedded?.["wp:term"]?.[0] || [];
            const category = categoriesList.find((term) => term.id === catId);
            return category ? { name: category.name } : null;
          }).filter((cat): cat is { name: string } => cat !== null),
        });
      } catch (e) {
        console.error(`Erreur de formatage pour l'article ${post.id}:`, e);
      }
    });

    return new NextResponse(feed.rss2(), {
      headers: { "Content-Type": "application/rss+xml" },
    });
  } catch (error) {
    console.error("Erreur génération RSS:", error);
    return new NextResponse("Erreur lors de la génération du flux RSS", { status: 500 });
  }
}