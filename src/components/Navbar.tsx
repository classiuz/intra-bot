import './Navbar.css'
import { Link } from 'react-router-dom'
import { FaTasks } from 'react-icons/fa'
import { Props } from '../resources/interfaces'
import regExp from '../resources/regExp'

const Navbar = ({ claims, status }: Props) => {
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
                      <Link
                        className={status === index ? 'active' : ''} // EDIT STATUS - INCOMPLETED
                        to={path}
                      >
                        {categorie.name}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Navbar
