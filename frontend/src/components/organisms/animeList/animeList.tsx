import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { likes } from '../../../shared/store/likes'
import { Anime } from '../../../shared/types/types'
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

	const handleLike = (data: Anime) => {likes.setData(data)}
	const handleNavigate = (id: string) => { nav(`anime/${id}`) }
	const handleShare = (id: string) =>
		{setCopy(`https://animelist-red.vercel.app/anime/${id}`)}

	useEffect(() => {
		if(copy){
			navigator.clipboard.writeText(copy);

			const t = setTimeout(() => setCopy(''), 2000)
			return()=> clearTimeout(t)
		}
	}, [copy])


	useEffect(() => {
		const fetchAnimeList = async (): Promise<void> => {
		try {
			const { data } = await axios.get('https://api.jikan.moe/v4/top/anime')
			setAnimeList(data.data)
		} finally {
			setLoad(false)
		}
	}

	fetchAnimeList();
	}, [])
	 

	const nav = useNavigate();
	

	return(
		<div className='flex justify-center'>

			{copy && <Info /> }

			{load && 
			<div className=' flex justify-center'> 
				<Load /> 
			</div>
			}

			<div className='w-[90vw] h-[40vh] mx-auto mt-[30px] flex flex-wrap justify-center '>

				{animeList.map(data => (
					<div
					
					className=' w-[220px] h-[360px] border border-[#444] m-[10px] rounded-2xl
					 hup hover:scale-105 duration-700 ||
					 active:blur-[1px]' 
					  
					 key={data.mal_id}>

					{/* like */}
						<div 
						onClick={()=> handleLike(data) }

						 className='absolute top-5 right-5
						w-[40px] h-[40px] p-[3px] rounded-[5px]
						cursor-pointer  bg-[#333]'>
								<img src={likeIcon} alt="ERROR" />
						</div> 
						
						{/* copy */ }
						<div 
						 onClick={() => handleShare(data.mal_id) }
						 className='absolute top-5 right-20
						w-[40px] h-[40px] p-[3px] rounded-[5px]
						cursor-pointer  bg-[#333]'>
								<img src={shareIcon} alt="ERROR" />
						</div>
 
					{/* IMG */}
					<div className='
					 rounded-2xl '
					>
						
						<img className='rounded-[10px] w-full h-[280px] ' src={data.images.jpg.image_url} />
						</div>				

						{/* Title */}
						<div className='flex justify-center'>
							<p className='pt-[10px] truncate  max-w-[90%]'>
								{data.title}</p>	
						</div>	


					{/* button */}
					
						<Button onClick={()=> handleNavigate(data.mal_id) } 
						label='Смотреть' position='center' 

						className='
						absolute bottom-1 mt-[8px] 
						border border-[#444] w-[95%] py-[10px]
						 rounded-2xl bg-fuchsia-700 
						 cursor-pointer || hover:bg-fuchsia-600
						 active:bg-fuchsia-600' />
						 


					</div>
				))}
			</div>
		</div>
	)

 }