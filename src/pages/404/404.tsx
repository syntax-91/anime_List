import { Link } from 'react-router-dom'
import s from './_404_styles.module.css'

export function _404(){

	return (
		<div className={`${s.mc} pulse`}>

			<div className={s.blur_bg}>

			</div>
 
		<div className={s.content}>
		<h1>404 not Fount..</h1>
			<br />
			<p className='text-center'>go to 
				<Link to='/'>Home</Link>
			</p>
		
		</div>

		</div>
	)
}