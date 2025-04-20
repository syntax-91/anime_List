const { default: axios } = require('axios')
const { makeAutoObservable, runInAction } = require('mobx')

class AnimeList {
	AnimeList = [];
	loaded = false;
	error = null

	constructor(this){
		makeAutoObservable(this)
	}

	async fetchTopAnime(){
		if(this.loaded) return;

		try {
			const res = axios.get('https://api.jikan.moe/v4/top/anime');

			runInAction(() => {
				this.AnimeList = res.data.data;
				this.loaded = true
			});
		} catch(err){
			console.error('ERROR: ', err)
		}
	}
}

export const animeStore = new AnimeList(); 