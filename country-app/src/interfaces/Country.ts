export interface Country {
  name: {
    common: string;
  };
  capital: string[];
  region: string;
  area: number;
  population: number;
  landlocked: boolean;
  flags: {
    png: string;
    svg: string;
  };
  days?: number;
}
