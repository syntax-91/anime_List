import React from 'react'
import s from './style.module.css'

interface inputPrps {
	type: string,
	style?: string,
	required?: boolean,
	placholder: string,
	onClick?: ()=> void,
	onChange: (e: React.ChangeEvent<HTMLInputElement>)
	=> void,
	value?: string
}  
 
export function Input(
	{type = 'text', required = false, ...rest}:inputPrps
){

	console.info('INPDATA: ', rest.value)
	return(
		<input className={rest.style ? s[rest.style] : s.base } type={type} required={required}
		placeholder={rest.placholder}
		onClick={rest.onClick}
		value={rest.value}
		onChange={e => rest.onChange(e) }
		 />
	)
}