export type APIResource =
  | 'films'
  | 'planets'
  | 'species'
  | 'people'
  | 'starships'
  | 'vehicles';

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
