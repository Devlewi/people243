export function transformImageUrl(imageUrl: string | null): string {
    if (!imageUrl) {
      return "/images/default.jpg"; // Image par défaut
    }
  
    // Extraire les parties de l'URL : année, mois et nom de l'image
    const parts = imageUrl.split("/");
    if (parts.length < 3) return "/images/default.jpg"; // Sécurité si l'URL est mal formatée
  
    const year = parts[parts.length - 3]; // Année
    const month = parts[parts.length - 2]; // Mois
    const imageName = parts.pop(); // Nom de l'image
  
    // Construire l'URL locale pour l'image
    return `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/images/${year}/${month}/${imageName}`;
  }
  