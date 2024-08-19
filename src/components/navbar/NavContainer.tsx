export default function NavContainer({ children = <></> }) {
	return <nav className='flex pl-2 pr-8' style={{ boxShadow: '0 5px 5px 0px rgba(0,0,0,0.2)' }}>{children}</nav>
}
