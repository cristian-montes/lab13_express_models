const pool = require('../utils/pool');

module.exports = class Animal { 

  constructor(row){
    this.id = row.id;
    this.name = row.name;
    this.species_id = row.species_id;
  }

  //INSERT NEW ANIMAL
  static async insertAnimal({ name, species_id }){
    const { rows } = await pool.query(
      'INSERT INTO animals (name, species_id) VALUES ($1, $2) RETURNING *', [name, species_id]
    );
    return new Animal(rows[0]);
  }

  //GET ANIMAL BY ID
  static async getAnimalById(id){
    const { rows } = await pool.query(
      'SELECT * FROM animals WHERE id=$1', [id]
    );
    return rows[0];
  }

  //GET ALL ANIMAL NAMES AND THEIR SPECIES
  static async getAllOfThem(){
    const { rows } = await pool.query(
      `SELECT name, type
      FROM animals
      LEFT JOIN species
      ON animals.species_id  = species.id`
    );
    return rows;
  }

  //UPDATE ANIMAL BY ID
  static async updateAnimal(id, objBody){
    const { rows } = await pool.query(
      'UPDATE animals SET name=$2, species_id=$3 WHERE id=$1 RETURNING *', [id, objBody.name, objBody.species_id]);

    return rows[0];
  }
  

  //DELETE ANIMAL BY ID
  static async deleteAnimal(id){
    const { rows } = await pool.query(
      'DELETE FROM animals WHERE id=$1', [id]
    );
  }

  //GET ANIMALS COUNT BY TYPE
  static async countAnimals(){
    const { rows } = await pool.query(
      `SELECT COUNT(*), species.type
          FROM animals
          LEFT JOIN species
          ON animals.species_id = species.id
          GROUP BY species.id
          ORDER BY species.type, COUNT`
    );

    return rows.map(row => new Animal(row));
  }







};
