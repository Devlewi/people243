// /src/utils/removeTags.ts
export function removeTags(str: string): string {
    if (!str) return ""; 
    return str.replace(/<\/?[^>]+(>|$)/g, ""); // Expression régulière pour supprimer toutes les balises HTML
  }
  