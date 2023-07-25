import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'


function Navbar() {
  return (
    <div>
      <header>
        <Link to="/">HOME</Link>
        <div className='logo-container'>
          <Link to="/">{<img className='logo' src="/src/media/logo dune.png" alt="logo"/> }</Link>
        </div>
        <Link to="/book-catalog">DUNE BOOKS</Link>
        {/* <Link to="/book/:symbol">Separate Books</Link>  */}
      </header> 
    </div>
  )
}

export default Navbar