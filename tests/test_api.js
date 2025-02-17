import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
  vus: 500, // Nombre d'utilisateurs simultanés
  duration: '30s', // Durée du test
};

// Écrire un script de test pour l'API WordPress
export default function () {
  let res = http.get('https://test.cynomedia.com/wp-json/articles/homepage', {
    noConnectionReuse: false,  // Désactive la réutilisation des connexions
  });

  check(res, {
    'status est 200': (r) => r.status === 200,
    'réponse en moins de 500ms': (r) => r.timings.duration < 500,
  });

  sleep(1);
}
