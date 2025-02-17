"use client"; // Indique que ce composant doit être exécuté uniquement côté client

import { useEffect, useState } from "react";

// Définir le type de props attendues
interface ContentDetailPostProps {
    serverContent: string; // Tu peux ajuster ce type si nécessaire
  }

const ContentDetailPost = ({ serverContent }: ContentDetailPostProps) => {
  const [content, setContent] = useState("");

  useEffect(() => {
    setContent(serverContent); // Charger le contenu uniquement côté client
  }, [serverContent]);

  return (
    <div
      className="article-content"
      dangerouslySetInnerHTML={{ __html: content }}
    ></div>
  );
};

export default ContentDetailPost;
