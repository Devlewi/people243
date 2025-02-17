// utils.ts - Utilitaires TypeScript pour formater les nombres

/**
 * Formate un nombre avec des séparateurs de milliers selon la locale spécifiée.
 * @param number - Le nombre à formater.
 * @param locale - La locale à utiliser pour le formatage (par défaut : 'en-US').
 * @returns Le nombre formaté en chaîne de caractères.
 */
export const formatNumber = (number: number | null | undefined, locale: string = 'en-US'): string => {
    if (number === null || number === undefined) {
      return 'N/A'; // Valeur par défaut pour les entrées non valides
    }
    return Number(number).toLocaleString(locale);
  };
  