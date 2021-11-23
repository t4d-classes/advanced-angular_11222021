import { Express } from 'express';
import { existsSync, mkdirSync, writeFile } from 'fs';
import fetch from 'node-fetch';
import { join } from 'path';

const app: Express = require('./main').app();

const OUTPUT_FOLDER = join(process.cwd(), 'dist/prerender');
if (!existsSync(OUTPUT_FOLDER)) {
  mkdirSync(OUTPUT_FOLDER);
}

const port = process.env.PORT || 5000;
const expressBaseUrl = `http://localhost:${port}`;
const server = app.listen(port, async () => {
  console.log('Server launched');
  await prerenderPages();
  server.close(() => {
    console.log('Server closed');
  });
});

async function prerenderPages() {
  const articleCards = await fetch(
    'https://simply-how.herokuapp.com/article-cards'
  ).then((res) => res.json());
  const articleIds: string[] = articleCards.map((a: any) => a.slug);
  console.log(`Prerendering ${articleIds.length} pages ...`);
  await Promise.all(articleIds.map(prerenderPage));
}

async function prerenderPage(articleId: any) {
  const pageOutputPath = join(OUTPUT_FOLDER, articleId + '.html');
  const response = await fetch(`${expressBaseUrl}/${articleId}`);
  if (response.status === 200) {
    writeFile(pageOutputPath, await response.text(), (err) => {
      if (err) {
        throw err;
      }
    });
  } else {
    throw Error(`Received page not ok: /${articleId} - ${response.status}`);
  }
}