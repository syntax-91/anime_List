import { motion } from 'framer-motion'
import doneIcon from './../../../assets/done.png'

export function Info(){

	return(
		<motion.div 
		initial={{ x: -40 }}
		animate={{ x: 10 }}
		className='border border-[#fff]/30
		fixed top-30 w-[220px] h-[45px] z-99 bg-black/80
		rounded-4xl opening_info flex justify-center items-center'>
			
			<div className='flex justify-between w-[60%] h-[30px]
			items-center
			mx-auto'>
				
				<p>Скопировано!</p>
			
				<img src={doneIcon} alt="ERROR"
				className='w-[20px] h-[20px]' />
			</div>

		</motion.div>	
	)
}