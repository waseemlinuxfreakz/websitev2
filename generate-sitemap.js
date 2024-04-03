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
const hostname = 'https://emmet.finance';

// Create a stream to write your sitemap to
const sitemapStream = new SitemapStream({ hostname });

// Pipe the sitemap stream to a writeable stream
const writeStream = createWriteStream('public/sitemap.xml');
sitemapStream.pipe(writeStream);

// When all links are added and the stream is ended, 
// the 'finish' event is emitted
writeStream.on('finish', () => console.log('Sitemap.xml has been written successfully'));
writeStream.on('error', (e) => console.error('Error writing sitemap.xml:', e));

// Adding routes to the sitemap
links.forEach(link => sitemapStream.write(link));
// You must end the stream to finalize the sitemap
sitemapStream.end();

