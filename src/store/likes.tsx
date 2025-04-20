import { makeAutoObservable } from 'mobx'

type Anime = {
  id: string;
  title: { romaji: string };
  image: string;
};

class LikesStore {
	likes: Anime[] = [];

	constructor(){
		makeAutoObservable(this);
	}

	setData(anime: Anime) {
		this.likes.push(anime)
	}

}

export const likes = new LikesStore();