import { observer } from 'mobx-react-lite'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { Button } from '../../components/atoms/button/button'
import FetchData from '../../res/FetchData'
import { userNameSchema } from '../../shared/schema'
import { modalText } from '../../shared/store/modalText'
import { UserData } from '../../shared/types/types'

 function Login(){

	const nav = useNavigate();

		const {
			register, 
			handleSubmit,
			formState: {errors, isValid} } 
			= useForm<UserData>({'mode': 'onChange'})

		const submit = (data: UserData) => {
			FetchData('login', data);
		}

		const [isLoad, setIsLoad] = useState(false);

		useEffect(() => {
				const t = setTimeout(() => modalText.isOpen=false, 2000)
				setIsLoad(false)

				return()=> clearTimeout(t)
		}, [modalText.isOpen])

		const handleClick = () => {
			if(isValid){
				setIsLoad(true)
			}
		}
  
	return ( 
		<div className='w-[100%] h-[100vh] '>
				
				<div 
				className='m w-[100%] h-30'>
					
					<div 
					onClick={() => nav("/") }
					className='block sm:hidden m-10'>
						<h3>назад</h3>
					</div>

					{modalText.isOpen &&
					<div
					 className={`w-[290px]
					 h-23 mx-10 my-5 border
					${modalText.success ? 'success' : 'success_false'}
					 flex justify-center items-center`}>
						<p>{modalText.text}</p>
					</div>}

				</div>


				<div 
				className='c w-[100%] h-[80vh] 
				flex justify-center items-center'>

			<form onSubmit={handleSubmit(submit)}
			className='w-[80%] 
			h-[400px] sm:w-[450px] border-0
			rounded-2xl sm:border sm:border-[#444]'>

				<h2 
				className='text-[30px]
				text-center sm:mt-18	'>
				Login</h2>

				{/* Username */}			
			<div className='text-center w-[100%]'>
				<input type="text"
				placeholder='Enter username'
				className='w-[100%] h-[50px]
				sm:w-[80%]
				px-10 rounded-3xl outline-0 mt-8
				 mx-auto border border-[#444]'  
				 {...register('username', userNameSchema) }/>
			</div>
			{errors.username?.message && 
			<p className='text-center mt-2
			text-red-700'>{String(errors.username.message)}</p>}

				{/* PSW */}
			<div className='text-center w-[100%]'>
				<input type="text"
				placeholder='Enter password'
				className='w-[100%] h-[50px]
				sm:w-[80%]
				px-10 rounded-3xl outline-0 mt-5
				 mx-auto border border-[#444]'  
				 {...register('password', userNameSchema) }/>
			</div>
			{errors.password?.message && 
			<p className='text-center mt-2
			text-red-700'>{String(errors.password.message)}</p>}

			
			<Button type='submit' style='blueviolet'
			position='center' onClick={handleClick}
			className='w-[40%] h-[40px] mt-10
			rounded-2xl cursor-pointer bg-[#272628]
			hover:bg-[#8a2be2]/40'
			size='text-[18px]'
			label={isLoad && isValid ? 'Loading...' : 'Submit'}/>

			</form>

				</div>

				
		</div>
	)
}

export default observer(Login)