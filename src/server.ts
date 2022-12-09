import dotenv from 'dotenv';
import app from './app';
import logger from './utils/logger';

dotenv.config();
const port = process.env.PORT;

app.listen(port, () => {
  logger.log('info', '[server]: Server is running at http://localhost:%d', port);
});
