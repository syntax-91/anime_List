import { gsap } from 'gsap'
import { useEffect, useRef } from 'react'
import doneIcon from './../../../assets/done.png'

export function Info() {
	const boxRef = useRef(null)

	useEffect(() => {
		gsap.fromTo(boxRef.current, { opacity: 0, x: -40 }, { opacity: 1, x: 0 })
	}, [])

	return (
		<div
			className='w-[100vw] h-[199px] fixed top-[50px] flex justify-center 
      ||  z-99'
		>
			<div
				ref={boxRef}
				className='scale-40 w-[200px] h-[45px] border border-[#444] rounded-4xl
      text-white/60 opacity-0 flex justify-center items-center bg-black/80'
			>
				<p>Скопировано!</p>
				<img src={doneIcon} alt='ERROR' className='w-[20px] h-[20px] ml-5' />
			</div>
		</div>
	)
}
