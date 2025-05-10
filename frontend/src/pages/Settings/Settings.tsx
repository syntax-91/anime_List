import { Outlet, useNavigate } from 'react-router-dom'
import { authUser } from '../../shared/store/authStore'
import s from './styles.module.css'

export  default function Settings() {

	const nav = useNavigate();

	return(
	<div className={s.mc}>
		<div className={s.blur_bg}></div>

			<div className={s.content}>

		<h2
		 className='p-10 cursor-pointer inline-block'
		 onClick={()=> nav(-1)}>Назад</h2>

		<div className='flex  w-[90%] gap-5 mx-auto
		overflow-x-auto max-w-full h-20'>

			<div 
			className='border border-[#fff]/30 
			px-5 py-2 rounded-full h-12 flex justify-center items-center cursor-pointer hover:bg-white/10'
			>Основные</div>
			
			<div 
			onClick={() => nav('custom') }
			className='border border-[#fff]/30 
			px-5 py-2 rounded-full h-12 flex justify-center items-center cursor-pointer hover:bg-white/10'
			>Кастомизация</div>

			{authUser.isAuth && 
			<div 
			onClick={() => nav('profile') }
			className='border border-[#fff]/30 
			px-5 py-2 rounded-full h-12 flex justify-center items-center cursor-pointer hover:bg-white/10'
			>Профиль</div>}

			<div 
			className='border border-[#fff]/30 
			px-5 py-2 rounded-full h-12 flex justify-center items-center cursor-pointer hover:bg-white/10'
			>Основные</div>
			

		</div>

		<div className=' mx-auto w-[95%] h-[100vh]'>
				<Outlet />
		</div>

			</div>
	</div>
	)
}