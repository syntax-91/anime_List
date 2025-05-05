import { Link } from 'react-router-dom'

export function Nav(){
	return(
		<div className='w-[400px] hidden lg:flex
		 justify-between text-white items-center mx-[40px]
		 '>
			<Link to='About'>о нас</Link>
			<Link to='Settings'>настройки</Link>
			<Link to='o'>доп...</Link>
		</div>
	) 
}