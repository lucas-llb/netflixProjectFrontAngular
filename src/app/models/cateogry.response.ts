import { SerieType } from "../services/serie.service";

export interface CategoryResponse {
    id: number;
    name: string;
    position: number;
    series?: SerieType[];
  }