import http from 'k6/http';
import { check, sleep } from 'k6';

const baseUrl = 'http://localhost:3000';  // URL de ton site frontend Next.js

export let options = {
  stages: [
    { duration: '30s', target: 50 },   // 50 utilisateurs simulés
    { duration: '1m', target: 200 },   // 200 utilisateurs simulés
    { duration: '30s', target: 500 },  // 500 utilisateurs simulés
    { duration: '1m', target: 1000 },  // 1000 utilisateurs simulés
    { duration: '30s', target: 0 },    // Réduction progressive du nombre d'utilisateurs
  ],
};

export default function () {
  // Tester la page d'accueil
  let homepageRes = http.get(`${baseUrl}/`);
  check(homepageRes, {
    'Homepage: status est 200': (r) => r.status === 200,
    'Homepage: temps de réponse < 500ms': (r) => r.timings.duration < 500,
  });

  // Tester une autre page ou route spécifique (par exemple, une catégorie d'articles)
  let categorySlug = 'technologie';  // Remplace par un slug valide de ta catégorie
  let categoryRes = http.get(`${baseUrl}/categorie/${categorySlug}`);
  check(categoryRes, {
    'Catégorie: status est 200': (r) => r.status === 200,
    'Catégorie: temps de réponse < 500ms': (r) => r.timings.duration < 500,
  });

  // Simuler un utilisateur naviguant entre plusieurs pages (par exemple, une recherche d'article)
  let searchQuery = 'actualité';  // Mot-clé pour rechercher des articles
  let searchRes = http.get(`${baseUrl}/recherche?q=${searchQuery}`);
  check(searchRes, {
    'Recherche: status est 200': (r) => r.status === 200,
    'Recherche: temps de réponse < 500ms': (r) => r.timings.duration < 500,
  });

  sleep(1);  // Pause entre chaque action pour simuler un utilisateur réel
}
