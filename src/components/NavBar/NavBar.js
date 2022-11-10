import { Link } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
  return (
    <nav className="navbar justify-content-between mb-5" style={{ backgroundColor: "rgb(210, 224, 224)" }}>
      <div>
        <Link to={'/'}><h1 className='mx-2' style={{ color: "rgb(6, 6, 6)" }} >Fravela</h1></Link>
      </div>
      <div>
        <Link to={`/category/termotanque`}>
          <button className='btn btn-secondary mx-5'>Termotanques</button>
        </Link>
        <Link to={`/category/calefactor`}>
          <button className='btn btn-secondary mx-5'>Estufas</button>
        </Link>
        <Link to={`/category/cocina`}>
          <button className='btn btn-secondary mx-5'>Cocinas</button>
        </Link>
      </div>
      <div>
        <CartWidget />
      </div>
    </nav>
  )
}

export default NavBar