import { makeAutoObservable } from 'mobx'

class SearchRes {
	searchRes: string = ''

	constructor(){
		makeAutoObservable(this);
	}

	setSearchRes(data: string){
		this.searchRes = data
		console.log(data)
	}
}

export const searchRes = new SearchRes();