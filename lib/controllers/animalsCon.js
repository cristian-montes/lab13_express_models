const { Router } = require('express');
const Animal = require('../models/AnimalsMo');
const AnimalService = require('../services/AnimalService');

module.exports = Router()
  .post('/', async (req, res, next) => {
    try {
      const newAnimal = await AnimalService.postAnimal(req.body);
      res.send(newAnimal);
    } catch (error) {
      next(error);
    }
  })
  .get('/:id', async (req, res, next) => {
    try {
      const animal = await AnimalService.getAnimal(req.params.id);
      
      res.send(animal);
    } catch (error) {
      next(error);
    }
  })
  .get('/', async (req, res, next) => {
    try {
      const animal = await AnimalService.getNamesTypes();
      console.log(animal);
      res.send(animal);
    } catch (error) {
      next(error);
    }
  });
