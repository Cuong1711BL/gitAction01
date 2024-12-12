const request = require('supertest');
const app = require('../index');

describe('GET /', () => {
  it('should respond with "Hello, World!"', async () => {
    const res = await request(app).get('/');
    expect(res.text).toBe('Hello, World!');
    expect(res.statusCode).toBe(200);
  });
});
