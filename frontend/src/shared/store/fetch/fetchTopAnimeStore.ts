import axios from 'axios'
import { makeAutoObservable } from 'mobx'
import { Anime } from '../../types/types'

class FetchTopAnimeStore {
	animeList: Anime[] = []
	loading = false
	error: '' | null = null

	constructor() {
		makeAutoObservable(this)
	}

	async fetchData() {
		;(this.loading = true), (this.error = null)

		try {
			const { data } = await axios.get('https://api.jikan.moe/v4/top/anime')

			this.animeList = data.data
			this.loading = false
		} catch (err: any) {
			this.error = err
			this.loading = false
		}
	}
}

export const FD_TopAnimeStore = new FetchTopAnimeStore()
