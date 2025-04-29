import { makeAutoObservable } from 'mobx'
import { Anime } from '../types/types'

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