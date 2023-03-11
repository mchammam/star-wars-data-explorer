/* eslint-disable camelcase */
import { z } from 'zod';

export type APIResource =
  | 'films'
  | 'planets'
  | 'species'
  | 'people'
  | 'starships'
  | 'vehicles';

export const filmSchema = z.object({
  title: z.string(),
  episode_id: z.number(),
  opening_crawl: z.string(),
  director: z.string(),
  producer: z.string(),
  release_date: z.string(),
  species: z.string().array(),
  starships: z.string().array(),
  vehicles: z.string().array(),
  characters: z.string().array(),
  planets: z.string().array(),
  url: z.string(),
  created: z.string(),
  edited: z.string()
});

export const personSchema = z.object({
  name: z.string(),
  birth_year: z.string(),
  eye_color: z.string(),
  gender: z.string(),
  hair_color: z.string(),
  height: z.string().transform((val) => parseInt(val)),
  mass: z.string().transform((val) => parseInt(val)),
  skin_color: z.string(),
  homeworld: z.string(),
  films: z.string().array(),
  species: z.string().array(),
  starships: z.string().array(),
  vehicles: z.string().array(),
  url: z.string(),
  created: z.string(),
  edited: z.string()
});

export const vehicleSchema = z.object({
  name: z.string(),
  model: z.string(),
  vehicle_class: z.string(),
  manufacturer: z.string(),
  length: z.string().transform((val) => parseInt(val)),
  cost_in_credits: z.string().transform((val) => parseInt(val)),
  crew: z.string().transform((val) => parseInt(val)),
  passengers: z.string().transform((val) => parseInt(val)),
  max_atmosphering_speed: z.string().transform((val) => parseInt(val)),
  cargo_capacity: z.string().transform((val) => parseInt(val)),
  consumables: z.string(),
  films: z.string().array(),
  pilots: z.string().array(),
  url: z.string(),
  created: z.string(),
  edited: z.string()
});

export const specieSchema = z.object({
  name: z.string(),
  classification: z.string(),
  designation: z.string(),
  average_height: z.string().transform((val) => parseInt(val)),
  average_lifespan: z.string().transform((val) => parseInt(val)),
  eye_colors: z.string(),
  hair_colors: z.string(),
  skin_colors: z.string(),
  language: z.string(),
  homeworld: z.string().nullable(),
  people: z.string().array(),
  films: z.string().array(),
  url: z.string(),
  created: z.string(),
  edited: z.string()
});

export const planetSchema = z.object({
  name: z.string(),
  diameter: z.string().transform((val) => parseInt(val)),
  rotation_period: z.string().transform((val) => parseInt(val)),
  orbital_period: z.string().transform((val) => parseInt(val)),
  gravity: z.string().transform((val) => parseInt(val)),
  population: z.string().transform((val) => parseInt(val)),
  climate: z.string(),
  terrain: z.string(),
  surface_water: z.string().transform((val) => parseInt(val)),
  residents: z.string().array(),
  films: z.string().array(),
  url: z.string(),
  created: z.string(),
  edited: z.string()
});

export const starshipSchema = z.object({
  name: z.string(),
  model: z.string(),
  starship_class: z.string(),
  manufacturer: z.string(),
  cost_in_credits: z.string().transform((val) => parseInt(val)),
  length: z.string().transform((val) => parseInt(val)),
  crew: z.string().transform((val) => parseInt(val)),
  passengers: z.string().transform((val) => parseInt(val)),
  max_atmosphering_speed: z.string().transform((val) => parseInt(val)),
  hyperdrive_rating: z.string(),
  MGLT: z.string(),
  cargo_capacity: z.string().transform((val) => parseInt(val)),
  consumables: z.string(),
  films: z.string().array(),
  pilots: z.string().array(),
  url: z.string(),
  created: z.string(),
  edited: z.string()
});

export const itemDataSchema = z.union([
  filmSchema,
  personSchema,
  vehicleSchema,
  specieSchema,
  planetSchema,
  starshipSchema
]);

export type ItemData = z.infer<typeof itemDataSchema>;

export type Film = z.infer<typeof filmSchema>;

export type Person = z.infer<typeof personSchema>;

export type Vehicle = z.infer<typeof vehicleSchema>;

export type Specie = z.infer<typeof specieSchema>;

export type Planet = z.infer<typeof planetSchema>;

export type Starship = z.infer<typeof starshipSchema>;
