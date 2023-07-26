const { createReadStream } = require('fs');
const {
  simpleSitemapAndIndex,
  lineSeparatedURLsToSitemapOptions,
} = require('./dist/pastybollapp/index');

// writes sitemaps and index out to the destination you provide.
simpleSitemapAndIndex({
  hostname: 'https://example.com',
  destinationDir: './',
  sourceData: lineSeparatedURLsToSitemapOptions(
    createReadStream('./cli-urls.json.xml')
  ),
});