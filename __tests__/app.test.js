const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

//DEMO TYPES
async function saveTypes(){
  const demoTypes = [
    {
      type: 'fishy'
    },
    {
      type:'lizard'
    },
    {
      type:'unicorn'
    }
  ];

  await Promise.all(
    demoTypes.map(async (type) => {
      await request(app).post('/api/zoology/').send(type);
    })
  );
}

//DEMO ANIMALS
async function saveAnimals(){
  const demoAnimals = [
    {
      name: 'derick',
      species_id: '1'
    },
    {
      name: 'itzael',
      species_id: '2'
    },
    {
      name: 'jaxon',
      species_id: '3'
    },
    {
      name: 'Montezuma',
      species_id: '3'
    }
  ];

  await Promise.all(
    demoAnimals.map(async (animal) => {
      await request(app).post('/api/animales/').send(animal);
    })
  );
}





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


  //GET ALL ANIMALS AND THEIR TYPES
  it('gets all of the types from SQL Table', async () => {
    return request(app)
      .get('/api/animales/')
      .then(res => {
        expect(res.body).toEqual([{
          name:'nemo',
          type: 'fish'
        }]);
      });
  });

  //UPDATES AN ANIMAL BY ID
  it('updates an animal by id', async () => {
    return request(app)
      .put('/api/animales/1')
      .send({ name: 'oscar', species_id: '1' })
      .then((res) => {
        expect(res.body).toEqual({
          id:'1',
          name:'oscar',
          species_id: '1'
        });
      });
  });

  //DELETES AN ANIMAL BY ID
  it('deletes an animal by id', async () => {
    return request(app)
      .delete('/api/animales/1')
      .then(res => {
        expect(res.body).toEqual({});
      });
  });

  // COUNSTS ALL THE ANIMALS BY SPECIES
  // it('counsts animals by species', async () => {
  //   await saveTypes();
  //   await saveAnimals();


  // //   return request(app)
  // //     .get('/api/animales/allbyspecies')
  // //     .then(res => {
  // //       expect(res.body).toEqual([
  // //         {
  // //           type: 'lizard',
  // //           count: '1'
  // //         },
  // //         {
  // //           type: 'unicorn',
  // //           count: '2'
  // //         },
  // //         {
  // //           type: 'fishy',
  // //           count: '1'
  // //         } 
  // //       ]);
  // //     });
  // // });




  
  afterAll(() => {
    pool.end();
  });
});
