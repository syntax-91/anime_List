import { useState } from 'react'
import { Logo } from '../../molecules/logo/logo'
import { Menu } from '../../molecules/menu/menu'
import { SearchHeader } from '../../molecules/search/search'
import { Nav } from '../nav/nav'

export function Header(){

	const [isOpenMenu, setIsOpenMenu] = useState(false);

	return(
		<header
		className='w-[100%] fixed
		top-0
		flex  z-99 bg-[#000]
		mx-auto py-[20px] justify-between items-center
		
		'>

			<div className="c
			w-[90%] mx-auto flex items-center"> 
				
			<Logo />

			<SearchHeader />
			
			<Nav />

			<Menu 
			isOpen={isOpenMenu} setIsOpen={setIsOpenMenu} />
				</div>
		</header>
	)
}