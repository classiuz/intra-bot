import { NavLink } from 'react-router-dom'
import { Props } from '../resources/interfaces'
import regExp from '../resources/regExp'
import Icon from './Icon'

const Navbar = ({ claims }: Props) => {
  return (
    <div className="navbar flex flex-col gap-4 h-[calc(100vh_-_67.5px)] overflow-y-scroll">
      <div className="flex flex-row text-[24px] font-bold tracking-[0.6px] mt-10">
        <Icon direction="right" text="LISTA GESTIONES" icon="Tasks" />
      </div>
      <div className="flex flex-col gap-6 mb-6">
        {claims.map((claim, index) => {
          return (
            <div className="flex flex-col gap-2 ml-1" key={index}>
              <span className="text-[20px]">{claim.name}</span>
              <ul className="flex flex-col gap-1 text-base border-l border-neutral-700 ml-1">
                {claim.categories.map((categorie, index) => {
                  const path = `${regExp(claim.name)}/${regExp(categorie.name)}`
                  return (
                    <li key={index}>
                      <NavLink
                        to={path}
                        className="block w-fit text-neutral-300 border-l pl-3 -ml-px border-neutral-700 hover:text-violet-600 hover:border-violet-600"
                      >
                        <Icon direction="left" text={categorie.name} icon="Categorie" />
                      </NavLink>
                    </li>
                  )
                })}
                <li>
                  <NavLink
                    to={`${regExp(claim.name)}/añadir-categoria`}
                    className="block w-fit text-neutral-300 border-l pl-3 -ml-px border-neutral-700 hover:text-violet-600 hover:border-violet-600"
                  >
                    <Icon direction="left" text="Añadir categoria" icon="AddCategorie" />
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
