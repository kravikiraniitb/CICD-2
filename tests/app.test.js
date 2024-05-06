const request = require('supertest');
const app = require('../app');

describe('GET /', () => {
    it('responds with Hello from Express!', (done) => {
        request(app)
            .get('/')
            .expect('Hello from Express!', done);
    });
});
