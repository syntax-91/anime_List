import { makeAutoObservable } from "mobx";
import { Anime } from "../../types/types";

class AnimeList {
  AnimeList = <Anime>[];
  loaded = false;
  error = null;

  constructor() {
    makeAutoObservable(this);
  }
}

export const animeListStore = new AnimeList();
