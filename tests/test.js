import http from 'k6/http';
import { sleep, check } from 'k6';

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
    const urls = [
        'https://controlpanel.people237.com/wp-json/articles/homepage',        
    ];

    for (const url of urls) {
        let res = http.get(url);
        check(res, { 'status is 200': (r) => r.status === 200 });
    }
    sleep(1);
}

