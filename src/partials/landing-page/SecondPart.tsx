import FlexContainer from '../../components/FlexContainer'
import NewsCard from '../../components/NewsCard'
import Line from '../../components/Line'
import Title from '../../components/Title'

export default function SecondPart() {
	return (
		<FlexContainer className='flex-col gap-10'>
			<>
				<FlexContainer className='flex-col items-center mt-28 mb-20 gap-5'>
					<>
						<Title blackText='Berita' blueText='Terbaru' />
						<Line width='10%' />
					</>
				</FlexContainer>
				<FlexContainer className='flex-wrap' customStyle={{ rowGap: '2rem' }}>
					<>
						<NewsCard
							imageNumber={1}
							title='PDIP dan Gerindra Bicara soal Kans Kaesang Dampingi Ahmad Luthfi di Pilgub Jateng'
							desc='Kaesang Pangarep digadang-gadang menjadi calon wakil gubernur untuk mendampingi Ahmad Luthfi di Pilgub Jateng'
						/>
						<NewsCard
							imageNumber={2}
							title='PDIP dan Gerindra Bicara soal Kans Kaesang Dampingi Ahmad Luthfi di Pilgub Jateng'
							desc='Kaesang Pangarep digadang-gadang menjadi calon wakil gubernur untuk mendampingi Ahmad Luthfi di Pilgub Jateng'
						/>
						<NewsCard
							imageNumber={3}
							title='PDIP dan Gerindra Bicara soal Kans Kaesang Dampingi Ahmad Luthfi di Pilgub Jateng'
							desc='Kaesang Pangarep digadang-gadang menjadi calon wakil gubernur untuk mendampingi Ahmad Luthfi di Pilgub Jateng'
						/>
						<NewsCard
							imageNumber={4}
							title='PDIP dan Gerindra Bicara soal Kans Kaesang Dampingi Ahmad Luthfi di Pilgub Jateng'
							desc='Kaesang Pangarep digadang-gadang menjadi calon wakil gubernur untuk mendampingi Ahmad Luthfi di Pilgub Jateng'
						/>
						<NewsCard
							imageNumber={5}
							title='PDIP dan Gerindra Bicara soal Kans Kaesang Dampingi Ahmad Luthfi di Pilgub Jateng'
							desc='Kaesang Pangarep digadang-gadang menjadi calon wakil gubernur untuk mendampingi Ahmad Luthfi di Pilgub Jateng'
						/>
						<NewsCard
							imageNumber={6}
							title='PDIP dan Gerindra Bicara soal Kans Kaesang Dampingi Ahmad Luthfi di Pilgub Jateng'
							desc='Kaesang Pangarep digadang-gadang menjadi calon wakil gubernur untuk mendampingi Ahmad Luthfi di Pilgub Jateng'
						/>
						<NewsCard
							imageNumber={7}
							title='PDIP dan Gerindra Bicara soal Kans Kaesang Dampingi Ahmad Luthfi di Pilgub Jateng'
							desc='Kaesang Pangarep digadang-gadang menjadi calon wakil gubernur untuk mendampingi Ahmad Luthfi di Pilgub Jateng'
						/>
						<NewsCard
							imageNumber={8}
							title='PDIP dan Gerindra Bicara soal Kans Kaesang Dampingi Ahmad Luthfi di Pilgub Jateng'
							desc='Kaesang Pangarep digadang-gadang menjadi calon wakil gubernur untuk mendampingi Ahmad Luthfi di Pilgub Jateng'
						/>
					</>
				</FlexContainer>
			</>
		</FlexContainer>
	)
}
