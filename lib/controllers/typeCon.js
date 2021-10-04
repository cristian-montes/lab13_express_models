const { Router } = require('express');
const TypeService = require('../services/TypeService');


module.exports = Router()
  .post('/', async (req, res, next) => {
    try {
      const newType = await TypeService.postType(req.body);
      res.send(newType);
    } catch (error) {
      next(error);
    }
  });
