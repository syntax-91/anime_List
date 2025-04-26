
export function Logo(){

	return(
		<div
			onClick={()=> location.reload() }
			 className='hidden sm:block text-[30px] 
			 cursor-pointer'>
			<span>AnimeList</span></div>
	)
}