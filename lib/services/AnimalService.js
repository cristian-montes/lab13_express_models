const Animal = require('../models/AnimalsMo');

class AnimalService{

  //POST A NEW ANIMAL IN THE DATA BASE
  static async postAnimal(obj){
    const newAnimal = await Animal.insertAnimal(obj);
    return newAnimal;
  }

  //GET AN ANIMAL BY ID
  static async getAnimal(id){
    const animal = await Animal.getAnimalById(id);
    return animal;
  }

  //GET AN ANIMALS NAMES AND TYPES
  static async getNamesTypes(){
    const animal = await Animal.getAllOfThem();
    return animal;
  }

}

module.exports = AnimalService;
