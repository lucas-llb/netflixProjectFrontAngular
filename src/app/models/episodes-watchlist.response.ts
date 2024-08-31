import { SerieType } from "../services/serie.service";
import { WatchTimeResponse } from "./watch-time.response";

export interface EpisodesWathListResponse{
    id: number,
    name: string,
    synopsis: string,
    order: number,
    videoUrl: string,
    thumbnailUrl: string,
    secondsLong: number,
    serieId: number,
    serie: SerieType,
    watchTime: WatchTimeResponse,
}