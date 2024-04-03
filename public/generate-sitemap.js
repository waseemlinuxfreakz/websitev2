const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');
const paths = ['/','/Bridge','/Explorer','/PrivacyPolicy','/TermsService']; 

const sitemap = new SitemapStream({ hostname: 'https://emmet.finance' });

streamToPromise(sitemap)
  .then(data => process.stdout.write(data.toString()))
  .catch(err => console.error(err));

paths.forEach(path => sitemap.write(path));
sitemap.end();

const writeStream = createWriteStream('public/sitemap.xml');
sitemap.pipe(writeStream);
