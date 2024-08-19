import primaryColor from "../variables/color";

export default function Title({blackText = '', blueText = '', customStyle = {}, className = ''}) {
    return (
        <h1 className={`font-extrabold text-5xl ${className}`} style={customStyle}>
            <span className="text-black">{blackText}</span>
            <span style={{ color: primaryColor }}> {blueText}</span>
        </h1>
    )
}
