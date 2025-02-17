import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation'; // Importation correcte pour Next.js 13+
import { Home } from '@mui/icons-material';
import { FaMoon, FaRegMoon } from 'react-icons/fa'; // Import des icônes pour le mode sombre
import Styles from './styles/BottomNav.module.css';
import { BiSearchAlt } from 'react-icons/bi';

const BottomNav = () => {
  const router = useRouter();  // Utilisation de useRouter() pour la navigation
  const pathname = usePathname();  // Utilisation de usePathname() pour obtenir le chemin actuel
  const [activeTabs, setActiveTabs] = useState<string>('');
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setIsLoading(false); // Simuler le chargement des données
  }, []);

  useEffect(() => {
    switch (pathname) {
      case '/':
        setActiveTabs('home');
        break;
      case '/recherche':
        setActiveTabs('search');
        break;
      case '/saved':
        setActiveTabs('saved');
        break;
      default:
        setActiveTabs('');
        break;
    }
  }, [pathname]);

  // Vérification et application immédiate du mode sombre dès le chargement de la page
  useEffect(() => {
    const BunyadSchemeKey = "bunyad-scheme-6"; // Clé de stockage
    const scheme = localStorage.getItem(BunyadSchemeKey);
    const d = document.documentElement;
    const c = d.classList;

    if (scheme) {
      // Si une préférence est déjà enregistrée dans localStorage, l'appliquer
      d.dataset.origClass = c.toString(); // Sauvegarde des classes originales

      if (scheme === "dark") {
        c.remove("s-light", "site-s-light");
        c.add("site-s-dark", "s-dark");
        setDarkMode(true);
      } else {
        c.remove("s-dark", "site-s-dark");
        c.add("s-light", "site-s-light");
        setDarkMode(false);
      }
    } else {
      // Aucun mode enregistré : utiliser "light" comme défaut
      localStorage.setItem(BunyadSchemeKey, 'light'); // Définit light par défaut
      setDarkMode(false);

      c.remove("s-dark", "site-s-dark");
      c.add("s-light", "site-s-light");
    }

    setIsLoading(false); // Arrête le chargement
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    const BunyadSchemeKey = "bunyad-scheme-6";
    const d = document.documentElement;
    const c = d.classList;

    localStorage.setItem(BunyadSchemeKey, newMode ? 'dark' : 'light');
    console.log(newMode);
    if (newMode) {
      c.remove("s-light", "site-s-light");
      c.add("site-s-dark", "s-dark");
    } else {
      c.remove("s-dark", "site-s-dark");
      c.add("s-light", "site-s-light");
    }

    setDarkMode(newMode);
  };

  // Ne pas rendre le composant avant que le mode sombre ne soit chargé
  if (isLoading) {
    return <div className="loading-screen">Loading...</div>;
  }


  const handleTabClick = (tab: string) => {
    setActiveTabs(tab);
    switch (tab) {
      case 'home':
        router.push('/');
        break;
      case 'search':
        router.push('/recherche');
        break;
      case 'saved':
        router.push('/saved');
        break;
      default:
        router.push('/');
        break;
    }
};

  return (
    <div className={Styles.bottomNav}>
      <div className={Styles.bnTab}>
        <Home
          fontSize="large"
          onClick={() => handleTabClick('home')}
          style={{ marginBottom:-2}}
        />
        <span style={{color:'#b0b0b0', fontWeight:700}}>accueil</span>
      </div>

      <div className={Styles.bnTab}>
        <BiSearchAlt
          fontSize="large"
          color={activeTabs === 'search' ? 'primary' : 'inherit'}
          onClick={() => handleTabClick('search')}
          style={{ marginBottom:-10}}
        />
        <span style={{color:'#b0b0b0', fontWeight:700}}>chercher</span>
      </div>

      {/* Icône pour le mode sombre */}
      <div className={Styles.bnTab}>
        <a
          href="#"
          className={`toggle is-icon ${darkMode ? 'toggle-light' : 'toggle-dark'}`}
          title="Switch to Dark Design - easier on eyes."
          onClick={(e) => {
            e.preventDefault(); // Empêche le comportement par défaut
            toggleDarkMode();
          }}
        >
          {darkMode ? (
            <FaRegMoon size="20" style={{ color: "#fff", marginBottom:-10 }} />
          ) : (
            <FaMoon size="20" style={{ color: "#777", marginBottom:-10 }} />
          )}
        </a>
        <span style={{color:'#777', fontWeight:700}}>mode</span>
      </div>
    </div>
  );
};

export default BottomNav;
