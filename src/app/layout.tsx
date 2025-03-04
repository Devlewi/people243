/* eslint-disable @next/next/inline-script-id */
"use client";
import { useEffect, useState } from "react";
//import { useEffect } from "react";
import "./globals.css";
import "bootstrap/dist/css/bootstrap-grid.min.css";
//import "bootstrap/dist/css/bootstrap.min.css";
import Script from "next/script";
import NewsleterComponentHeader from "./components/NewsleterComponentHeader";
import { usePathname } from "next/navigation";
import BottomMenu from "./components/BottomMenu";
import Image from "next/image";
import TransitionPage from "./components/TransitionPage";
import Link from "next/link";
import StickyFooter from "./components/StickyFooter";
import PubAfterNav from "./components/PubAfterNav";
import Footer from "./components/Footer";


//import $ from "jquery"; // Importer jQuery directement

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const pathname = usePathname(); // Utilisez le hook pour détecter les changements de route

  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Africa/Kinshasa",
  };

  const dateTime = new Date().toLocaleDateString("fr-FR", options);

  const menuItems = [
    {
      title: "People",
      icon: "typcn typcn-home",
      link: "/",
      subMenu: [
        { title: "Portrait", link: "/categorie/people-portrait" },
        { title: "Top start", link: "/categorie/people-top-stars" },
        { title: "International", link: "/categorie/people-international" },
        { title: "Buzz", link: "/categorie/people-buzz" },
        { title: "Nouveaux talents", link: "/categorie/people-nouveaux-talents" },
        { title: "Couples célèbres", link: "/categorie/people-couples-celebres" },
        { title: "Engagements des stars", link: "/categorie/people-engagements-des-stars" },
        { title: "Scandales", link: "/categorie/people-scandales" },
        { title: "Actualités people", link: "/categorie/actualites-people" },
      ],
    },
    {
      title: "Découverte",
      icon: "typcn typcn-camera",
      link: "#",
      subMenu: [
        { title: "Restaurants tendances", link: "/categorie/decouverte-restaurants-tendances" },
        { title: "Sorties", link: "/categorie/sorties-decouverte" },
        { title: "Voyages", link: "/categorie/decouvertes-voyages" },
        { title: "Bonnes Adresses", link: "/categorie/decouverte-bonnes-adresses" },
        { title: "Idées cadeaux", link: "/categorie/decouvertes-idees-cadeaux" },
        { title: "Bons Plans", link: "/categorie/decouvertes-bons-plans" },        
      ],
    },
    {
      title: "Events",
      icon: "typcn typcn-calendar",
      link: "/categorie/events",
      subMenu: [
        { title: "Concerts", link: "/categorie/events-concerts" },
        { title: "Festival", link: "/categorie/events-festivals" },
        { title: "Galas", link: "/categorie/events-galas" },
        { title: "Cérémonies", link: "/categorie/events-ceremonies" },
        { title: "Soirées VIP", link: "/categorie/events-soirees-vip" },
        { title: "Lancements de produits", link: "/categorie/events-lancements-de-produits" },
      ],
    },
    {
      
      title: "Mode & Beauté",
      icon: "typcn typcn-camera",
      link: "/categorie/mode-beaute",
      subMenu: [
        { title: "Tendances mode", link: "/categorie/tendances-mode" },
        { title: "Looks de stars", link: "/categorie/Mode-beaute-looks-de-stars" },
        { title: "Conseils beauté", link: "/categorie/mode-beaute-conseils-beaute" },
        { title: "Collaborations mode", link: "/categorie/collaborations-mode" },
      ],
    },    
    
    /*{
      title: "Bons plans",
      icon: "typcn typcn-star",
      link: "#",
      subMenu: [
        { title: "Restaurant", link: "/categorie/bons-plans-restaurants" },
        { title: "Party", link: "/categorie/bons-plans-party-after-work" },
        { title: "Tourisme", link: "/categorie/bons-plans-tourisme" },
      ],
    },*/
    {
      title: "Cinéma & Arts",
      icon: "typcn typcn-star-outline",
      link: "/categorie/top-stars",
      subMenu: [
        { title: "Sorties de films", link: "/categorie/cinema-arts-sorties-de-films"},
        { title: "Séries TV", link: "/categorie/cinema-arts-series-tv" },
        { title: "Interviews d'acteurs", link: "/categorie/cinema-arts-interviews-dacteurs" },
        { title: "Behind-the-scènes", link: "/categorie/cinema-arts-behind-the-scenes" },
      ],
    },
    {
      title: "Sports",
      icon: "typcn typcn-flag",
      link: "/categorie/sport",
      subMenu: [
        { title: "Sportifs célèbres", link: "/categorie/sport-sportifs-celebres"},
        { title: "Événements sportifs", link: "/categorie/sport-evenements-sportifs" },
        { title: "Vie privée des athlètes", link: "/categorie/vie-privee-des-athletes" },
        { title: "Style sportif", link: "/categorie/style-sportif" },
        { title: "Nouveaux talents", link: "/categorie/nouveaux-talents-sport" },
      ],
    },
    {
      title: "Photos",
      icon: "typcn typcn-image",
      link: "/categorie/photos",
      subMenu: [
        { title: "Galeries photos", link: "/categorie/photos-galeries-photos"},
        { title: "Clichés exclusifs", link: "/categorie/photos-cliches-exclusifs"},
        { title: "Moments volés", link: "/categorie/photos-moments-voles"},
        { title: "Archives people", link: "/categorie/photos-archives-people"},
      ],
    },
    /*
    {
      title: "Société",
      icon: "typcn typcn-world",
      link: "/categorie/societes",
      subMenu: [],
    },*/

    {
      title: "Vidéos",
      icon: "typcn typcn-video",
      link: "/categorie/videos",
      subMenu: [
        { title: "Interviews vidéo", link: "/categorie/interviews-video	"},
        { title: "Reportages", link: "/categorie/videos-reportages"},
        { title: "Moments backstage", link: "/categorie/videos-moments-backstage"},
        { title: "Contenu exclusif", link: "/categorie/videos-contenu-exclusif"},
      ],
    },
  ];

  const menuItemsD = [
    {
      title: "People",
      icon: "typcn-home",
      link: "/",
      subMenu: [
        { title: "Portrait", link: "/categorie/people-portrait" },
        { title: "Top start", link: "/categorie/people-top-stars" },
        { title: "International", link: "/categorie/people-international" },
        { title: "Buzz", link: "/categorie/people-buzz" },
        { title: "Nouveaux talents", link: "/categorie/people-nouveaux-talents" },
        { title: "Couples célèbres", link: "/categorie/people-couples-celebres" },
        { title: "Engagements des stars", link: "/categorie/people-engagements-des-stars" },
        { title: "Scandales", link: "/categorie/people-scandales" },
        { title: "Actualités people", link: "/categorie/actualites-people" },
      ],
    },
    {
      title: "Découverte",
      icon: "typcn-camera",
      link: "#",
      subMenu: [
        { title: "Restaurants tendances", link: "/categorie/decouverte-restaurants-tendances" },
        { title: "Sorties", link: "/categorie/sorties-decouverte" },
        { title: "Voyages", link: "/categorie/decouvertes-voyages" },
        { title: "Bonnes Adresses", link: "/categorie/decouverte-bonnes-adresses" },
        { title: "Idées cadeaux", link: "/categorie/decouvertes-idees-cadeaux" },
        { title: "Bons Plans", link: "/categorie/decouvertes-bons-plans" },        
      ],
    },
    {
      title: "Events",
      icon: "typcn-calendar",
      link: "/categorie/events",
      subMenu: [
        { title: "Concerts", link: "/categorie/events-concerts" },
        { title: "Festival", link: "/categorie/events-festivals" },
        { title: "Galas", link: "/categorie/events-galas" },
        { title: "Cérémonies", link: "/categorie/events-ceremonies" },
        { title: "Soirées VIP", link: "/categorie/events-soirees-vip" },
        { title: "Lancements de produits", link: "/categorie/events-lancements-de-produits" },
      ],
    },
    {
      title: "Mode & Beauté",
      icon: "typcn typcn-camera",
      link: "/categorie/mode-beaute",
      subMenu: [
        { title: "Tendances mode", link: "/categorie/tendances-mode" },
        { title: "Looks de stars", link: "/categorie/Mode-beaute-looks-de-stars" },
        { title: "Conseils beauté", link: "/categorie/mode-beaute-conseils-beaute" },
        { title: "Collaborations mode", link: "/categorie/collaborations-mode" },
      ],
    },       
    
    /*{
      title: "Bons plans",
      icon: "typcn-star",
      link: "#",
      subMenu: [
        { title: "Restaurant", link: "/categorie/bons-plans-restaurants" },
        { title: "Party", link: "/categorie/bons-plans-party-after-work" },
        { title: "Tourisme", link: "/categorie/bons-plans-tourisme" },
      ],
    },*/
    {
      title: "Cinéma & Arts",
      icon: "typcn-star-outline",
      link: "/categorie/top-stars",
      subMenu: [
        { title: "Sorties de films", link: "/categorie/cinema-arts-sorties-de-films"},
        { title: "Séries TV", link: "/categorie/cinema-arts-series-tv" },
        { title: "Interviews d'acteurs", link: "/categorie/cinema-arts-interviews-dacteurs" },
        { title: "Behind-the-scènes", link: "/categorie/cinema-arts-behind-the-scenes" },
      ],
    },
    {
      title: "Sports",
      icon: "typcn-flag",
      link: "/categorie/sport",
      subMenu: [
        { title: "Sportifs célèbres", link: "/categorie/sport-sportifs-celebres"},
        { title: "Événements sportifs", link: "/categorie/sport-evenements-sportifs" },
        { title: "Vie privée des athlètes", link: "/categorie/vie-privee-des-athletes" },
        { title: "Style sportif", link: "/categorie/style-sportif" },
        { title: "Nouveaux talents", link: "/categorie/nouveaux-talents-sport" },
      ],
    },
    {
      title: "Photos",
      icon: "typcn-image",
      link: "/categorie/photos",
      subMenu: [
        { title: "Galeries photos", link: "/categorie/photos-galeries-photos"},
        { title: "Clichés exclusifs", link: "/categorie/photos-cliches-exclusifs"},
        { title: "Moments volés", link: "/categorie/photos-moments-voles"},
        { title: "Archives people", link: "/categorie/photos-archives-people"},
      ],
    },    
    
    /*{
      title: "Société",
      icon: "typcn-world",
      link: "/categorie/societes",
    },*/

    {
      title: "Vidéos",
      icon: "typcn-video",
      link: "/categorie/videos",
      subMenu: [
        { title: "Interviews vidéo", link: "/categorie/interviews-video	"},
        { title: "Reportages", link: "/categorie/videos-reportages"},
        { title: "Moments backstage", link: "/categorie/videos-moments-backstage"},
        { title: "Contenu exclusif", link: "/categorie/videos-contenu-exclusif"},
      ],
    },
  ];

  const navItems = [
    { title: "PEOPLE", icon: "typcn-home", link: "/categorie/people" },
    { title: "DECOUVERTES", icon: "typcn-camera", link: "/categorie/decouvertes" },
    { title: "EVENTS", icon: "typcn-calendar", link: "/categorie/events" },
    { title: "MODE & BEAUTE", icon: "typcn-calendar", link: "/categorie/mode-beaute" },
    { title: "SPORTS", icon: "typcn-flag", link: "/categorie/sport" },    
    { title: "PHOTOS", icon: "typcn-image", link: "/categorie/photos" },
    { title: "VIDEOS", icon: "typcn-video", link: "/categorie/videos" },
    /*
    { title: "PORTRAITS", icon: "typcn-camera", link: "/categorie/people-portrait" },
    { title: "BONS PLANS", icon: "typcn-star", link: "/categorie/bons-plans" },
    { title: "TOP STARS", icon: "typcn-star-outline", link: "/categorie/top-star" },
    { title: "SOCIETES", icon: "typcn-world", link: "/categorie/societes" },
     */
  ];


    
  useEffect(() => {
    // Déclenchez l'animation lors d'un changement de route
    setIsTransitioning(true);

    const timeout = setTimeout(() => {
      setIsTransitioning(false);
    }, 1000); // Temps correspondant à la durée de votre animation CSS

    return () => clearTimeout(timeout); // Nettoyez le timeout
  }, [pathname]);

  // On simule un délai pour l'animation de chargement.
  /*
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(true); // Afficher le loader pendant un délai défini
    }, 500); // Délai de 500 ms pour afficher le loader

    return () => clearTimeout(timer);
  }, []);
  */

  useEffect(() => {
    // Remplacer la classe 'bbp-no-js' par 'bbp-js' lorsque le script est exécuté
    document.body.className = document.body.className.replace(
      "bbp-no-js",
      "bbp-js"
    );
  }, []); // Le tableau vide garantit que ce code s'exécute uniquement au montage du composant

  useEffect(() => {
    // Fonction lazyloadRunObserver
    const lazyloadRunObserver = () => {
      // Sélectionne les éléments à lazyloader
      const lazyloadBackgrounds = document.querySelectorAll(
        ".e-con.e-parent:not(.e-lazyloaded)"
      );

      // Crée un nouvel IntersectionObserver pour observer les éléments
      const lazyloadBackgroundObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const lazyloadBackground = entry.target;
              if (lazyloadBackground) {
                lazyloadBackground.classList.add("e-lazyloaded"); // Ajoute la classe une fois l'élément visible
              }
              lazyloadBackgroundObserver.unobserve(entry.target); // Arrête l'observation de cet élément
            }
          });
        },
        { rootMargin: "200px 0px 200px 0px" }
      ); // Définit la marge de déclenchement de l'observation

      // Applique l'observer sur chaque élément
      lazyloadBackgrounds.forEach((lazyloadBackground) => {
        lazyloadBackgroundObserver.observe(lazyloadBackground);
      });
    };

    // Écoute les événements DOMContentLoaded et elementor/lazyload/observe
    const events = ["DOMContentLoaded", "elementor/lazyload/observe"];

    events.forEach((event) => {
      document.addEventListener(event, lazyloadRunObserver);
    });

    // Nettoyage lorsque le composant est démonté
    return () => {
      events.forEach((event) => {
        document.removeEventListener(event, lazyloadRunObserver);
      });
    };
  }, []); // Ce code s'exécute une seule fois après le montage du composant

  useEffect(() => {
    // Définir la configuration globale après le montage du composant
    window.BunyadLazyConf = { type: "smart" };

    // Vous pouvez ajouter d'autres logiques si nécessaire pour ce script.
  }, []); // Ce code s'exécute une seule fois après le montage du composant

  useEffect(() => {
    const BunyadSchemeKey = "bunyad-scheme-6";

    // Vérifier si le schéma (theme) est sauvegardé dans localStorage
    const scheme = localStorage.getItem(BunyadSchemeKey);

    if (scheme) {
      const d = document.documentElement;
      const c = d.classList;

      // Sauvegarder la classe d'origine
      //d.dataset.origClass = c;
      d.dataset.origClass = c.toString();

      // Appliquer ou supprimer les classes en fonction du thème
      if (scheme === "dark") {
        c.remove("s-light", "site-s-light");
        c.add("site-s-dark", "s-dark");
      } else {
        c.remove("s-dark", "site-s-dark");
        c.add("site-s-light", "s-light");
      }
    }
  }, []); // Le tableau vide assure que le code s'exécute uniquement au montage de la page

  return (
    <html lang="fr">
      <head>
        <>
          <link rel="alternate" type="application/rss+xml" title="Flux RSS People243" href="/feed" />

          <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9760088965124508"
     crossOrigin="anonymous"></script>

          {/* Typicons CSS */}
          <link
            href="https://cdnjs.cloudflare.com/ajax/libs/typicons/2.0.9/typicons.min.css"
            rel="stylesheet"
          />
          <Script
            id="jquery-core-js"
            src="https://code.jquery.com/jquery-3.6.0.min.js"
            strategy="beforeInteractive" // Charge ce script avant l'interaction avec d'autres scripts
          />

          {/* Debloat Configuration Script */}
          <Script>
            {`
          var debloatConfig = { "cssDelayType": "interact", "jsDelayType": "interact", "jsDelayMax": "" };
        `}
          </Script>

          {/* Script for modifying document ready state */}
          <Script
            type="text/javascript"
            data-cfasync="false"
            dangerouslySetInnerHTML={{
              __html: `
            "use strict"; (() => {
              if ([...document.querySelectorAll("script[defer]")].length && "complete" !== document.readyState) {
                let t = document.readyState;
                Object.defineProperty(document, "readyState", { configurable: !0, get() { return t }, set(e) { return t = e } });
                let e = !1;
                document.addEventListener("DOMContentLoaded", () => { t = "interactive", e = !0, document.dispatchEvent(new Event("readystatechange")), e = !1 });
                document.addEventListener("readystatechange", () => { e || "interactive" !== t || (t = "complete") });
              }
            })();
          `,
            }}
          />



          {/* Delay Load JS Script */}
          <Script
            type="text/javascript"
            data-cfasync="false"
            src="wp-content/plugins/debloat/inc/delay-load/js/delay-load.min1efe.js?ver=1.2.8"
          />

          {/*
<Script
        id="jquery-migrate-js"
        src="/wp-content/cache/debloat/js/f51aaf898aa1bdeec30dcec5314c2555.js"
        strategy="lazyOnload"
      />

      <script 
            type="text/javascript" 
            id="smartmag-lazyload-js"
            src="wp-content/cache/debloat/js/e708814815c5acce940a969178d6737e.js"
            defer
          />          
*/}

          {/* Magnific Popup */}
          <Script
            type="text/javascript"
            id="magnific-popup-js"
            src="/wp-content/cache/debloat/js/74c4267c24840851a2256900b3df486b.js"
            defer
          />

          {/* Theia Sticky Sidebar */}
          <Script
            type="text/javascript"
            id="theia-sticky-sidebar-js"
            src="/wp-content/cache/debloat/js/bec7ef33f65e3d23332c9bb50b07ff9a.js"
            defer
          />

          {/* Smartmag Theme JS */}
          <Script
            type="text/javascript"
            id="smartmag-theme-js"
            src="/wp-content/cache/debloat/js/bf6586edc4c61123d30261f79fd567fc.js"
            defer
          />

          {/* Micro Modal */}
          <Script
            type="text/javascript"
            id="micro-modal-js"
            src="/wp-content/cache/debloat/js/4ab3556eed23928ee2b4d00f0e3083d1.js"
            defer
          />

          <Script id="smartmag-lazy-inline-js-after" strategy="lazyOnload">
            {`
        /* <![CDATA[ */
        /**
         * @copyright ThemeSphere
         * @preserve
         */
        var BunyadLazy = {}; 
        BunyadLazy.load = function () { 
          function loadImage(element, callback) { 
            var attributes = {}; 
            if (element.dataset.bgset && element.dataset.sizes) {
              attributes.sizes = element.dataset.sizes;
              attributes.srcset = element.dataset.bgset;
            } else {
              attributes.src = element.dataset.bgsrc;
            }
            
            function setRatio(element) {
              var ratio = element.dataset.ratio; 
              if (ratio > 0) { 
                const parent = element.parentElement; 
                if (parent.classList.contains("media-ratio")) { 
                  const style = parent.style; 
                  if (!style.getPropertyValue("--a-ratio")) {
                    style.paddingBottom = 100 / ratio + "%"; 
                  }
                } 
              } 
            }
            setRatio(element);
            
            var img = document.createElement("img"); 
            for (let key in attributes) {
              img.setAttribute(key, attributes[key]); 
            }

            img.onload = function () { 
              var backgroundUrl = "url('" + (img.currentSrc || img.src) + "')";
              var style = element.style; 
              if (style.backgroundImage !== backgroundUrl) {
                requestAnimationFrame(() => { 
                  style.backgroundImage = backgroundUrl;
                  if (callback) callback(); 
                });
              }
              img.onload = null;
              img.onerror = null;
              img = null;
            };

            img.onerror = img.onload;
            if (img.complete && img.naturalWidth > 0 && img.onload) {
              img.onload(); 
            }
          }
          
          function processElement(element) { 
            if (!element.dataset.loaded) {
              loadImage(element, () => {
                document.dispatchEvent(new Event("lazyloaded"));
                element.dataset.loaded = 1; 
              });
            }
          }
          
          function onWindowLoad(callback) { 
            if (document.readyState === "complete") {
              callback(); 
            } else {
              window.addEventListener("load", callback);
            }
          }
          
          return { 
            initEarly: function () { 
              const processAll = () => { 
                document.querySelectorAll(".img.bg-cover:not(.lazyload)").forEach(processElement);
              }; 
              
              if (document.readyState !== "complete") { 
                const interval = setInterval(processAll, 150);
                onWindowLoad(() => { 
                  processAll();
                  clearInterval(interval); 
                });
              } else {
                processAll();
              }
            }, 
            callOnLoad: onWindowLoad, 
            initBgImages: function (callback) { 
              if (callback) {
                onWindowLoad(() => {
                  document.querySelectorAll(".img.bg-cover").forEach(processElement);
                });
              }
            }, 
            bgLoad: loadImage 
          }; 
        }();
        BunyadLazy.load.initEarly();
        /* ]]> */
      `}
          </Script>

          {/*

    <Script
        id="jquery-core-js"
        src="https://code.jquery.com/jquery-3.6.0.min.js"
        strategy="beforeInteractive" 
      />

      

 */}
        </>
      </head>
      <body className="home page-template page-template-page-templates page-template-no-wrapper page-template-page-templatesno-wrapper-php page page-id-6 theme-smart-mag woocommerce-no-js no-sidebar has-lb has-lb-sm ts-img-hov-fade has-sb-sep layout-normal elementor-default elementor-kit-802 elementor-page elementor-page-6">
        {/* Script pour gérer le thème */}
        <Script id="bunyad-scheme-script" strategy="afterInteractive">
          {`
          var BunyadSchemeKey = 'bunyad-scheme-6';
          (() => {
            const d = document.documentElement;
            const c = d.classList;
            var scheme = localStorage.getItem(BunyadSchemeKey);

            if (scheme) {
              d.dataset.origClass = c;
              scheme === 'dark' 
                ? c.remove('s-light', 'site-s-light') 
                : c.remove('s-dark', 'site-s-dark');
              c.add('site-s-' + scheme, 's-' + scheme);
            }
          })();
        `}
        </Script>

        {/*<div className="main-wrap">{children}</div>*/}

        <>
          {/* .main-wrap */}
          <div className="main-wrap">
            <div className="off-canvas-backdrop" />
            <div
              className="mobile-menu-container off-canvas s-dark hide-widgets-sm"
              id="off-canvas"
            >
              <div className="off-canvas-head">
                <a href="#" className="close">
                  <span className="visuallyhidden">Close Menu</span>
                  <i className="tsi tsi-times" />
                </a>
                <div className="ts-logo">
                  <Image
                    src="/images/logo-people243.png"
                    className="logo-mobile logo-image"
                    width={198}
                    height={56}
                    alt="SmartMag GoodNews"
                  />
                </div>
              </div>
              <div className="off-canvas-content">
                {/*<ul className="mobile-menu" />*/}
                {/* sidebar menu */}
                <ul className="mobile-menu">
                  {menuItems.map((menu, index) => (
                    <li
                      key={index}
                      className={`menu-item menu-item-type-custom ${
                        menu.subMenu.length > 0 ? "menu-item-has-children" : ""
                      }`}
                    >
                      <Link href={menu.link}>
                        <i className={menu.icon} /> {menu.title} 
                      </Link>

                      {menu.subMenu.length > 0 && (
                        <ul className="sub-menu">
                          {menu.subMenu.map((subMenuItem, subIndex) => (
                            <li
                              key={subIndex}
                              className="menu-item menu-item-type-custom"
                            >
                              <Link href={subMenuItem.link}>
                                {subMenuItem.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>

                <NewsleterComponentHeader />
                <div className="spc-social-block spc-social spc-social-b smart-head-social">
                  <a
                    href="https://www.facebook.com/people243/"
                    className="link service s-facebook"
                    target="_blank"
                    rel="nofollow noopener"
                  >
                    <i className="icon tsi tsi-facebook" />{" "}
                    <span className="visuallyhidden">Facebook</span>
                  </a>
                  <a
                    href="https://x.com/People243C/"
                    className="link service s-twitter"
                    target="_blank"
                    rel="nofollow noopener"
                  >
                    <i className="icon tsi tsi-twitter" />{" "}
                    <span className="visuallyhidden">X (Twitter)</span>
                  </a>
                  {/*
                  <a
                    href="https://www.dailymotion.com/people234TV"
                    className="link service s-instagram"
                    target="_blank"
                    rel="nofollow noopener"
                    style={{fontWeight:700}}
                  >
                    
                    {" "}d

                  </a>
                  */}
                  
                  <a
                    href="https://www.instagram.com/peoplecd243/"
                    className="link service s-instagram"
                    target="_blank"
                    rel="nofollow noopener"
                  >
                    <i className="icon tsi tsi-instagram" />{" "}
                    <span className="visuallyhidden">Instagram</span>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="smart-head smart-head-b smart-head-main"
              id="smart-head"
              data-sticky="auto"
              data-sticky-type="smart"
              data-sticky-full=""
            >
              <div className="smart-head-row smart-head-mid smart-head-row-3 s-dark smart-head-row-full">
                <div className="inner wrap">
                  <div className="items items-left ">
                    <div className="spc-social-block spc-social spc-social-b smart-head-social">
                      <a
                        href="https://www.facebook.com/people243/"
                        className="link service s-facebook"
                        target="_blank"
                        rel="nofollow noopener"
                      >
                        <i className="icon tsi tsi-facebook" />{" "}
                        <span className="visuallyhidden">Facebook</span>
                      </a>
                      <a
                        href="https://x.com/People243C/"
                        className="link service s-twitter"
                        target="_blank"
                        rel="nofollow noopener"
                      >
                        <i className="icon tsi tsi-twitter" />{" "}
                        <span className="visuallyhidden">X (Twitter)</span>
                      </a>                                            
                     {/*
                      <a
                        href="https://www.dailymotion.com/people237TV"
                        className="link service s-instagram"
                        target="_blank"
                        rel="nofollow noopener"
                        style={{fontWeight:700}}
                      >                        
                        {" "}d
                      </a>
                     */}
                     
                  <a
                    href="https://www.instagram.com/peoplecd243/"
                    className="link service s-instagram"
                    target="_blank"
                    rel="nofollow noopener"
                  >
                    <i className="icon tsi tsi-instagram" />{" "}
                    <span className="visuallyhidden">Instagram</span>
                  </a>
                    </div>
                  </div>

                  <div className="items items-center ">
                    <Link
                      href="/"
                      title="SmartMag GoodNews"
                      rel="home"
                      className="logo-link ts-logo logo-is-image"
                    >
                      <h1>
                        <Image
                          src="/images/logo-people243.png"
                          className="logo-image"
                          width={263}
                          height={74}
                          alt="SmartMag GoodNews"
                        />
                      </h1>
                    </Link>
                  </div>

                  <div className="items items-right">
  {/*
  <a
    href="http://eepurl.com/hq-3Xb"
    className="ts-button ts-button-alt ts-button1"
    target="_blank"
    rel="noopener"
  >
    Subscribe{" "}
  </a>
  */}
  <a href="#auth-modal" className="auth-link has-icon">
    {/* <i className="icon tsi tsi-user-circle-o" /> */}

    <span className="label">{`Kinshasa, ${dateTime}`}</span>

  </a>
</div>

                </div>
              </div>

              <div className="smart-head-row smart-head-bot smart-head-row-3 s-dark has-center-nav smart-head-row-full">
                <div className="inner wrap">
                  <div className="items items-left ">
                    <button
                      className="offcanvas-toggle has-icon"
                      type="button"
                      aria-label="Menu"
                    >
                      <span className="hamburger-icon hamburger-icon-a">
                        <span className="inner" />
                      </span>
                    </button>
                  </div>
                  <div className="items items-center ">
                    <div className="nav-wrap">
                      {/*menu desktop*/}
                      <nav className="navigation navigation-main nav-hov-a">
                        <ul id="menu-main-menu" className="menu">
                          {menuItemsD.map((item, index) => (
                            <li
                              key={index}
                              className={`menu-item ${
                                item.subMenu ? "menu-item-has-children" : ""
                              }`}
                            >
                              <Link href={item.link}>
                              <i className={`typcn ${item.icon}`} style={{marginLeft:2}}/>{" "}
                              &nbsp;
                                {item.title}
                              </Link>
                              {item.subMenu && (
                                <ul className="sub-menu">
                                  {item.subMenu.map((subItem, subIndex) => (
                                    <li key={subIndex} className="menu-item">
                                      <Link href={subItem.link}>
                                        {subItem.title}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </li>
                          ))}
                        </ul>
                      </nav>

                      {/*menu desktop*/}
                    </div>
                  </div>
                  <div className="items items-right ">
                    <div className="scheme-switcher has-icon-only">
                      <a
                        href="#"
                        className="toggle is-icon toggle-dark"
                        title="Switch to Dark Design - easier on eyes."
                      >
                        <i
                          className="icon tsi tsi-moon"
                          style={{ color: "#777" }}
                        />
                      </a>
                      <a
                        href="#"
                        className="toggle is-icon toggle-light"
                        title="Switch to Light Design."
                      >
                        <i className="icon tsi tsi-bright" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="smart-head smart-head-a smart-head-mobile"
              id="smart-head-mobile"
              data-sticky="mid"
              data-sticky-type="smart"
              data-sticky-full=""
            >
              <div className="smart-head-row smart-head-mid smart-head-row-3 s-dark smart-head-row-full">
                <div className="inner wrap">
                  <div className="items items-left ">
                    <button
                      className="offcanvas-toggle has-icon"
                      type="button"
                      aria-label="Menu"
                    >
                      <span className="hamburger-icon hamburger-icon-a">
                        <span className="inner" />
                      </span>
                    </button>
                  </div>
                  <div className="items items-center ">
                    <Link
                      href="/"
                      title="SmartMag GoodNews"
                      rel="home"
                      className="logo-link ts-logo logo-is-image"
                    >
                      <span>
                        <Image
                          src="/images/logo-people243.png"
                          className="logo-mobile logo-image"
                          width={198}
                          height={56}
                          alt="SmartMag GoodNews"
                        />
                      </span>
                    </Link>
                  </div>

                  <div className="items items-right ">
                    <Link href="/recherche" className="" title="Search">
                      <i className="tsi tsi-search" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="smart-head-row smart-head-bot s-dark smart-head-scroll-nav smart-head-row-full">
                <div className="inner wrap">
                  <div className="items items-left ">
                    <div className="nav-wrap">
                      {/*menu mobile*/}

                      <nav className="navigation navigation-scroll nav-hov-b" style={{ display: "flex", justifyContent: "center", alignItems: "center", padding: "10px 0" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "20px", fontSize: 14, fontWeight: 700, fontFamily: "Roboto Slab, sans-serif" }}>
        {navItems.map((item, index) => (
          <Link key={index} href={item.link} legacyBehavior>
            <a style={{ display: "flex", alignItems: "center", gap: "5px", textDecoration: "none", color: "inherit" }}>
              <i className={`typcn ${item.icon}`} /> {item.title}
            </a>
          </Link>
        ))}
      </div>
    </nav>
    




                      {/*menu mobile*/}
                    </div>
                  </div>
                  <div className="items items-center empty"></div>
                  <div className="items items-right empty"></div>
                </div>
              </div>
            </div>
            <PubAfterNav/>
            <div className="main-full">
              <div id="post-6" className="main-wrap">
                {/*<div className="main-wrap">{children}</div>*/}
                {/*loading && <Loader />} {/* Affichage du loader */}
                {isTransitioning && <TransitionPage />}
                {children}
                <StickyFooter />
                <BottomMenu />

              </div>
            </div>

            <Footer/>
          </div>
          {/* .main-wrap */}
        </>
      </body>
    </html>
  );
}
