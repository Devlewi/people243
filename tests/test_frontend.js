import http from 'k6/http';
import { check, sleep } from 'k6';

//k6 run test_frontend.js

export let options = {
  vus: 10, // 20 utilisateurs simultanés
  duration: '1m', // Test pendant 1 minute
};

export default function () {
  let res = http.get('https://sgimali-dev.vercel.app/');

  check(res, {
    'status est 200': (r) => r.status === 200,
    'réponse en moins de 1s': (r) => r.timings.duration < 1000,
  });

  sleep(1);
}
