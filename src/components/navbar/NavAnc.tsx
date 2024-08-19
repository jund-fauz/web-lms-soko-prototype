export default function NavAnc({to = '#', children = ''}) {
    return (
        <a className="flex-1 text-center py-5" href={to}>{children}</a>
    )
}