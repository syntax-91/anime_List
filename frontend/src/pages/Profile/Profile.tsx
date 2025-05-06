export default function Profile () {

	console.log('Profile')

	return(
		<div className='sm:w-[80%] h-100 md:border 
		border-[#444]/90 rounded-2xl
		mx-auto border-0 w-[100%] '>
			<h2 className='py-5 px-8'>Профиль</h2>

			<div className=' w-100 h-80
			mx-auto'>

						<div 
						className='bg-red-50/80 w-[100%] h-40
						pt-20 rounded-2xl'>

					<div className='w-[100px] h-[100px]
					bg-[#958f8f]/95 rounded-[50%]
					mx-auto'>
					</div>

						</div>


				<div className='flex 
				items-center gap-2 justify-center mt-20'>	

			<div>
				
				<h2>@username</h2>

				<div className='flex items-center gap-2'>
					<div className='green_ind'></div>
					<p>в сети</p>
				</div>
			</div>
				
				</div>

			</div>
		</div>
	)
}