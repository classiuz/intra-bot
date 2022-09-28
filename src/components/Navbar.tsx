import './Navbar.css'
import { NavLink } from 'react-router-dom'
import { FaTasks } from 'react-icons/fa'
import { Props } from '../resources/interfaces'
import regExp from '../resources/regExp'
import { MdLibraryAdd, MdLibraryBooks } from 'react-icons/md'

const Navbar = ({ claims }: Props) => {
  return (
    <div className="navbar">
      <div className="row gap title mb-1 mt-4">
        <span>LISTA GESTIONES</span>
        <FaTasks />
      </div>
      <div className="col gap-2">
        {claims.map((claim, index) => {
          return (
            <div className="col gap" key={index}>
              <span className="ml fs-20">{claim.name}</span>
              <ul>
                {claim.categories.map((categorie, index) => {
                  const path = `${regExp(claim.name)}/${regExp(categorie.name)}`
                  return (
                    <li key={index}>
                      <NavLink to={path}>
                        <MdLibraryBooks />
                        {categorie.name}
                      </NavLink>
                    </li>
                  )
                })}
                <li>
                  <NavLink to={`${regExp(claim.name)}/añadir-categoria`}>
                    {<MdLibraryAdd />}
                    <span>Añadir categoria</span>
                  </NavLink>
                </li>
              </ul>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Navbar
