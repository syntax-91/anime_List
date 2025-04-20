import doneIcon from './../../../assets/done.png'

export function Info(){

	return(
		<div className='border border-[#fff]/40
		fixed top-30 w-[200px] h-[35px] z-99 bg-white/5
		rounded-2xl opening_info'>
			
			<div className='flex justify-between w-[60%] h-[30px]
			items-center
			mx-auto'>
		<p>Скопировано!</p>
			<div>
				<img src={doneIcon} alt="ERROR"
				className='w-[20px] h-[20px]' />
			</div>
			</div>

		</div>	
	)
}