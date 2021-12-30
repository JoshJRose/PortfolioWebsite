import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="absolute flex items-center w-screen h-20 gap-10 p-6 bg-dark text-ligray">
            <a href="https://overscore.media" className="text-xl">Company Website</a>
            <Link to="/resume" className="text-xl">Resume</Link>
        </nav>
      );
}
 
export default Navbar;