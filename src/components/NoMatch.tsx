import './NoMatch.css'
import { Link } from 'react-router-dom'
import { FaHome } from 'react-icons/fa'

const NoMatch = () => {
  return (
    <div className="error mt-4">
      <div className="title">
        <span>LO SENTIMOS</span>
      </div>
      <p className="t-center">
        Al parecer la página que está buscando no existe. <br /> Si cree que
        esto es un errror, contáctese con el administrador.
      </p>
      <Link to="/">
        <span>
          <FaHome />
        </span>
        Volver al Inicio
      </Link>
    </div>
  )
}

export default NoMatch
