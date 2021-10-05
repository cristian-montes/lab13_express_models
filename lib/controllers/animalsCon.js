const { Router } = require('express');
// const Animal = require('../models/AnimalsMo');
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
      res.send(animal);
    } catch (error) {
      next(error);
    }
  })
  .put('/:id', async (req, res, next) => {
    try {
      const updatedAni = await AnimalService.updateAnimal(req.params.id, req.body);
      res.send(updatedAni);
    } catch (error) {
      next(error);
    }
  })
  .delete('/:id', async (req, res, next) => {
    try {
      const deleteAni = await AnimalService.deleteStoredAnimal(req.params.id);
      res.send(deleteAni);
    } catch (error) {
      next(error);
    }
  })
  .get('/allcount', async (req, res, next) => {
    try {
      const animal = await AnimalService.countStoredAnimalsType();
      res.json(animal);
    } catch (error) {
      next(error);
    }
  });
