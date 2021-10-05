const Animal = require('../models/AnimalsMo');

class AnimalService{

  //POST A NEW ANIMAL IN THE DATA BASE
  static async postAnimal(obj){
    const newAnimal = await Animal.insertAnimal(obj);
    console.log('service', newAnimal);

    return newAnimal;
  }


}

module.exports = AnimalService;
