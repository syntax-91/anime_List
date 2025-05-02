import { searchRes } from '../../../store/searchRes/searchRes'
import { Info } from '../../molecules/info/info'


export function InpRes(){


	return(
		<div 
		className=' animate-pulse w-[90%] h-80  border
		 border-[#fff]/20 md:w-[70%]
		rounded-4xl mx-auto font-stretch-extra-expanded
		text-white/70'>

			<div className='max-w-[300px] mx-auto'>
			<h3 
			className='text-2xl mt-9 text-center'>
				По запросу 
				<span 
				onClick={() => Info() }
				className='text-fuchsia-300 text-2xl font-mono
				px-3 cursor-pointer'>
			 "{searchRes.searchRes}"</span>
			 Ничего не найдено!
				</h3>
				</div>

		</div>
	)
}