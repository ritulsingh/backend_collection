import express, { Request, Response } from 'express';
import morgan from 'morgan';
import connectDB from './db';
import config from './config';

const app = express();
app.use(morgan('dev'));

app.get('/', (_req: Request, res: Response) => {
  return res.send('Received a GET HTTP method');
});

connectDB().then(() => {
  app.listen(config.port, () => {
    console.log("Server is running on port: " + config.port);
  });
}).catch((error) => {
  console.error("Error starting the server:", error);
  process.exit(1);
});;