import LastNavAnc from '../components/navbar/LastNavAnc'
import NavAnc from '../components/navbar/NavAnc'
import NavContainer from '../components/navbar/NavContainer'
import NavLine from '../components/navbar/NavLine'
import NavLogo from '../components/navbar/NavLogo'

export default function Navbar() {
	return (
		<NavContainer>
			<a href='#' className='ml-5 mt-2 flex-1'>
				<NavLogo />
			</a>
			<NavLine />
			<div className='flex flex-1 items-center'>
				<NavAnc>Beranda</NavAnc>
				<NavAnc>Tentang Kami</NavAnc>
				<NavAnc>Berita</NavAnc>
				<NavAnc>Hubungi Kami</NavAnc>
				<LastNavAnc>Bergabung Relawan</LastNavAnc>
			</div>
		</NavContainer>
	)
}
