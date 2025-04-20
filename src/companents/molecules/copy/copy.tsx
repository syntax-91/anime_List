import { useState } from 'react'

export const Copy = ({text: string}) => {

	const [showPopUp, setShowPopUp] = useState(true);

		navigator.clipboard.writeText(text);
		setTimeout(() => setShowPopUp(false), 2000)

	return(
		<div>
			{showPopUp && 
				<div className='w-[100vw] h-[100vh] bg-red-900'>
					
				</div>
			}
		</div>
	)
	
}