const { default: axios } = require('axios')
const { makeAutoObservable, runInAction } = require('mobx')

class AnimeList {
	AnimeList = [{}];
	loaded = false;
	error = null

	constructor(this){
		makeAutoObservable(this)
	}

	setAnime(animeID, isLike){
		this.AnimeList.push({
			
		})
	}

	
}

export const animeStore = new AnimeList(); 