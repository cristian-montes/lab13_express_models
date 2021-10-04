const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('demo routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  //POST AN EPISODE
  it('stores a new type in SQL Table', async () => {
    return request(app)
      .post('/api/zoology/')
      .send({ type: 'fish' })
      .then(res => {
        expect(res.body).toEqual({
          id: '1',
          type: 'fish'
        });
      });
  });



  afterAll(() => {
    pool.end();
  });
});
