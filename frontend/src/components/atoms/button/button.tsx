import s from './btnStyles.module.css'

interface BtnProps {
	type?: string
	label: string
	style?: string
	animation?: string
	position?: string
	size?: string
	onClick: () => void
	className: string
}

export function Button({ label = 'text', size = 'normal', ...rest }: BtnProps) {
	return (
		<div className={rest.position ? s[rest.position] : 'base_position_btn'}>
			<button
				onClick={rest.onClick}
				className={`${rest.className} ${
					rest.style ? s[rest.style] : 'base_btn'
				} 
			${rest.animation ? s[rest.animation] : 'base_btn'}
			${rest.position ? s[rest.position] : 'position_btn'}
			${size}`}
			>
				{label}
			</button>
		</div>
	)
}
