import { authUser } from '../shared/store/authStore'

export function logOut(){
	localStorage.removeItem('authUser');
		authUser.isAuth = false;
		
}