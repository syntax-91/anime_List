import { makeAutoObservable } from 'mobx'

class AuthStore {
	isAuth: boolean = Boolean(localStorage.getItem('authUser')||false);
	

	constructor(){
		makeAutoObservable(this);
	} 

}

export const authUser: AuthStore = new AuthStore();