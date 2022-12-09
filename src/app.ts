import express, { Express, Request, Response } from 'express';
import actuator from 'express-actuator';

const app: Express = express();
app.use(actuator());

app.get('/', (_: Request, res: Response) => {
  res.send('Hello World!!');
});

export default app;
