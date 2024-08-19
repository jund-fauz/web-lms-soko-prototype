import primaryColor from "../variables/color";

export default function Line({ color = primaryColor, width = '', customStyle = {} }) {
	return <hr style={{ borderTop: `1px solid ${color}`, width, ...customStyle }}/>
}
