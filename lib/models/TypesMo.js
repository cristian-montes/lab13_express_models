const pool = require('../utils/pool');

module.exports = class Type {

  constructor(row){
    this.id = row.id;
    this.type = row.type;
  }

  //INSERT NEW TYPE
  static async insertType({ type }){

    const { rows } = await pool.query(
      'INSERT INTO species (type) VALUES ($1) RETURNING *', [type]
    );
    return new Type(rows[0]);

  }


  //GET ALL TYPES
  static async getAllStoredTypes(){
    const { rows } = await pool.query(
      'SELECT * FROM species'
    );
    return rows.map(row => new Type(row));
  }



};
