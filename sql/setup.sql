DROP TABLE IF EXISTS species CASCADE;
DROP TABLE IF EXISTS animals;

CREATE TABLE species (
    id BIGINT GENERATED ALWAYS AS IDENTITY UNIQUE,
    type TEXT NOT NULL
);

CREATE TABLE animals (
    id BIGINT GENERATED ALWAYS AS IDENTITY UNIQUE,
    name TEXT NOT NULL,
    species_id BIGINT NOT NULL
);