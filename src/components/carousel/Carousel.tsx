import { useState } from 'react'
import FlexContainer from '../FlexContainer'
import SlideButton from './SlideButton'

export default function Carousel() {
	const [curr, setCurr] = useState(0)

	const prev = () => setCurr((curr) => (curr === 0 ? 3 - 1 : curr - 1))
	const next = () => setCurr((curr) => (curr === 3 - 1 ? 0 : curr + 1))
	return (
		<div className='overflow-hidden relative'>
			<FlexContainer
				className='transition-transform ease-out duration-500'
				customStyle={{ transform: `translateX(-${curr * 100}%)`, height: '60vw' }}
			>
				<>
					<img src='/images/news_1.jpg' alt='' />
					<img src='/images/news_2.jpg' alt='' />
					<img src='/images/news_3.jpg' alt='' />
				</>
			</FlexContainer>
			<FlexContainer className='absolute inset-0 items-center justify-between p-4'>
				<>
					<SlideButton arrow='left' slide={prev} />
					<SlideButton arrow='right' slide={next} />
				</>
			</FlexContainer>
		</div>
	)
}
