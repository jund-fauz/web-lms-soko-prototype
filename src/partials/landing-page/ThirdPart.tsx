import FlexContainer from '../../components/FlexContainer'
import Line from '../../components/Line'
import SocialMedia from '../../components/SocialMedia'
import Title from '../../components/Title'

export default function ThirdPart() {
	return (
		<FlexContainer
			className='flex-col items-center mt-20 pt-20 py-20 gap-5'
			customStyle={{ backgroundColor: 'gray' }}
		>
			<>
				<Title blackText='Media Center' blueText='Relawan Sobat Lutfhi' />
				<Line width='10%' />
				<FlexContainer className='w-full mt-8'>
					<>
						<FlexContainer
							className='justify-center items-center'
							customStyle={{ flexBasis: '25%' }}
						>
							<img
								src='/images/nav_logo.png'
								alt='Relawan Sobat Lutfhi'
								width='80%'
							/>
						</FlexContainer>
						<FlexContainer className='pr-10' customStyle={{ flexBasis: '75%' }}>
							<>
								<FlexContainer
									className='flex-col gap-10 justify-center'
									customStyle={{ flexBasis: '33.3%' }}
								>
									<>
										<SocialMedia name='instagram' content={['sobat_lutfhi']} />
										<SocialMedia name='instagram' content={['sobat_lutfhi']} />
									</>
								</FlexContainer>
								<FlexContainer
									className='flex-col gap-10 justify-center'
									customStyle={{ flexBasis: '33.3%' }}
								>
									<>
										<SocialMedia name='instagram' content={['sobat_lutfhi']} />
										<SocialMedia name='instagram' content={['sobat_lutfhi']} />
									</>
								</FlexContainer>
								<FlexContainer
									className='flex-col gap-10 justify-center'
									customStyle={{ flexBasis: '33.3%' }}
								>
									<>
										<SocialMedia name='instagram' content={['sobat_lutfhi']} />
										<SocialMedia name='instagram' content={['sobat_lutfhi']} />
									</>
								</FlexContainer>
							</>
						</FlexContainer>
					</>
				</FlexContainer>
			</>
		</FlexContainer>
	)
}
