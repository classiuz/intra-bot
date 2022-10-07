import { Link } from 'react-router-dom'
import Icon from './Icon'

const NoMatch = () => {
  return (
    <div className="flex flex-col items-center">
      <Icon icon="Error" className="text-8xl mb-5" />
      <div className="font-bold text-4xl tracking-wide">
        <span>LO SENTIMOS</span>
      </div>
      <p className="text-center text-neutral-300 mt-2 mb-4">
        Al parecer la página que este buscando no existe. <br />
        Si cree que esto es un errror, contáctese con el administrador.
      </p>
      <Link to="/" className="hover:text-violet-600">
        <Icon direction="left" text="Volver al Inicio" icon="Home" />
      </Link>
    </div>
  )
}

export default NoMatch
