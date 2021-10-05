const { Router } = require('express');
const AnimalService = require('../services/AnimalService');

module.exports = Router()
  .post('/', async (req, res, next) => {
    try {
      console.log('constructor', req.body);
      const newAnimal = await AnimalService.postAnimal(req.body);
      console.log('constructor222', newAnimal);
      res.send(newAnimal);
    } catch (error) {
      next(error);
    }
  });
