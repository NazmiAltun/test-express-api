import express, { Express, Request, Response } from 'express';
import actuator from 'express-actuator';
import dotenv from 'dotenv';
import logger from './utils/logger';

dotenv.config();

const app: Express = express();
app.use(actuator());
const port = process.env.PORT;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  logger.log('info', '[server]: Server is running at http://localhost:%d', port);
});
