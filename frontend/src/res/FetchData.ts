import axios from 'axios'
import { authUser } from '../shared/store/authStore'
import { modalText } from '../shared/store/modalText'
import { UserData } from '../shared/types/types'


 const fetchDataUser = 
	async (type: string, data:UserData ) => {

		try {

			
		if(type == 'login'){
			const res = await axios.post('http://localhost:3000/auth/login', data)

			if(res.data.success){
				authUser.isAuth = true;
				localStorage.setItem('authUser', 'true');
				location.href = '/'
			}

			console.log('RESDATA: ', res.data)
			modalText.run(res.data.success, res.data.message)
		}   
	} catch(err){
		console.log('error: ', err)
		return
	}
}

export default fetchDataUser