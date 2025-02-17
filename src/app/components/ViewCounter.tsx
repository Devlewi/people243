// /components/ViewCounter.tsx
import { useState, useEffect } from 'react';

// Déclaration des types pour les props
interface ViewCounterProps {
  slug: string;
  initialViews: number;
}


/*
const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/wp-json/custom/v1/search/?q=${searchQuery}&page=${pageNum}`
      );
*/

// Fonction pour incrémenter les vues via l'API
const incrementViews = async (slug: string) => {
  //const url = `https://controlpanel.people237.com/wp-json/custom/v1/increment-views/${slug}`;
  const url = `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/wp-json/custom/v1/increment-views/${slug}`;

  try {
    const res = await fetch(url, { method: 'POST' });
    if (!res.ok) {
      throw new Error('Erreur lors de l\'incrémentation des vues');
    }
  } catch (error) {
    console.error('Erreur lors de l\'incrémentation des vues', error);
  }
};

const ViewCounter = ({ slug, initialViews }:ViewCounterProps) => {
  const [views, setViews] = useState(initialViews);

  useEffect(() => {
    // Incrémenter les vues au premier rendu
    const updateViews = async () => {
      await incrementViews(slug);
      // Après l'incrémentation, mettre à jour les vues localement
      setViews((prev) => prev + 1);
    };

    updateViews();
  }, [slug]); // Exécuter uniquement si le slug change

  return (
    <p><strong>Vues:</strong> {views}</p>
  );
};

export default ViewCounter;
