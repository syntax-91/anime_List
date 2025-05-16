import { gsap } from 'gsap/gsap-core'
import { useEffect, useRef, useState } from 'react'
import { Logo } from '../../molecules/logo/logo'
import { Menu } from '../../molecules/menu/menu'
import { SearchHeader } from '../../molecules/search/search'
import { Nav } from '../nav/nav'

export function Header() {
	const [isOpenMenu, setIsOpenMenu] = useState(false)
	const boxRef = useRef(null)

	useEffect(() => {
		gsap.fromTo(boxRef.current, { x: -40, opacity: 0 }, { opacity: 1, x: 0 })
	}, [])

	return (
		<header
			ref={boxRef}
			className='w-[90%] 
		flex py-[25px]  scale-40
		mx-auto justify-between items-center'
		>
			<Logo />

			<SearchHeader />

			<Nav />

			<Menu isOpen={isOpenMenu} setIsOpen={setIsOpenMenu} />
		</header>
	)
}
