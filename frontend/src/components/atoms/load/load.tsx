import s from './loadStyles.module.css'

export function Load(){

	console.log('load')
	return(
		<div className={s.loadC}>
			<div className={s.load}></div>
		</div>
	)
} 