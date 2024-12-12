const request = require('supertest');
const app = require('../index'); // Import your app
let server;

beforeAll(() => {
  server = app.listen(3000); // Start the server before tests
});

afterAll(() => {
  server.close(); // Close the server after tests
});

describe('GET /', () => {
  it('should respond with "Hello, World!"', async () => {
    const res = await request(app).get('/');
    expect(res.text).toBe('Hello, World!');
    expect(res.statusCode).toBe(200);
  });
});
