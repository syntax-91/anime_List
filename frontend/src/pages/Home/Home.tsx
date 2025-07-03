import { observer } from 'mobx-react-lite'
import { Outlet } from 'react-router-dom'
import { Wrapper } from '../../components/molecules/wrapper/wrapper'
import AnimeList from '../../components/organisms/animeList/animeList'
import { Header } from '../../components/organisms/header/header'
import { QueryRes } from '../../components/organisms/QueryResult/QueryRes'
import { bgs } from '../../shared/store/bg/bgStore'
import { searchRes } from '../../shared/store/searchRes/searchRes'
import s from './stylesHome.module.css'

function Home() {
	console.info('currentBG: ', bgs.current)

	return (
		<div style={{ background: `url(${bgs.current})` }} className={s.mc}>
			<div className={s.blur_bg_Home}></div>

			<div className={s.Home_content}>
				<Header />

				{searchRes.searchRes && <QueryRes />}

				<div
					className='w-[90%]
				  mx-auto mt-[20px] '
				>
					<Outlet />
				</div>

				<Wrapper />

				<AnimeList />
			</div>
		</div>
	)
}

export default observer(Home)
