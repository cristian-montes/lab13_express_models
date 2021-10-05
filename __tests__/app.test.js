const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('demo routes', () => {
  beforeAll(() => {
    return setup(pool);
  });

  //POST A TYPE
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

  //GET ALL TYPES
  it('gets all of the types from SQL Table', async () => {
    return request(app)
      .get('/api/zoology/')
      .then(res => {
        expect(res.body).toEqual([{
          id: '1',
          type: 'fish'
        }]);
      });
  });


  //POST A NEW ANIMAL
  it('stores a new animal in SQL Table', async () => {
    return request(app)
      .post('/api/animales/')
      .send({ 
        name: 'nemo',
        species_id: '1'
      })
      .then(res => {
        expect(res.body).toEqual({
          id: '1',
          name: 'nemo',
          species_id: '1'
        });
      });
  });

  //GETS ANIMALS BY ID
  it('it gets animals by id', () => {
    return request(app)
      .get('/api/animales/1')
      .then(res => {
        expect(res.body).toEqual({
          id: '1',
          name: 'nemo',
          species_id: '1'
        });
      });
  });






  
  afterAll(() => {
    pool.end();
  });
});
