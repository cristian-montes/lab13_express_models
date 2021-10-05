const Type = require('../models/TypesMo');

class TypeService {

  //POSTS A NEW TYPE IN THE DATA BASE
  static async postType(obj){
    const newType = await Type.insertType(obj);
    return newType;
  }

  //GET ALL TYPES FROM DATA BASE
  static async getAllTypes(){
    const allTypes = await Type.getAllStoredTypes();
    return allTypes;
  }





}

module.exports = TypeService;
