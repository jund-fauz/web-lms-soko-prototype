export default function Desc({ text = '', customStyle = {} }) {
	return <p style={{...customStyle, color: 'gray'}}>{text}</p>
}
