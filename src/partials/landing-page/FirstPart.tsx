import Desc from '../../components/Desc'
import LinkButton from '../../components/LinkButton'
import Line from '../../components/Line'
import Title from '../../components/Title'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function FirstPart() {
	useEffect(() => {
		AOS.init()
	}, [])
	return (
		<div
			className='mt-20 grid'
			style={{
				gridRow: '30% 70%',
				gridTemplateAreas: '"image text"',
				gap: '8rem',
			}}
		>
			<div
				className='flex justify-end'
				style={{ gridArea: 'image' }}
				data-aos='fade-right'
			>
				<img src='/images/pic_1.jpg' alt='Mabes Sobat Lutfhi' width='50%' />
			</div>
			<div
				className='flex gap-4 flex-col'
				style={{ gridArea: 'text' }}
				data-aos='fade-left'
			>
				<>
					<Title
						blackText='Gabung dan Jadilah'
						blueText='Relawan Mabes Sobat Lutfhi'
						customStyle={{ width: '70%' }}
					/>
					<Line width='30%' />
					<Desc
						text='Mabes Sobat Lutfhi merupakan gerakan relawan yang mempunyai semangat untuk mewujudkan perubahan positif melalui dukungan kepada sosok muda yang penuh dedikasi, Ahmad Lutfhi.'
						customStyle={{
							width: '50%',
						}}
					/>
					<LinkButton text='Bergabung Relawan' />
				</>
			</div>
		</div>
	)
}
