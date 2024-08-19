export default function SlideButton({arrow, slide}: {arrow : string, slide: React.MouseEventHandler}) {
    return (
			<button onClick={slide} className='py-1 px-2 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white'>
				<i className={`fa-solid fa-${arrow}-long`} />
			</button>
		)
}