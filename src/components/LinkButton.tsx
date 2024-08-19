import { useState } from 'react'
import primaryColor from '../variables/color'

export default function LinkButton({
	text = '',
	color = primaryColor,
	href = '#',
}) {
	const [colorState, setColorState] = useState(color)

	return (
		<a
			className='w-fit rounded-full py-1.5 px-5'
			href={href}
			style={{ backgroundColor: colorState, transition: '.3s' }}
			onMouseEnter={() => setColorState(`${color}80`)}
			onMouseLeave={() => setColorState(color)}
		>
			{text}
		</a>
	)
}
