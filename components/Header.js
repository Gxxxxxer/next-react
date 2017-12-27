import Link from 'next/link'
const linkStyle = {
    marginRight:15
}

const Header = () => (
    <div>
        <Link href="/">
            <a style={linkStyle}>Home</a>
        </Link>
        <Link href="/about">
            <a style={linkStyle}>About</a>
        </Link>
        <Link href="/reduxTest">
            <a style={linkStyle}>reduxTest</a>
        </Link>
        <Link href="/other">
            <a style={linkStyle}>other</a>
        </Link>
    </div>
)

export default Header;
