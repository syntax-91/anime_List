import s from './stylesWrapper.module.css'

export function Wrapper(){

	return(
		<div>
			<h2 className={s.h2}>Дабро пожаловать на наш аниме 	сайт!, выберите аниме и наслаждайтесь :) 
		  </h2>

			<p className='text-center mt-[20px] text-[#bbb9b9]'>Вам может понравится :)</p>


		</div>
	)
}