const request = require('supertest');
const app = require('../index'); // Import your app
let server;

beforeAll(() => {
  server = app.listen(0, () => {
    const port = server.address().port;
    console.log(`Test server is running on port ${port}`);
  });
});

afterAll(() => {
  server.close(); // Close the server after tests
});

describe('GET /', () => {
  it('should respond with the home page containing "Welcome to the Express Web Demo"', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.text).toContain('Welcome to the Express Web Demo');
    expect(res.text).toContain('<nav>');
  });
});

describe('GET /about', () => {
  it('should respond with the about page containing "About Us"', async () => {
    const res = await request(app).get('/about');
    expect(res.statusCode).toBe(200);
    expect(res.text).toContain('About Us');
    expect(res.text).toContain('<nav>');
  });
});

describe('GET /contact', () => {
  it('should respond with the contact page containing "Contact Us"', async () => {
    const res = await request(app).get('/contact');
    expect(res.statusCode).toBe(200);
    expect(res.text).toContain('Contact Us');
    expect(res.text).toContain('<form');
  });
});

describe('GET /nonexistent', () => {
  it('should respond with a 404 page containing "404 - Page Not Found"', async () => {
    const res = await request(app).get('/nonexistent');
    expect(res.statusCode).toBe(404);
    expect(res.text).toContain('404 - Page Not Found');
  });
});
