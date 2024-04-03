const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');
const links = [
  { url: '/',  changefreq: 'daily', priority: 0.7 },
  { url: '/bridge', changefreq: 'weekly', priority: 0.5 },
  { url: '/explorer', changefreq: 'weekly', priority: 0.5 },
  { url: '/privacy-policy', changefreq: 'monthly', priority: 0.3 },
  { url: '/terms-of-service', changefreq: 'monthly', priority: 0.3 },
  // Add other pages as needed
];

// Replace 'https://example.com' with your actual site domain
const sitemap = new SitemapStream({ hostname: 'https://emmet.finance' });

// Generating the sitemap and handling errors
streamToPromise(sitemap)
  .then(content => console.log('Sitemap generated successfully'))
  .catch(err => console.error('Sitemap generation failed:', err));

// Adding routes to the sitemap
links.forEach(link => sitemap.write(link));
sitemap.end();

// Writing the sitemap to a file in the 'public' directory
const writeStream = createWriteStream('public/sitemap.xml');
sitemap.pipe(writeStream).on('finish', () => console.log('Sitemap.xml has been written successfully'));
