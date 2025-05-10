import React from 'react'
import s from './style.module.css'

interface inputPrps {
	type: string,
	style: string,
	className: string
	required?: boolean,
	placholder: string,
	onClick?: ()=> void,
	onChange?: (e: React.ChangeEvent<HTMLInputElement>)
	=> void,
	value?: string,
	location: 'center'|'left'|'right'
}  
 
export function Input(
	{type = 'text', required = false, 
		location = 'center', ...rest}:inputPrps
){

	const handleChange = 
	(e: React.ChangeEvent<HTMLInputElement>) => {
		if(rest.onChange){
			rest.onChange(e)
		}
	}	


	return(
		<div style={{textAlign: location}}
		className='flex-1/2 flex justify-center  md:ml-0' >
		<input 
		className={`${!rest.className && rest.style
			? s[rest.style] : s.base
		}`} 
		type={type} 
		required={required}
		placeholder={rest.placholder}
		onClick={rest.onClick}
		value={rest.value}
		onChange={ handleChange }
		 />
		 </div>
	)
}