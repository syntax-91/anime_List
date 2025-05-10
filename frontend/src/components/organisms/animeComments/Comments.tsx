import { Button } from '../../atoms/button/button'
import { Input } from '../../atoms/input/Input'

export function Comments(){


	return(
		<div
		className='w-[100%] h-[300px] border
		border-[#444] rounded-2xl mx-auto
		active:scale-104 z-[100] mt-270 sm:mt-120 md:mt-90'>
			<h3
			className='text-center pt-10 text-2xl
			font-mono'>Комментарий</h3>

		<div className='mx-auto mt- flex items-center
		 w-[90%]'>
			<Input 
			placholder='Enter comment'
			className='bg-red-900' />
			
			<Button 
			onClick={()=> alert('HUI')}
			label='отправить' 
			
			className='bg-fuchsia-800
			py-4 px-8 rounded-2xl hover:scale-104
			cursor-pointer'
			
			size='text-[13px] z-100'
			/>
		</div>

		<div 
		className="hui w-[90%] h-40 
		mx-auto || flex justify-center items-center" >
				<h3 className='text-[20px] text-[#bebcbc]'>ну это, тут пока ниче нету</h3>
			</div>

		</div>
	)
}