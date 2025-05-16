import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { searchRes } from '../../../shared/store/searchRes/searchRes'
import { Anime } from '../../../shared/types/types'
import { Load } from '../../atoms/load/load'

export function InpRes() {
	const nav = useNavigate()

	const [animeData, setAnimeData] = useState<Anime[]>([])

	const [isLoad, setIsLoad] = useState(true)
	const [result, setResult] = useState<Anime[]>()

	useEffect(() => {
		const fetchAnimeList = async (): Promise<void> => {
			try {
				const { data } = await axios.get('https://api.jikan.moe/v4/top/anime')
				setAnimeData(data.data)
			} finally {
				setIsLoad(false)
			}
		}

		fetchAnimeList()
	}, [])

	useEffect(() => {
		const updateData = animeData.filter(e =>
			e.title.includes(searchRes.searchRes)
		)
		console.log('updating DATA: ', updateData)
		setResult(updateData)
	}, [searchRes.searchRes])

	console.log('animeData', animeData)

	const handleClick = (id: string) => {
		nav(`anime/${id}`)
	}

	return (
		<>
			{isLoad ? (
				<Load />
			) : (
				<div
					className=' animate-pulse w-[90%] h-80  border
		 border-[#fff]/20 md:w-[70%] || fn
		rounded-4xl mx-auto font-stretch-extra-expanded
		text-white/70 overflow-x-auto '
				>
					{result?.length ? (
						<div
							className='flex h-[100%] overflow-x-auto
	            w-[5000px]'
						>
							{result.map((anime, idx) => (
								<div
									key={idx}
									className='cursor-pointer w-[150px]
				          h-[95%] mt-3 ml-3 rounded-3xl m-1
				          hover:scale-103'
								>
									<div onClick={() => handleClick(anime.mal_id)}>
										<img
											src={anime.images.jpg.image_url}
											alt='1488 error naxui'
											title='d'
											className='rounded-3xl'
										/>
									</div>
								</div>
							))}
						</div>
					) : (
						<div className='text-center mt-10'>
							<h3>
								по запросу{' '}
								<span className='text-blue-800'>"{searchRes.searchRes}"</span>
								ничего не найдено
							</h3>
						</div>
					)}
				</div>
			)}
		</>
	)
}
