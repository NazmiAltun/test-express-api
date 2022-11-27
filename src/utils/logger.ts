import { createLogger, transports, format } from 'winston';

const logger = createLogger({
  transports: [new transports.Console()],
  format: format.combine(
    format.colorize(),
    format.splat(),
    format.timestamp(),
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    format.printf(({ timestamp, level, message }) => `[${timestamp}] ${level}: ${message}`),
  ),
});

export default logger;
