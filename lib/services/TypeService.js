const Type = require('../models/TypesMo');

class TypeService {

  //POSTS A NEW TYPE IN THE DATA BASE
  static async postType(obj){
    const newType = await Type.insertType(obj);
    return newType;
  }


}

module.exports = TypeService;
