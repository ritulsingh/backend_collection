import express, { Express, Request, Response } from 'express';
import morgan from 'morgan';
import connectDB from './db';
import config from './config';
import urlShortRouter from './routes/urlShort.routes';

const app: Express = express();

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./utils/swagger.json')

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


app.use(express.json());
app.use(morgan('dev'));

app.use(urlShortRouter)

app.get('/', (_req: Request, res: Response) => {
  return res.send('Received a GET HTTP method');
});

connectDB().then(() => {
  app.listen(config.port, () => {
    console.log("Server is running on port: " + config.port);
  });
}).catch((error: any) => {
  console.error("Error starting the server:", error);
  process.exit(1);
});;