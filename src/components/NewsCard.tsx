import { useState } from 'react'
import FlexContainer from './FlexContainer'

export default function NewsCard({ imageNumber = 1, title = '', desc = '' }) {
	const textWidth = { width: '80%' }
	const [opacity, setOpacity] = useState('100%')
    return (
			<a
				href='#'
				style={{ flexBasis: '25%', filter: `opacity(${opacity})`, transition: '.3s' }}
				onMouseEnter={() => setOpacity('50%')}
				onMouseLeave={() => setOpacity('100%')}
			>
				<FlexContainer className='flex-col gap-5'>
					<>
						<img src={`/images/news_${imageNumber}.jpg`} />
						<FlexContainer className='flex-col items-center'>
							<>
								<h1 className='font-bold text-center' style={textWidth}>
									{title}
								</h1>
								<p className='mt-1 text-center' style={textWidth}>
									{desc}
								</p>
							</>
						</FlexContainer>
					</>
				</FlexContainer>
			</a>
		)
}
