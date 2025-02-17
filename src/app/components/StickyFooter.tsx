import { useState, useEffect } from 'react';
import Styles from './styles/StickyFooter.module.css';

const StickyFooter = () => {
  const [isVisible, setIsVisible] = useState(true);
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
      <div className={Styles.stickyFooter}>
        <div className={Styles.footerContent}>
          <center>
            {/* Affichage conditionnel des publicités selon l'écran */}
            {isMobile ? (
              <ins data-revive-zoneid="219" data-revive-id="97f3bbebf0ebdc5eed163b8fac6171c8"></ins>
            ) : (              
              <ins data-revive-zoneid="219" data-revive-id="97f3bbebf0ebdc5eed163b8fac6171c8"></ins>
            )}

            {/* Script Revive Adserver (chargé une seule fois) */}
            <script async src="//client.cynomedia-africa.com/www/delivery/asyncjs.php"></script>

            {/* Bouton de fermeture */}
            <button
              onClick={() => setIsVisible(false)}
              style={{
                position: 'absolute',
    right: 10,
    top: -10,
    width: 0, // Taille du bouton pour assurer un cercle
    height: 32,
    borderRadius: '50%', // Rend le bouton parfaitement circulaire
    fontSize: 15,
    fontWeight: 700,
    display: 'flex', // Active flexbox pour centrer
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.6)', // Couleur de fond
    color: 'white',
    border: 'none',
    cursor: 'pointer',
    transition: 'background 0.3s',
              }}
            >
              ×
            </button>


          </center>
        </div>
      </div>
    )
  );
};

export default StickyFooter;
