import { useState, useEffect } from 'react';


const PubAfterNav = () => {
  const [isVisible] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Indiquer que le composant est monté côté client
    setIsClient(true);

    // Détecter si l'écran est mobile
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (!isClient) return null; // Évite les erreurs d'hydratation en ne rendant rien côté serveur

  return (
    isVisible && (
      <div>        
<center>
           {/* Affichage conditionnel des publicités selon l'écran */}
           {isMobile ? (
              <ins data-revive-zoneid="219" data-revive-id="97f3bbebf0ebdc5eed163b8fac6171c8"></ins>
            ) : (
              <ins data-revive-zoneid="219" data-revive-id="97f3bbebf0ebdc5eed163b8fac6171c8"></ins>
            )}

            {/* Script Revive Adserver (chargé une seule fois) */}
            <script async src="//client.cynomedia-africa.com/www/delivery/asyncjs.php"></script>
</center>
      </div>
    )
  );
};

export default PubAfterNav;
