import { useEffect, useState } from 'react'
import { useDebounce } from '../../../lib/useDebounce'
import { searchRes } from '../../../shared/store/searchRes/searchRes'
import { Input } from '../../atoms/input/Input'

export function SearchHeader() {
	const [inpData, setInpData] = useState('')
	const debouncedInpData = useDebounce(inpData, 300)

	useEffect(() => {
		searchRes.setSearchRes(inpData)
	}, [debouncedInpData])

	return (
		<Input
			onChange={e => setInpData(e.target.value)}
			type='text'
			placeholder='Enter search..'
			location='left'
			style='default'
			className='Hi'
		/>
	)
}
