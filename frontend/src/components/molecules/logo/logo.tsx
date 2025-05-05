
export function Logo(){

	return(
		<div
			onClick={()=> location.reload() }
			 className='text-[18px] sm:block sm:text-[30px] 
			 cursor-pointer'>
			<span>AnimeList</span></div>
	)
}