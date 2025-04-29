import { useEffect, useState } from 'react'

export function useDebounce<T>(_value:T, time: number){
	const [value, setValue] = useState<T>();

	useEffect(() => {
			const t = setTimeout(() => setValue(_value), time );

			return()=> clearTimeout(t);
	}, [_value])

	return value
}