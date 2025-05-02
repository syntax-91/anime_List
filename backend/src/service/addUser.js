import { hash } from 'bcryptjs'
import { config } from 'dotenv'
import { MongoClient } from 'mongodb'

config('./../.env');

export async function AddUser(data){
		const client = new MongoClient(process.env.URI)
		
	try {
		await client.connect();
		const db = client.db('mydb');
		const users = db.collection('users');

		const user = await users.findOne({username: data.username})

		if(user) {
			return {success: false, message: 'Уже существует!'}
		}
		const HashPsw = await hash(data.password, 10)

		users.insertOne({
			username: data.username,
			password: HashPsw
		})

		return {success: true, message: 'Успешно!'}


	} finally {
		console.log('БД ещё не закрылся..')
	}

}