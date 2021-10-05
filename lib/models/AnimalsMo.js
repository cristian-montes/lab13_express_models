const pool = require('../utils/pool');

module.exports = class Animal { 

  constructor(row){
    this.id = row.id;
    this.name = row.name;
    this.species_id = row.species_id;
  }

  //INSERT NEW TYPE
  static async insertAnimal({ name, species_id }){
    const { rows } = await pool.query(
      'INSERT INTO animals (name, species_id) VALUES ($1, $2) RETURNING *', [name, species_id]
    );
    return new Animal(rows[0]);
  }





};
