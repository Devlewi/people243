import http from 'k6/http';
import { check, sleep } from 'k6';

// URLs
//const baseUrlFrontend = 'http://localhost:3000';  // Frontend local
const baseUrlFrontend = 'https://people237.vercel.app';  // Frontend local
const baseUrlBackend = 'https://controlpanel.people237.com';  // Backend WordPress

export let options = {
  stages: [
    { duration: '1s', target: 1 },    // 50 utilisateurs simulés
    //{ duration: '30s', target: 50 },    // 50 utilisateurs simulés
    //{ duration: '1m', target: 200 },    // 200 utilisateurs simulés
    //{ duration: '30s', target: 500 },   // 500 utilisateurs simulés
    //{ duration: '1m', target: 1000 },   // 1000 utilisateurs simulés
    //{ duration: '30s', target: 0 },     // Réduction progressive du nombre d'utilisateurs
  ],
};

export default function () {
  // Tester la page d'accueil du frontend
  let homepageRes = http.get(`${baseUrlFrontend}`);
  check(homepageRes, {
    'Homepage: status est 200': (r) => r.status === 200,
    'Homepage: temps de réponse < 500ms': (r) => r.timings.duration < 500,
  });

  // Tester la catégorie Portrait du frontend
  let categoryPortraitRes = http.get(`${baseUrlFrontend}/categorie/people-portrait`);
  check(categoryPortraitRes, {
    'Catégorie Portrait: status est 200': (r) => r.status === 200,
    'Catégorie Portrait: temps de réponse < 500ms': (r) => r.timings.duration < 500,
  });

  // Tester la catégorie Découverte Cinéma & Arts du frontend
  let categoryCinemaArtsRes = http.get(`${baseUrlFrontend}/categorie/decouverte-cinema-arts`);
  check(categoryCinemaArtsRes, {
    'Catégorie Cinéma Arts: status est 200': (r) => r.status === 200,
    'Catégorie Cinéma Arts: temps de réponse < 500ms': (r) => r.timings.duration < 500,
  });

  // Tester la catégorie People Camer du frontend
  let categoryPeopleCamerRes = http.get(`${baseUrlFrontend}/categorie/people-camer`);
  check(categoryPeopleCamerRes, {
    'Catégorie People Camer: status est 200': (r) => r.status === 200,
    'Catégorie People Camer: temps de réponse < 500ms': (r) => r.timings.duration < 500,
  });

  // Tester la catégorie avec pagination (Sport - page 2)
  let categorySportPage2Res = http.get(`${baseUrlFrontend}/categorie/sport?page=2`);
  check(categorySportPage2Res, {
    'Catégorie Sport Page 2: status est 200': (r) => r.status === 200,
    'Catégorie Sport Page 2: temps de réponse < 500ms': (r) => r.timings.duration < 500,
  });

  // Tester les pages de détails d'articles du frontend
  let article1Res = http.get(`${baseUrlFrontend}/lady-ponce-conseille-a-samuel-etoo-daller-briller-dans-un-autre-pays`);
  check(article1Res, {
    'Article Lady Ponce: status est 200': (r) => r.status === 200,
    'Article Lady Ponce: temps de réponse < 500ms': (r) => r.timings.duration < 500,
  });

  let article2Res = http.get(`${baseUrlFrontend}/kocee-promet-une-masterclass-avant-son-concert-du-15-mars`);
  check(article2Res, {
    'Article Kocee: status est 200': (r) => r.status === 200,
    'Article Kocee: temps de réponse < 500ms': (r) => r.timings.duration < 500,
  });

  let article3Res = http.get(`${baseUrlFrontend}/1-bamileke-vaut-10-nkwa-longue-longue-demande-pardon-pour-cette-phrase`);
  check(article3Res, {
    'Article Bamileke: status est 200': (r) => r.status === 200,
    'Article Bamileke: temps de réponse < 500ms': (r) => r.timings.duration < 500,
  });

  let article4Res = http.get(`${baseUrlFrontend}/musique-cysoul-rejoint-warner-music-france`);
  check(article4Res, {
    'Article Cysoul: status est 200': (r) => r.status === 200,
    'Article Cysoul: temps de réponse < 500ms': (r) => r.timings.duration < 500,
  });

  let article5Res = http.get(`${baseUrlFrontend}/locko-en-concert-a-bruxelles-le-15-mars`);
  check(article5Res, {
    'Article Locko: status est 200': (r) => r.status === 200,
    'Article Locko: temps de réponse < 500ms': (r) => r.timings.duration < 500,
  });

  // Exemple d'appel API vers le backend WordPress
  /*
  let apiRes = http.get(`${baseUrlBackend}/wp-json/mon-endpoint/api`);
  check(apiRes, {
    'API WordPress: status est 200': (r) => r.status === 200,
    'API WordPress: temps de réponse < 500ms': (r) => r.timings.duration < 500,
  });*/

  sleep(1);  // Pause entre chaque action
}
