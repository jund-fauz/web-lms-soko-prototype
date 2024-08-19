import FlexContainer from './FlexContainer'
import Line from './Line'

export default function SocialMedia({ name, content = [''] }) {
	return (
		<FlexContainer
			className='justify-end items-center'
		>
			<>
				<FlexContainer className='flex-col items-end'>
					<>
						<h1 className='font-bold text-xs'>{name.toUpperCase()}</h1>
						{content.map((text, i) => (
							<p key={i}>{text}</p>
						))}
					</>
				</FlexContainer>
				<Line
					width={content.length === 1 ? '15%' : '25%'}
					customStyle={{ transform: 'rotate(90deg)' }}
				/>
				<span style={{ borderLeft: '1px solid #80808080' }} />
				<i className={`fa-brands fa-${String(name)}`} />
			</>
		</FlexContainer>
	)
}
