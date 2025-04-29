import { useState } from 'react'
import { Logo } from '../../molecules/logo/logo'
import { Menu } from '../../molecules/menu/menu'
import { SearchHeader } from '../../molecules/search/search'
import { Nav } from '../nav/nav'

export function Header(){

	const [isOpenMenu, setIsOpenMenu] = useState(false);

	return(
		
		  <div>
		<header
		className='w-[90%] 
		flex py-[25px] o0o1
		mx-auto justify-between items-center
		
		'>
	
			<Logo />

			<SearchHeader />
			
			<Nav />

			<Menu 
			isOpen={isOpenMenu} setIsOpen={setIsOpenMenu} />
				
		</header>
		</div>
	)
}