/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://www.people243.com',
    generateRobotsTxt: true, 
    sitemapSize: 5000,
    changefreq: 'daily',
    priority: 0.7,
    additionalSitemaps: [
      'https://www.people243.com/api/sitemap-articles',
    ],
    // AJOUTE CECI pour forcer l'apparition dans le robots.txt
    robotsTxtOptions: {
      additionalSitemaps: [
        'https://www.people243.com/api/sitemap-articles',
      ],
    },
};