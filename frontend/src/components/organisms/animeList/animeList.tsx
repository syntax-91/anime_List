import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { observer } from 'mobx-react-lite'
import { RefObject, useEffect, useRef, useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import { useNavigate } from 'react-router-dom'
import { animatedAnimeList } from '../../../animations/animations'
import { FD_TopAnimeStore } from '../../../shared/store/fetch/fetchTopAnimeStore'
import { likes } from '../../../shared/store/likes'
import { Anime } from '../../../shared/types/types'
import { Button } from '../../atoms/button/button'
import { Info } from '../../molecules/info/info'
import likeIcon from './../../../assets/like.png'
import shareIcon from './../../../assets/share.png'

//

function AnimeList() {
	const nav = useNavigate()
	const isMobile = useMediaQuery({ maxWidth: 700 })

	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger)
	}, [])

	const [copy, setCopy] = useState('')
	const animeBoxesRef = useRef<(HTMLDivElement | null)[]>([])

	//fetchAnime
	useEffect(() => {
		FD_TopAnimeStore.fetchData()
		//anim
	}, [])

	useEffect(() => {
		if (!FD_TopAnimeStore.animeList) return
		animatedAnimeList(animeBoxesRef as RefObject<HTMLDivElement[]>, isMobile)
	}, [FD_TopAnimeStore.animeList])

	const handleLike = (data: Anime) => {
		likes.setData(data)
	}
	const handleNavigate = (id: string) => {
		nav(`anime/${id}`)
	}
	const handleShare = (id: string) => {
		setCopy(`https://example.vercel.app/anime/${id}`)
	}

	useEffect(() => {
		if (copy) {
			navigator.clipboard.writeText(copy)

			const t = setTimeout(() => setCopy(''), 1500)
			return () => clearTimeout(t)
		}
	}, [copy])

	return (
		<div>
			{copy && <Info />}

			{FD_TopAnimeStore.loading === true && (
				<div className='m-10 flex justify-center '>
					<p>подождите..</p>
				</div>
			)}

			<div className='w-[90vw] h-[40vh] mx-auto mt-[30px] flex flex-wrap justify-center perspective-normal'>
				{FD_TopAnimeStore.animeList.map((data, idx) => (
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
						cursor-pointer  bg-[#333] '
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

export default observer(AnimeList)
