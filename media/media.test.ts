import supertest from 'supertest';
import { Response } from 'express';
import app from './index';

// types
// import Media from './media.types';

test('GET /shows', async () => {
  const res = await supertest(app).get('/shows');
  const { body, statusCode }: { body: Array<string>; statusCode: number } = res;
  console.log('body -->', body);
  expect(statusCode).toEqual(200);
  expect(Array.isArray(body)).toBeTruthy();
  expect(body.length).toEqual(0);
});
