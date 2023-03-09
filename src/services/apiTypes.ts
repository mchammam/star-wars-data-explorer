/* eslint-disable camelcase */
import { z } from 'zod';

export type APIResource =
  | 'films'
  | 'planets'
  | 'species'
  | 'people'
  | 'starships'
  | 'vehicles';

export const resourceNotFoundSchema = z.object({
  detail: z.literal('Not found')
});

export const filmSchema = z.object({
  title: z.string(),
  episode_id: z.number(),
  opening_crawl: z.string(),
  director: z.string(),
  producer: z.string(),
  release_date: z.date(),
  species: z.string().array(),
  starships: z.string().array(),
  vehicles: z.string().array(),
  characters: z.string().array(),
  planets: z.string().array(),
  url: z.string(),
  created: z.date(),
  edited: z.date()
});

export const peopleSchema = z.object({
  name: z.string(),
  birth_year: z.string(),
  eye_color: z.string(),
  gender: z.string(),
  hair_color: z.string(),
  height: z.number(),
  mass: z.number(),
  skin_color: z.string(),
  homeworld: z.string(),
  films: z.string().array(),
  species: z.string().array(),
  starships: z.string().array(),
  vehicles: z.string().array(),
  url: z.string(),
  created: z.date(),
  edited: z.date()
});

export const vehicleSchema = z.object({
  name: z.string(),
  model: z.string(),
  vehicle_class: z.string(),
  manufacturer: z.string(),
  length: z.number(),
  cost_in_credits: z.number(),
  crew: z.number(),
  passengers: z.number(),
  max_atmosphering_speed: z.number(),
  cargo_capacity: z.number(),
  consumables: z.string(),
  films: z.string().array(),
  pilots: z.string().array(),
  url: z.string(),
  created: z.date(),
  edited: z.date()
});

export const specieSchema = z.object({
  name: z.string(),
  classification: z.string(),
  designation: z.string(),
  average_height: z.number(),
  average_lifespan: z.number(),
  eye_colors: z.string(),
  hair_colors: z.string(),
  skin_colors: z.string(),
  language: z.string(),
  homeworld: z.string(),
  people: z.string().array(),
  films: z.string().array(),
  url: z.string(),
  created: z.date(),
  edited: z.date()
});

export const planetSchema = z.object({
  name: z.string(),
  diameter: z.number(),
  rotation_period: z.number(),
  orbital_period: z.number(),
  gravity: z.number(),
  population: z.number(),
  climate: z.string(),
  terrain: z.string(),
  surface_water: z.number(),
  residents: z.string().array(),
  films: z.string().array(),
  url: z.string(),
  created: z.date(),
  edited: z.date()
});

export const starshipSchema = z.object({
  name: z.string(),
  model: z.string(),
  starship_class: z.string(),
  manufacturer: z.string(),
  cost_in_credits: z.number(),
  length: z.number(),
  crew: z.number(),
  passengers: z.number(),
  max_atmosphering_speed: z.number(),
  hyperdrive_rating: z.string(),
  MGLT: z.string(),
  cargo_capacity: z.number(),
  consumables: z.string(),
  films: z.string().array(),
  pilots: z.string().array(),
  url: z.string(),
  created: z.date(),
  edited: z.date()
});

export const itemDataSchema = z.union([
  resourceNotFoundSchema,
  filmSchema,
  peopleSchema,
  vehicleSchema,
  specieSchema,
  planetSchema,
  starshipSchema
]);

export type ItemData = z.infer<typeof itemDataSchema>;

export type Film = {
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: Date;
  species: string[];
  starships: string[];
  vehicles: string[];
  characters: string[];
  planets: string[];
  url: string;
  created: Date;
  edited: Date;
};

export type People = {
  name: string;
  birth_year: string;
  eye_color: string;
  gender: string;
  hair_color: string;
  height: number;
  mass: number;
  skin_color: string;
  homeworld: string;
  films: string[];
  species: string[];
  starships: string[];
  vehicles: string[];
  url: string;
  created: Date;
  edited: Date;
};

export type Vehicle = {
  name: string;
  model: string;
  vehicle_class: string;
  manufacturer: string;
  length: number;
  cost_in_credits: number;
  crew: number;
  passengers: number;
  max_atmosphering_speed: number;
  cargo_capacity: number;
  consumables: string;
  films: string[];
  pilots: string[];
  url: string;
  created: Date;
  edited: Date;
};

export type Specie = {
  name: string;
  classification: string;
  designation: string;
  average_height: number;
  average_lifespan: number;
  eye_colors: string;
  hair_colors: string;
  skin_colors: string;
  language: string;
  homeworld: string;
  people: string[];
  films: string[];
  url: string;
  created: Date;
  edited: Date;
};

export type Planet = {
  name: string;
  diameter: number;
  rotation_period: number;
  orbital_period: number;
  gravity: number;
  population: number;
  climate: string;
  terrain: string;
  surface_water: number;
  residents: string[];
  films: string[];
  url: string;
  created: Date;
  edited: Date;
};

export type Starship = {
  name: string;
  model: string;
  starship_class: string;
  manufacturer: string;
  cost_in_credits: number;
  length: number;
  crew: number;
  passengers: number;
  max_atmosphering_speed: number;
  hyperdrive_rating: string;
  MGLT: string;
  cargo_capacity: number;
  consumables: string;
  films: string[];
  pilots: string[];
  url: string;
  created: Date;
  edited: Date;
};
