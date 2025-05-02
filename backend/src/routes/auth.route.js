import cors from 'cors'
import { Router } from 'express'
import { LoginUser } from '../service/LoginUser.js'
import { AddUser } from '../service/addUser.js'

export const authRoute = Router();
authRoute.use(cors())

//auth
authRoute.get('/', (req, res)	=> {
	res.status(200)
	.json({message: "auth"})
})

//auth/login
authRoute.use('/login', (req, res) => {
	const userData = req.body
	
	LoginUser(userData)
	.then(e => res.json({
		success: e.success, message: e.message
	}) ) 
})

//auth/register
authRoute.use('/register', (req, res) => {
	AddUser(req.body)
	//
	.then(e => res.json(
		{success: e.success, message: e.message}
	)
	 )
})