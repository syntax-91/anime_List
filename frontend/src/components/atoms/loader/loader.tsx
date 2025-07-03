import s from './loadStyles.module.css'

export function Loader() {
	return (
		<div className={s.loadC}>
			<div className={s.load}></div>
		</div>
	)
}
