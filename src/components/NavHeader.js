import logo from '../images/kmersh_hvid.svg';
export default function NavHeader() {
    return (
        
        <header className="nav_header">
            <a href="/">
                <img className="nav_logo" src={logo} alt="logo" />
            </a>
        </header>
        
    );
}