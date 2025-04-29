import s from './styles.module.css'

//InputTypes
 interface InputProps {
	type?: 'text',
	handleChange?: 
	(e: React.ChangeEvent<HTMLInputElement>) => void;
	value?: string
	style: 'default'|'primary'| 'gradient'|'white',
	location?: 'center'|'left'|'right' 
}

export function Input
({type, value, style="white", location}:InputProps)
{

	return(
		<div style={{textAlign: location}}>
			<input type={type}
			className={`${s[style]}`} 
			value={value}
			/>
		</div>
	)
}