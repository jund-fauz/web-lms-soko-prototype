export default function FlexContainer({className = '', children = <></>, customStyle = {}}) {
    return (
        <div className={`flex ${className}`} style={customStyle}>
            {children}
        </div>
    )
}