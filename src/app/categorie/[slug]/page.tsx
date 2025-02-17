import CategoryContent from "@/app/components/CategoryContent";

// Fonction pour récupérer les données de l'article via l'API
// Fonction pour récupérer les données de la sidebar via l'API
async function fetchSidebarData() {  
  // https://controlpanel.people237.com/wp-json/articles/homepage
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/wp-json/articles/homepage`,{
    next: { revalidate: 60 },
  });
  const data = await res.json();
  return data.recap.latestposts; // Retourner uniquement les articles de 'latestposts'
}

  
// Fonction SSR pour générer les métadonnées de la page
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; // ⚠️ Correction ici : "await params"
  //const res = await fetch(`https://controlpanel.people237.com/wp-json/custom-api/publications/slug-categorie/${slug}`);
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/wp-json/custom-api/publications/slug-categorie/${slug}`,{
    next: { revalidate: 60 },
  });

  const data = await res.json();
  //console.log(data.category_name);

  // Toujours récupérer le nom de la catégorie, même si les articles sont absents
  const categoryName = data.category_name || "Catégorie inconnue";  // Nom de la catégorie

  // Vérifier si des articles existent et en choisir un pour l'image de couverture
  const featuredImage = data.articles && data.articles.length > 0
    ? data.articles[0].featured_image
    : 'default-image.jpg'; // Image par défaut si pas d'articles

  const title = `Articles de la catégorie ${categoryName}`;

  return {
    title,
    description: `Découvrez les derniers articles de la catégorie ${categoryName}.`,
    openGraph: {
      title,
      description: `Découvrez les derniers articles de la catégorie ${categoryName}.`,
      images: [featuredImage],  // Affichage de l'image de couverture
    },
  };
}



// Composant SSR pour afficher les articles de catégorie
// Composant SSR pour afficher les articles de catégorie

//const ArticleDetail = async ({ params }: { params: Promise<{ slug: string }> }) => {
//const CategoryPosts = async ({ params, searchParams }: { params: { slug: string }, searchParams: { page?: string } }) => {
  const CategoryPosts = async ({ params, searchParams }: { params: Promise<{ slug: string }>, searchParams: Promise<{ page?: string }> }) => {
    // Résoudre la promesse params pour obtenir le slug
    const { slug } = await params;
  
    // Attendre searchParams avant de l'utiliser
    const { page } = await searchParams;
    const currentPage = parseInt(page || "1", 10);
  
    // Récupérer les données de la sidebar via l'API
    const sidebarData = await fetchSidebarData();
  
    // Récupérer les articles de la catégorie via l'API, en incluant le paramètre de la page
    //const res = await fetch(`https://controlpanel.people237.com/wp-json/custom-api/publications/slug-categorie/${slug}?page=${currentPage}`);
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/wp-json/custom-api/publications/slug-categorie/${slug}?page=${currentPage}`,{
      next: { revalidate: 60 },
    });

    const data = await res.json();
  
    // Extraire les articles et la pagination
    const categoryPosts = data.articles || [];
    const pagination = data.pagination || {}; // Ajouter un fallback si la pagination n'existe pas
    const totalPages = pagination.total_pages || 1; // Utiliser 1 par défaut si total_pages est manquant
    const currentPageIndex = pagination.current_page || 1; // Utiliser 1 par défaut si current_page est manquant
  
  
     // Vérifier s'il y a des articles dans la catégorie
{/*
    if (categoryPosts.length === 0) {
    return (
      <div>
        <h2>Aucun article disponible pour cette catégorie</h2>
      </div>
    );
  }
  */}
    // Retourner le contenu avec les articles et la pagination
    return (
        <CategoryContent 
            sidebarData={sidebarData} 
            categoryPosts={categoryPosts} 
            categoryName={data.category_name} 
            pagination={{ currentPage: currentPageIndex, totalPages }} 
        />
    );
  };
  
  
export default CategoryPosts;
