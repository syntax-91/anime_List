import { toJS } from 'mobx'
import { observer } from 'mobx-react-lite'
import { useNavigate } from 'react-router-dom'
import { Button } from '../../../companents/atoms/button/button'
import { likes } from '../../../store/likes'


 
 export const Likes = observer(() => {

	const nav = useNavigate();
	const likesArr = toJS(likes);
	console.log('lkArr: ', likesArr)
 
	return(
		<div  className='w-[100%] h-[300px] border
		border-[#c5c1c1]/20 rounded-2xl'>

				<h2 onClick={()=> nav(-1) } 
					className='mt-[20px] inline-block ml-[25px] text-[#858383]
					hover:text-[#b0b0b0] cursor-pointer'>Назад</h2>

				<div 
				className=' w-[100%] h-[100%]
				mx-auto flex mt-[10px] rounded-2xl overflow-x-auto oya '>
						{likesArr.likes.map(anime => (
							<div
							className='border border-[#444] ml-[20px] w-[150px]
							h-[245px] hup rounded-xl'
							key={anime.mal_id}>
 
									<div className='w-[100%] h-[200px]
									rounded-2xl flex'>
										<img src={anime
											.images.jpg.image_url
										} className='rounded-2xl w-full
										h-full'
									 alt="ERROR" />
									</div>

							<div>
								<Button style='blueviolet' position='center' className='w-[95%]
								h-[35px] mt-[5px] rounded-2xl' 
								label='Смотреть'
								onClick={()=> nav(`/anime/${anime.mal_id}`) }/>
							</div>

							</div>
						))}
				</div>
		</div>


	)
 })