import { useNavigate } from 'react-router-dom'
import tg_icon from './../../assets/tg.jpg'

export default function About_us() {

	const nav = useNavigate();

	return(
		<div className='w-[100vw] h-[100vh]
		relative top-0 about_us '>
			
			<div className='blur_bg'></div>


			<div
		 className='container about_content  w-[100vw]
		  h-[100vh] mx-auto z-100 m-10 '>


		<div className='m-5'>
				<h3
				onClick={() => nav(-1) }
				className='cursor-pointer'
				>Назад</h3>
		</div>

				{/* О сайте */}
				<div className='mt-5 text-center'>
					<h2 className='text-3xl mt-20'>О сайте</h2>

					<p
					className='mt-5 font-normal text-2xl lg:text-3xl'
					>Этот сайт был создан в рамках личного проекта для изучения веб-разработки. Я стремлюсь улучшить свои навыки в области front-end 😊, экспериментируя с дизайном и функционалом.
				</p>
				</div>

				{/* Цели проекта */}
				<div className='mt-5 text-center'>
					<h2 className='text-3xl mt-20'>Цели проекта</h2>

					<p
					className='mt-5 font-normal text-2xl lg:text-3xl'
					>
					Основные цели разработки этого сайта:
					<br />
					• Изучение React+tsx, mobx и отзывчивых 
					 интерфейсов, работа с API и т.д.📚.
					 <br />
					• Практика применения базовых принципов веб-дизайна 🎨.
					<br />
					• Освоение работы с react, ts, mobx, axios ⚙️.
				</p>
				</div>

			{/* Контакты */}
				<div 
				className='mt-5 '>
					<h2 className='text-center text-3xl mt-20'>Контакты</h2>

						<div
						onClick={() => window.location.href = 
						"https://t.me/syntax_real"}
						className='flex w-60 md:w-65 mt-5
						cursor-pointer hover:bg-[#fff]/20
						justify-between items-center mx-auto
						border border-[#fff]/30
						px-5 py-3 rounded-3xl '>
					<img src={tg_icon} alt="ERROR"
					className='w-15 rounded-full' />	

					<p className=' font-normal text-2xl lg:text-3xl'>	
							Telegram
					</p>
						</div>
				</div>

			</div>
	</div>
	)
}