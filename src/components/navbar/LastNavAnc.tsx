import { useState } from "react"
import primaryColor from "../../variables/color"

export default function LastNavAnc({
	to = '#',
	children = '',
}) {
    const [color, setColor] = useState(primaryColor)
	return (
		<a
			className="flex-1 text-center p-2 ml-4"
			href={to}
			style={{ height: '100%', color: 'gray', backgroundColor: color, transition: '.3s' }}
			onMouseEnter={() => {
				setColor(`${primaryColor}90`)
			}}
			onMouseLeave={() => {
				setColor(primaryColor)
			}}
		>
			{children}
		</a>
	)
}
