import { NextResponse } from 'next/server';
import { Feed } from 'feed';
import he from "he";

// Récupérer l'URL de l'API (qui contient le domaine local ou de production)
const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
const apiBackendUrl = process.env.NEXT_PUBLIC_BACKEND_API_URL;

interface WPCategory {
  id: number;
  name: string;
}

// Fonction pour récupérer les articles depuis WordPress API
async function getArticles() {
  const response = await fetch(`${apiBackendUrl}/wp-json/wp/v2/posts?_embed`, {
    cache: "no-store", // Toujours récupérer les derniers articles
  });
  return response.json();
}

// Fonction qui génère le flux RSS
export async function GET() {
  try {
    const posts = await getArticles();

    // Créer le flux RSS
    const feed = new Feed({
      title: "People237 - RSS Feed",
      description: "Derniers articles du site People237",
      id: apiBaseUrl ?? "", // Utiliser une URL par défaut
      link: apiBaseUrl ?? "", // Idem ici    
      language: "fr",
      copyright: `© ${new Date().getFullYear()} People237`,
      updated: new Date(),
    });

    // Ajouter chaque article au flux RSS
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    posts.forEach((post: any) => {
      const postUrl = `${apiBaseUrl}${post.link.replace("https://controlpanel.people237.com", "")}`;

      feed.addItem({
        title: he.decode(post.title.rendered), // Décoder les entités HTML
        id: postUrl, // Utiliser l'URL complète pour le guid
        link: postUrl,
        description: he.decode(post.content.rendered), // Décoder le contenu HTML
        date: new Date(post.date),
        image: post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "",
        author: [{ name: "people237@people237.com" }],
        category: post.categories?.map((catId: number) => {
          const category = post._embedded["wp:term"][0].find((term: WPCategory) => term.id === catId);
          return category ? { name: category.name } : null; // Retourner la catégorie, si trouvée
        }).filter(Boolean), // Filtrer les valeurs null
      });
    });

    // Retourner le flux RSS
    return new NextResponse(feed.rss2(), {
      headers: {
        "Content-Type": "application/rss+xml",
      },
    });
  } catch (error) {
    console.error("Erreur génération RSS:", error);
    return new NextResponse("Erreur lors de la génération du flux RSS", { status: 500 });
  }
}
