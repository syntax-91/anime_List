import { gsap } from 'gsap'
import { useEffect, useRef } from 'react'
import { IoCheckmarkSharp } from 'react-icons/io5'

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
				className='scale-40 w-[200px] h-[45px]  rounded-4xl bg-black
      text-white/60 opacity-0 flex justify-center items-center 
			bsw gap-2'
			>
				<p>Скопировано</p>
				<IoCheckmarkSharp color='#fff' size={20} />
			</div>
		</div>
	)
}
