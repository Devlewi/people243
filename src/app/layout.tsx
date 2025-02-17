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
        { title: "Camer", link: "/categorie/people-camer" },
        { title: "International", link: "/categorie/people-international" },
        { title: "Buzz", link: "/categorie/people-buzz" },
      ],
    },
    {
      title: "Portraits",
      icon: "typcn typcn-camera",
      link: "/categorie/people-portrait",
      subMenu: [],
    },
    {
      title: "Events",
      icon: "typcn typcn-calendar",
      link: "/categorie/events",
      subMenu: [
        { title: "Concerts", link: "/categorie/events-concerts" },
        { title: "Festival", link: "/categorie/events-festivals" },
      ],
    },
    {
      title: "Découverte",
      icon: "typcn typcn-camera",
      link: "#",
      subMenu: [
        { title: "Cinéma/art", link: "/categorie/decouverte-cinema-arts" },
        { title: "Cuisine", link: "/categorie/decouverte-cuisine" },
        { title: "Littérature", link: "/categorie/decouverte-litterature" },
        { title: "Mode", link: "/categorie/decouverte-mode" },
        {
          title: "Santé – bien être",
          link: "/categorie/decouverte-sante-et-bien-etre",
        },
      ],
    },
    {
      title: "Bons plans",
      icon: "typcn typcn-star",
      link: "#",
      subMenu: [
        { title: "Restaurant", link: "/categorie/bons-plans-restaurants" },
        { title: "Party", link: "/categorie/bons-plans-party-after-work" },
        { title: "Tourisme", link: "/categorie/bons-plans-tourisme" },
      ],
    },
    {
      title: "Top stars",
      icon: "typcn typcn-star-outline",
      link: "/categorie/top-stars",
      subMenu: [],
    },
    {
      title: "Société",
      icon: "typcn typcn-world",
      link: "/categorie/societes",
      subMenu: [],
    },
    {
      title: "Sports",
      icon: "typcn typcn-flag",
      link: "/categorie/sport",
      subMenu: [],
    },
    {
      title: "Galerie Photos",
      icon: "typcn typcn-image",
      link: "/categorie/galerie-photos",
      subMenu: [],
    },
    {
      title: "Vidéos",
      icon: "typcn typcn-video",
      link: "/categorie/videos",
      subMenu: [],
    },
  ];

  const menuItemsD = [
    {
      title: "People",
      icon: "typcn-home",
      link: "/",
      subMenu: [
        { title: "Camer", link: "/categorie/people-camer" },
        { title: "International", link: "/categorie/people-international" },
        { title: "Buzz", link: "/categorie/people-buzz" },
      ],
    },
    {
      title: "Portraits",
      icon: "typcn-camera",
      link: "/categorie/people-portrait",
    },
    {
      title: "Events",
      icon: "typcn-calendar",
      link: "/categorie/events",
      subMenu: [
        { title: "Concerts", link: "/categorie/events-concerts" },
        { title: "Festival", link: "/categorie/events-festivals" },
      ],
    },
    {
      title: "Découverte",
      icon: "typcn-camera",
      link: "#",
      subMenu: [
        { title: "Cinéma/art", link: "/categorie/decouverte-cinema-arts" },
        { title: "Cuisine", link: "/categorie/decouverte-cuisine" },
        { title: "Littérature", link: "/categorie/decouverte-litterature" },
        { title: "Mode", link: "/categorie/decouverte-mode" },
        {
          title: "Santé – bien être",
          link: "/categorie/decouverte-sante-et-bien-etre",
        },
      ],
    },
    {
      title: "Bons plans",
      icon: "typcn-star",
      link: "#",
      subMenu: [
        { title: "Restaurant", link: "/categorie/bons-plans-restaurants" },
        { title: "Party", link: "/categorie/bons-plans-party-after-work" },
        { title: "Tourisme", link: "/categorie/bons-plans-tourisme" },
      ],
    },
    {
      title: "Top stars",
      icon: "typcn-star-outline",
      link: "/categorie/top-stars",
    },
    {
      title: "Société",
      icon: "typcn-world",
      link: "/categorie/societes",
    },
    {
      title: "Sports",
      icon: "typcn-flag",
      link: "/categorie/sport",
    },
    {
      title: "Galerie Photos",
      icon: "typcn-image",
      link: "/categorie/galerie-photos",
    },
    {
      title: "Vidéos",
      icon: "typcn-video",
      link: "/categorie/videos",
    },
  ];

  const navItems = [
    { title: "PEOPLE", icon: "typcn-home", link: "/categorie/people" },
    { title: "PORTRAITS", icon: "typcn-camera", link: "/categorie/people-portrait" },
    { title: "EVENTS", icon: "typcn-calendar", link: "/categorie/events" },
    { title: "DECOUVERTES", icon: "typcn-camera", link: "/categorie/decouvertes" },
    { title: "BONS PLANS", icon: "typcn-star", link: "/categorie/bons-plans" },
    { title: "TOP STARS", icon: "typcn-star-outline", link: "/categorie/top-star" },
    { title: "SOCIETES", icon: "typcn-world", link: "/categorie/societes" },
    { title: "SPORTS", icon: "typcn-flag", link: "/categorie/sport" },
    { title: "GALERIE PHOTOS", icon: "typcn-image", link: "/categorie/galerie-photos" },
    { title: "VIDEOS", icon: "typcn-video", link: "/categorie/videos" },
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
                                <i className={`typcn ${item.icon}`} />{" "}
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

            <footer className="main-footer cols-gap-lg footer-bold s-dark">
              <div className="upper-footer bold-footer-upper">
                <div className="ts-contain wrap">
                  <div className="widgets row cf">
                    <div className="widget col-md-3 widget-about">
                      <div className="widget-title block-head block-head-ac block-head block-head-ac block-head-b is-left has-style">
                        <h5 className="heading" style={{ color: "#0a99da" }}>
                          A Propos de Nous
                        </h5>
                      </div>
                      <div className="inner ">
                        <div className="image-logo">
                        <Link href={"/"}>
                          <Image
                            src="/images/logo-people243.png"
                            width={180}
                            height={80}
                            alt="Logo"
                          />
                          </Link>
                        </div>
                        <div className="base-text about-text">
                          <p>
                            Découvrez en live l actualité people en photos et
                            vidéos. Toutes les news et actualités de stars, les
                            meilleurs et les pires look de vos stars.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="widget col-md-2 ts-block-widget smartmag-widget-posts-small">
                      <div className="block">
                        <section
                          className="block-wrap block-posts-small block-sc mb-none"
                          data-id={28}
                        >
                          <Link href={"/categorie/people"}>
                          <div className="widget-title block-head block-head-ac block-head block-head-ac block-head-b is-left has-style">
                            <h5
                              className="heading"
                              style={{ color: "#0a99da" }}
                            >
                              People
                            </h5>
                          </div>
                          </Link>
                          <div className="block-content">
                            <div className="loop loop-small loop-small-a loop-sep loop-small-sep grid grid-1 md:grid-1 sm:grid-1 xs:grid-1">
                              <article className="l-post small-post small-a-post m-pos-left">
                                <div className="content">
                                  <div className="post-meta post-meta-a post-meta-left has-below">
                                    <h4 className="is-title post-title">
                                      <Link href={"/categorie/people-camer"} className="white-title">
                                        <i className="typcn typcn-chevron-right" />{" "}
                                        Camer
                                      </Link>
                                    </h4>
                                  </div>
                                </div>
                              </article>
                              <article className="l-post small-post small-a-post m-pos-left">
                                <div className="content">
                                  <div className="post-meta post-meta-a post-meta-left has-below">
                                    <h4 className="is-title post-title">
                                    <Link href={"/categorie/people-international"} className="white-title">
                                        <i className="typcn typcn-chevron-right" />{" "}
                                        International
                                      </Link>
                                    </h4>
                                  </div>
                                </div>
                              </article>
                              <article className="l-post small-post small-a-post m-pos-left">
                                <div className="content">
                                  <div className="post-meta post-meta-a post-meta-left has-below">
                                    <h4 className="is-title post-title">
                                      <Link href={"/categorie/people-buzz	"} className="white-title">
                                        <i className="typcn typcn-chevron-right" />{" "}
                                        Buzz
                                      </Link>                                      
                                    </h4>
                                  </div>
                                </div>
                              </article>
                            </div>
                          </div>
                        </section>
                      </div>
                      <br />
                      <br />
                      <section
                        className="block-wrap block-posts-small block-sc mb-none"
                        data-id={28}
                      >
                        <Link href={"/categorie/events"}>
                        <div className="widget-title block-head block-head-ac block-head block-head-ac block-head-b is-left has-style">
                          <h5 className="heading" style={{ color: "#0a99da" }}>
                            Events
                          </h5>
                        </div>
                        </Link>
                        <div className="block-content">
                          <div className="loop loop-small loop-small-a loop-sep loop-small-sep grid grid-1 md:grid-1 sm:grid-1 xs:grid-1">
                            <article className="l-post small-post small-a-post m-pos-left">
                              <div className="content">
                                <div className="post-meta post-meta-a post-meta-left has-below">
                                  <h4 className="is-title post-title">
                                      <Link href={"/categorie/events-concerts"} className="white-title">
                                        <i className="typcn typcn-chevron-right" />{" "}
                                        Concert
                                      </Link>                                                                          
                                  </h4>
                                </div>
                              </div>
                            </article>
                            <article className="l-post small-post small-a-post m-pos-left">
                              <div className="content">
                                <div className="post-meta post-meta-a post-meta-left has-below">
                                  <h4 className="is-title post-title">
                                  <Link href={"/categorie/events-festivals"} className="white-title">
                                        <i className="typcn typcn-chevron-right" />{" "}
                                        Festival
                                      </Link>                                                                                                              
                                  </h4>
                                </div>
                              </div>
                            </article>
                          </div>
                        </div>
                        <br/><br/>
                        <Link href={"/categorie/top-stars"}>
                          <div className="widget-title block-head block-head-ac block-head block-head-ac block-head-b is-left has-style">
                            <h5
                              className="heading"
                              style={{ color: "#0a99da" }}
                            >
                              Top stars
                            </h5>
                          </div>
                          </Link>
                      </section>
                    </div>
                    <div className="widget col-md-2 ts-block-widget smartmag-widget-posts-small">
                      <div className="block">
                        <section
                          className="block-wrap block-posts-small block-sc mb-none"
                          data-id={28}
                        >
                          <Link href={"/categorie/decouvertes"}>
                          <div className="widget-title block-head block-head-ac block-head block-head-ac block-head-b is-left has-style">
                            <h5
                              className="heading"
                              style={{ color: "#0a99da" }}
                            >
                              Découverte
                            </h5>
                          </div>
                          </Link>
                          <div className="block-content">
                            <div className="loop loop-small loop-small-a loop-sep loop-small-sep grid grid-1 md:grid-1 sm:grid-1 xs:grid-1">
                              <article className="l-post small-post small-a-post m-pos-left">
                                <div className="content">
                                  <div className="post-meta post-meta-a post-meta-left has-below">
                                    <h4 className="is-title post-title">

                                    <Link href={"/categorie/decouverte-cinema-arts"} className="white-title">
                                        <i className="typcn typcn-chevron-right" />{" "}
                                        Cinéma/art
                                      </Link>                                                                                                              
                                      
                                    </h4>
                                  </div>
                                </div>
                              </article>
                              <article className="l-post small-post small-a-post m-pos-left">
                                <div className="content">
                                  <div className="post-meta post-meta-a post-meta-left has-below">
                                    <h4 className="is-title post-title">
                                    <Link href={"/categorie/decouverte-cuisine"} className="white-title">
                                        <i className="typcn typcn-chevron-right" />{" "}
                                        Cuisine
                                      </Link>   
                                      
                                    </h4>
                                  </div>
                                </div>
                              </article>
                              <article className="l-post small-post small-a-post m-pos-left">
                                <div className="content">
                                  <div className="post-meta post-meta-a post-meta-left has-below">
                                    <h4 className="is-title post-title">
                                    <Link href={"/categorie/decouverte-litterature"} className="white-title">
                                        <i className="typcn typcn-chevron-right" />{" "}
                                        Littérature
                                      </Link>                                         
                                    </h4>
                                  </div>
                                </div>
                              </article>
                              <article className="l-post small-post small-a-post m-pos-left">
                                <div className="content">
                                  <div className="post-meta post-meta-a post-meta-left has-below">
                                    <h4 className="is-title post-title">
                                      <Link href={"/categorie/decouverte-mode"} className="white-title">
                                        <i className="typcn typcn-chevron-right" />{" "}
                                        Mode
                                      </Link>                                                                               
                                    </h4>
                                  </div>
                                </div>
                              </article>
                              <article className="l-post small-post small-a-post m-pos-left">
                                <div className="content">
                                  <div className="post-meta post-meta-a post-meta-left has-below">
                                    <h4 className="is-title post-title">
                                    <Link href={"/categorie/decouverte-sante-et-bien-etre"} className="white-title">
                                        <i className="typcn typcn-chevron-right" />{" "}
                                        Santé – bien être
                                      </Link>                                                                                                                     
                                    </h4>
                                  </div>
                                </div>
                              </article>
                            </div>
                          </div>
                          <br/>
                          <br/>
                          <Link href={"/categorie/societes"}>
                          <div className="widget-title block-head block-head-ac block-head block-head-ac block-head-b is-left has-style">
                            <h5
                              className="heading"
                              style={{ color: "#0a99da" }}
                            >
                              Société
                            </h5>
                          </div>
                            </Link>                          
                        </section>
                      </div>
                    </div>
                    <div className="widget col-md-2 ts-block-widget smartmag-widget-posts-small">
                      <div className="block">
                        <section
                          className="block-wrap block-posts-small block-sc mb-none"
                          data-id={28}
                        >
                          <Link href={"/categorie/bons-plans"}>
                          <div className="widget-title block-head block-head-ac block-head block-head-ac block-head-b is-left has-style">
                            <h5
                              className="heading"
                              style={{ color: "#0a99da" }}
                            >
                              Bons Plans
                            </h5>
                          </div>
                          </Link>
                          <div className="block-content">
                            <div className="loop loop-small loop-small-a loop-sep loop-small-sep grid grid-1 md:grid-1 sm:grid-1 xs:grid-1">
                              <article className="l-post small-post small-a-post m-pos-left">
                                <div className="content">
                                  <div className="post-meta post-meta-a post-meta-left has-below">
                                    <h4 className="is-title post-title">
                                    <Link href={"/categorie/bons-plans-restaurants"} className="white-title">
                                        <i className="typcn typcn-chevron-right" />{" "}
                                        Restaurant
                                      </Link>                                                                                                                                                           
                                    </h4>
                                  </div>
                                </div>
                              </article>
                              <article className="l-post small-post small-a-post m-pos-left">
                                <div className="content">
                                  <div className="post-meta post-meta-a post-meta-left has-below">
                                    <h4 className="is-title post-title">
                                    <Link href={"/categorie/bons-plans-party-after-work"} className="white-title">
                                        <i className="typcn typcn-chevron-right" />{" "}
                                        Party
                                      </Link>                                                                                                                                                           
                                    </h4>
                                  </div>
                                </div>
                              </article>
                              <article className="l-post small-post small-a-post m-pos-left">
                                <div className="content">
                                  <div className="post-meta post-meta-a post-meta-left has-below">
                                    <h4 className="is-title post-title">
                                    <Link href={"/categorie/bons-plans-tourisme"} className="white-title">
                                        <i className="typcn typcn-chevron-right" />{" "}
                                        Tourisme
                                      </Link>                                                                                                                                                           
                                    </h4>
                                  </div>
                                </div>
                              </article>
                            </div>
                          </div>
                          <br />
                          <br />
                         

                 
                            <Link href={"/categorie/sport"}>
                          <div className="widget-title block-head block-head-ac block-head block-head-ac block-head-b is-left has-style">
                            <h5
                              className="heading"
                              style={{ color: "#0a99da" }}
                            >
                              Sport
                            </h5>
                          </div>
                          </Link>
                        </section>
                      </div>
                    </div>
                    <div className="widget col-md-3 ts-block-widget smartmag-widget-posts-small">
                      <div className="block">
                        <section
                          className="block-wrap block-posts-small block-sc mb-none"
                          data-id={28}
                        >
                          <div className="widget-title block-head block-head-ac block-head block-head-ac block-head-b is-left has-style">
                            <h5
                              className="heading"
                              style={{ color: "#0a99da" }}
                            >
                              Nous Contacter
                            </h5>
                          </div>
                          <div className="block-content">
                            <div className="loop loop-small loop-small-a loop-sep loop-small-sep grid grid-1 md:grid-1 sm:grid-1 xs:grid-1">
                              <article className="l-post small-post small-a-post m-pos-left">
                                <div className="content">
                                  <div className="post-meta post-meta-a post-meta-left has-below">
                                    <h4 className="is-title post-title">
                                      <a href="#" className="white-title">
                                        <i className="typcn typcn-chevron-right" />{" "}
                                        Immeuble Hibiscus Rue Technopark Fouda,
                                        Yaoundé Cameroun
                                      </a>
                                    </h4>
                                  </div>
                                </div>
                              </article>
                              <article className="l-post small-post small-a-post m-pos-left">
                                <div className="content">
                                  <div className="post-meta post-meta-a post-meta-left has-below">
                                    <h4 className="is-title post-title">
                                      <a href="#" className="white-title">
                                        <i className="typcn typcn-chevron-right" />{" "}
                                        ci@cynomedia.com
                                      </a>
                                    </h4>
                                  </div>
                                </div>
                              </article>
                              <article className="l-post small-post small-a-post m-pos-left">
                                <div className="content">
                                  <div className="post-meta post-meta-a post-meta-left has-below">
                                    <h4 className="is-title post-title">
                                      <a href="#" className="white-title">
                                        <i className="typcn typcn-chevron-right" />{" "}
                                        Tel: +237 6 78 82 04 04
                                      </a>
                                    </h4>
                                  </div>
                                </div>
                              </article>
                            </div>
                          </div>
                        </section>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lower-footer bold-footer-lower">
                <div className="ts-contain inner">
                  <div className="spc-social-block spc-social spc-social-b ">
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
                    {/*
                    <a
                      href="#"
                      className="link service s-pinterest"
                      target="_blank"
                      rel="nofollow noopener"
                    >
                      <i className="icon tsi tsi-pinterest-p" />{" "}
                      <span className="visuallyhidden">Pinterest</span>
                    </a>
                    */}
                  </div>
                  <div className="links">
                    <div className="menu-footer-links-container">
                      <p style={{ color: "#0a99da", fontWeight: "bolder" }}>
                        Les autres sites du Réseau:{" "}
                      </p>
                      <ul
                        id="menu-footer-links"
                        className="menu"
                        style={{ justifyContent: "flex-start" }}
                      >
{/*
                        <li
                          id="menu-item-352"
                          className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-6 current_page_item menu-item-352"
                        >
                          <a
                            href="#"
                            aria-current="page"
                            className="white-title"
                          >
                            <i className="typcn typcn-world" /> people225.com
                          </a>
                        </li>
                        <li
                          id="menu-item-354"
                          className="menu-item menu-item-type-taxonomy menu-item-object-category menu-cat-10 menu-item-354"
                        >
                          <a
                            href="#"
                            className="white-title"
                          >
                            <i className="typcn typcn-world" /> people223.com
                          </a>
                        </li>
                        <li
                          id="menu-item-355"
                          className="menu-item menu-item-type-taxonomy menu-item-object-category menu-cat-6 menu-item-355"
                        >
                          <a
                            href="#"
                            className="white-title"
                          >
                            <i className="typcn typcn-world" /> people228.com
                          </a>
                        </li>
                        <li
                          id="menu-item-357"
                          className="menu-item menu-item-type-taxonomy menu-item-object-category menu-cat-11 menu-item-357"
                        >
                          <a
                            href="#"
                            className="white-title"
                          >
                            <i className="typcn typcn-world" /> people229.com
                          </a>
                        </li>
*/}
                        <li
                          id="menu-item-353"
                          className="menu-item menu-item-type-custom menu-item-object-custom menu-item-353"
                        >
                          <a href="https://people237.com/" className="white-title">
                            <i className="typcn typcn-world" /> people237.com
                          </a>
                        </li>
                        <li
                          id="menu-item-356"
                          className="menu-item menu-item-type-custom menu-item-object-custom menu-item-356"
                        >
                          <a href="https://journaldekinshasa.com/" className="white-title">
                            <i className="typcn typcn-world" /> 
                            journaldekinshasa.com
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="copyright white-title">
                    © 2024 Copyright People243.com ©, All Rights Reserved. 
                    {/* | Mentions Légales{" "} */}
                  </div>
                </div>
              </div>
            </footer>
          </div>
          {/* .main-wrap */}
        </>
      </body>
    </html>
  );
}
