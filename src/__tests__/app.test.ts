import { StatusCodes } from 'http-status-codes';
import request from 'supertest';
import app from '../app';

describe('GET /', () => {
  it('should return OK', async () => {
    await request(app).get('/').expect(StatusCodes.OK);
  });
});
