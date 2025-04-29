import axios from 'axios'
import { modalText } from '../store/modalText'
import { UserData } from '../types/types'


 const fetchDataUser = 
	async (type: string, data:UserData ) => {
			try {

			
		if(type == 'login'){
			const res = await axios.post('http://localhost:3000/auth/login', data)

			console.log('RESDATA: ', res.data)
			modalText.run(res.data.success, res.data.message)
		}   
	} catch(err){
		console.log('error: ', err)
		return
	}
}

export default fetchDataUser