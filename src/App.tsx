import Carousel from './components/carousel/Carousel'
import Navbar from './partials/Navbar'
import FirstPart from './partials/landing-page/FirstPart'
import SecondPart from './partials/landing-page/SecondPart'
import ThirdPart from './partials/landing-page/ThirdPart'

function App() {
	return (
		<>
			<Navbar />
			<Carousel>

			</Carousel>
			<FirstPart />
			<SecondPart />
			<ThirdPart />
		</>
	)
}

export default App
