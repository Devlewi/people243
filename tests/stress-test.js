import http from 'k6/http';
import { check, sleep } from 'k6';

const baseUrl = 'https://controlpanel.people237.com/wp-json'; // Backend API URL

export let options = {
  stages: [
    { duration: '30s', target: 50 },   // 50 utilisateurs
    { duration: '1m', target: 200 },   // 200 utilisateurs
    { duration: '30s', target: 500 },  // 500 utilisateurs
    { duration: '1m', target: 1000 },  // 1000 utilisateurs
    { duration: '30s', target: 0 },    // Redescendre progressivement
  ],
};

export default function () {
  // Endpoint pour récupérer les articles sur la page d'accueil
  let homepageRes = http.get(`${baseUrl}/articles/homepage`);
  check(homepageRes, {
    'Homepage: status est 200': (r) => r.status === 200,
    'Homepage: temps de réponse < 500ms': (r) => r.timings.duration < 500,
  });

  // Endpoint pour récupérer les articles d'une catégorie spécifique
  let slug = 'technologie';  // Exemple de slug pour catégorie
  let categoryRes = http.get(`${baseUrl}/custom-api/publications/slug-categorie/${slug}`);
  check(categoryRes, {
    'Catégorie: status est 200': (r) => r.status === 200,
    'Catégorie: temps de réponse < 500ms': (r) => r.timings.duration < 500,
  });

  // Endpoint pour récupérer les articles d'une catégorie avec pagination
  let currentPage = 1;  // Page 1
  let paginatedCategoryRes = http.get(`${baseUrl}/custom-api/publications/slug-categorie/${slug}?page=${currentPage}`);
  check(paginatedCategoryRes, {
    'Catégorie avec pagination: status est 200': (r) => r.status === 200,
    'Catégorie avec pagination: temps de réponse < 500ms': (r) => r.timings.duration < 500,
  });

  // Endpoint pour s'abonner à la newsletter
  let email = 'test@example.com';  // Adresse e-mail pour l'abonnement
  let subscribeRes = http.post(`${baseUrl}/newsletter/v1/subscribe`, { email: email });
  check(subscribeRes, {
    'Newsletter: status est 200': (r) => r.status === 200,
    'Newsletter: temps de réponse < 500ms': (r) => r.timings.duration < 500,
  });

  // Endpoint pour rechercher des articles par mot-clé
  let query = 'actualité';  // Mot-clé pour la recherche
  let searchRes = http.get(`${baseUrl}/custom/v1/search/?q=${query}&page=1`);
  check(searchRes, {
    'Recherche: status est 200': (r) => r.status === 200,
    'Recherche: temps de réponse < 500ms': (r) => r.timings.duration < 500,
  });

  // Endpoint pour récupérer les détails d'un article
  let articleSlug = 'exemple-d-article';  // Exemple de slug pour un article spécifique
  let articleRes = http.get(`${baseUrl}/custom/v1/article/${articleSlug}`);
  check(articleRes, {
    'Article: status est 200': (r) => r.status === 200,
    'Article: temps de réponse < 500ms': (r) => r.timings.duration < 500,
  });

  sleep(1);  // Pause entre chaque requête pour simuler un utilisateur réel
}
