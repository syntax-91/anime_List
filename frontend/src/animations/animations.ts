import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

export function animatedAnimeList(
	boxesRefs: React.RefObject<HTMLDivElement[]>,
	isMobile: boolean
) {
	//

	//animate boxes anime when scrolling
	gsap.registerPlugin(ScrollTrigger)

	if (isMobile) {
		boxesRefs.current.forEach(el => {
			gsap.fromTo(
				el,
				{ opacity: 0, y: 70 },
				{
					opacity: 1,
					y: 0,
					//
					scrollTrigger: {
						trigger: el,
						start: 'top 90%',
						toggleActions: 'play none none none',
					},
				}
			)
		})
	}
}
