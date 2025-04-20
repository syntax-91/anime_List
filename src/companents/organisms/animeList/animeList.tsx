import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { likes } from '../../../store/likes'
import { Anime } from '../../../types/types'
import { Button } from '../../atoms/button/button'
import { Load } from '../../atoms/load/load'
import { Info } from '../../molecules/info/info'
import likeIcon from './../../../assets/like.png'
import shareIcon from './../../../assets/share.png'
//

 export function AnimeList(){ 

	const [animeList, setAnimeList] = useState<Anime[]>([]);
	const [load, setLoad] = useState(true);
	const [copy, setCopy] = useState('');

	useEffect(() => {
		if(copy){
			navigator.clipboard.writeText(copy);

			const t: NodeJS.Timeout = setTimeout(() => setCopy(''), 2000)
			return()=> clearTimeout(t)
		}
	}, [copy])


	useEffect(() => {
		
		axios.get('https://api.jikan.moe/v4/top/anime')
		.then(res => setAnimeList(res.data.data) )
		console.log(animeList)
		
	}, [])
	

	const nav = useNavigate();
	
	useEffect(() => {
		if(animeList.length > 0 ){setLoad(false)}
	}, [animeList])

	

	return(
		<div className='flex justify-center'>

			{copy && <Info /> }

			{load && 
			<div className=' flex justify-center'> 
				<Load /> 
			</div>
			}

			<div className='w-[90vw] h-[40vh] mx-auto mt-[30px] flex flex-wrap justify-center'>

				{animeList.map(data => (
					<div
					
					className=' w-[220px] relative h-[360px] border border-[#444] m-[10px] rounded-2xl
					 hup '
					  
					 key={data.mal_id}>

						<div 
						onClick={()=>likes.setData(data) }
						 
						 className='absolute top-5 right-5
						w-[40px] h-[40px] p-[3px] rounded-[5px]
						cursor-pointer  blur-white'>
								<img src={likeIcon} alt="ERROR" />
						</div>
						{/**/ }
						<div 
						 onClick={() => setCopy(`/anime/${data.mal_id}`) }
						 className='absolute top-5 right-20
						w-[40px] h-[40px] p-[3px] rounded-[5px]
						cursor-pointer  blur-white'>
								<img src={shareIcon} alt="ERROR" />
						</div>
 
					<div className='
					
					 rounded-2xl'>
						<img className='rounded-[10px] w-full h-[260px]' src={data.images.jpg.image_url} />
						</div>				

						<div className='flex justify-center'>
							<p className='pt-[5px] text-[16px]  truncate  max-w-[90%]'>{data.title}</p>	
						</div>	

						<Button onClick={()=> nav(`anime/${data.mal_id}`) } className='absolute bottom-1 mt-[8px] border border-[#444] w-[95%] py-[10px] rounded-2xl bg-fuchsia-700 cursor-pointer || hover:bg-fuchsia-600' label='Смотреть' position='center' />

					</div>
				))}
			</div>
		</div>
	)

 }