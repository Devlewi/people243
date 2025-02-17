import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
  stages: [
    { duration: '30s', target: 50 },  // Monter progressivement jusqu'à 50 utilisateurs
    { duration: '1m', target: 100 },  // Monter jusqu'à 100 utilisateurs
    { duration: '30s', target: 0 },   // Redescendre progressivement
  ],
};
//https://controlpanel.people237.com/wp-json/articles/homepage
export default function () {
  let res = http.get('https://test.cynomedia.com/wp-json/articles/homepage');

  check(res, {
    'Statut 200': (r) => r.status === 200,
    'Temps de réponse < 500ms': (r) => r.timings.duration < 500,
  });

  sleep(1); // Pause d'1 seconde avant la prochaine requête

}