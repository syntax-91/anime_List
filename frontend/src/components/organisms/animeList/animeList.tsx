import axios from 'axios'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { animeListStore } from '../../../shared/store/animeLIst/animeList'
import { Anime } from '../../../shared/types/types'
import { Button } from '../../atoms/button/button'
import { Load } from '../../atoms/load/load'
import { Info } from '../../molecules/info/info'
import likeIcon from './../../../assets/like.png'
import shareIcon from './../../../assets/share.png'
//

export function AnimeList() {
	gsap.registerPlugin(ScrollTrigger)
	//
	const [animeList, setAnimeList] = useState<Anime[]>([])
	const [load, setLoad] = useState(true)
	const [copy, setCopy] = useState('')
	const animeBoxesRef = useRef<(HTMLDivElement | null)[]>([])

	useEffect(() => {
		const fetchAnimeList = async (): Promise<void> => {
			try {
				const { data } = await axios.get('https://api.jikan.moe/v4/top/anime')
				console.log('ANIME_LIST: ', animeListStore)
				setAnimeList(data.data)
			} finally {
				setLoad(false)
			}
		}

		fetchAnimeList()
	}, [])

	const nav = useNavigate()

	const handleLike = (data: Anime) => {
		setCopy(`http:example.com/anime/${data}`)
	}
	const handleNavigate = (id: string) => {
		nav(`anime/${id}`)
	}
	const handleShare = (id: string) => {
		setCopy(`https://animelist-red.vercel.app/anime/${id}`)
	}

	useEffect(() => {
		if (copy) {
			navigator.clipboard.writeText(copy)

			const t = setTimeout(() => setCopy(''), 1500)
			return () => clearTimeout(t)
		}
	}, [copy])

	//animate boxes anime when scrolling
	useEffect(() => {
		if (!animeList) return
		animeBoxesRef.current.forEach(el => {
			gsap.fromTo(
				el,
				{ opacity: 0, y: 70 },
				{
					opacity: 1,
					y: 0,
					//
					scrollTrigger: {
						trigger: el,
						start: 'top 80%',
						toggleActions: 'play none none none',
					},
				}
			)
		})

		return () => ScrollTrigger.getAll().forEach(trigger => trigger.kill())
	}, [animeList])

	return (
		<div>
			{copy && <Info />}

			{load && (
				<div className=' flex justify-center '>
					<Load />
				</div>
			)}

			<div className='w-[90vw] h-[40vh] mx-auto mt-[30px] flex flex-wrap justify-center perspective-normal'>
				{animeList.map((data, idx) => (
					<div
						ref={el => {
							animeBoxesRef.current[idx] = el
						}}
						className=' w-[220px] h-[360px] border border-[#444] m-[10px] rounded-2xl || scaleY-70 , 
					 hup hover:scale-105 duration-700 ||
					 '
						key={data.mal_id}
					>
						{/* like */}
						<div
							onClick={() => handleLike(data)}
							className='absolute top-5 right-5
						w-[40px] h-[40px] p-[3px] rounded-[5px]
						cursor-pointer  bg-[#333]'
						>
							<img src={likeIcon} alt='ERROR' />
						</div>

						{/* copy */}
						<div
							onClick={() => handleShare(data.mal_id)}
							className='absolute top-5 right-20
						w-[40px] h-[40px] p-[3px] rounded-[5px]
						cursor-pointer  bg-[#333]'
						>
							<img src={shareIcon} alt='ERROR' />
						</div>

						{/* IMG */}
						<div
							className='
					 rounded-2xl '
						>
							<img
								className='rounded-[10px] w-full h-[280px] '
								src={data.images.jpg.image_url}
							/>
						</div>

						{/* Title */}
						<div className='flex justify-center'>
							<p className='pt-[10px] truncate  max-w-[90%]'>{data.title}</p>
						</div>

						{/* button */}

						<Button
							onClick={() => handleNavigate(data.mal_id)}
							label='Смотреть'
							position='center'
							className='
						absolute bottom-1 mt-[8px]
						border border-[#444] w-[95%] py-[10px]
						 rounded-2xl bg-fuchsia-700
						 cursor-pointer || hover:bg-fuchsia-600
						 active:bg-fuchsia-600'
						/>
					</div>
				))}
			</div>
		</div>
	)
}
