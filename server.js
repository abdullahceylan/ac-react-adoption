const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 3000;
const app = next({ dev });
const handle = app.getRequestHandler();

const logger = console.log;

if (dev) {
  logger('Starting the development server...\n');
} else {
  logger('Starting the production server...\n');
}

app
  .prepare()
  .then(() => {
    const server = express();

    server.get('*', (req, res) => {
      return handle(req, res);
    });

    server.listen(port, err => {
      if (err) {
        throw err.message;
      }
      logger(`> Ready on http://localhost:${port}`);
    });
  })
  .catch(ex => {
    logger(ex.stack);
    process.exit(1);
  });
