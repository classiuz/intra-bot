import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import regExp from '../resources/regExp'
import { Claims } from '../resources/types'
import Icon from './Icon'

interface Props {
  claims: Claims[]
}

const Navbar = ({ claims }: Props) => {
  const [status, setStatus] = useState(-1)
  const currentRoute = useRouter().asPath
  return (
    <div className="navbar flex flex-col gap-4 h-[calc(100vh_-_67.5px)] overflow-y-scroll">
      <div className="flex flex-row text-[24px] font-bold tracking-[0.6px] mt-10">
        <Icon direction="right" text="LISTA GESTIONES" icon="Tasks" />
      </div>
      <div className="flex flex-col gap-6 mb-6">
        {claims.map((claim, index) => {
          return (
            <div className="flex flex-col gap-2 ml-1" key={index}>
              <Link href={`/${regExp(claim.name)}`}>
                <a
                  className="flex flex-row text-[20px] w-fit hover:underline hover:underline-offset-4 decoration-neutral-400"
                  onMouseEnter={() => setStatus(index)}
                  onMouseLeave={() => setStatus(-1)}
                >
                  <Icon
                    direction="right"
                    text={claim.name}
                    icon="Hashtag"
                    className={`text-sm text-neutral-300 ${status == index ? 'visible' : 'hidden'}`}
                  />
                </a>
              </Link>
              <ul className="flex flex-col gap-1 text-base border-l border-neutral-700 ml-1">
                {claim.categories.map((categorie, index) => {
                  const path = `/${regExp(claim.name)}/${regExp(categorie.name)}`
                  return (
                    <li key={index}>
                      <Link href={path}>
                        <a
                          className={`${
                            currentRoute == path ? 'active' : ''
                          } block w-fit text-neutral-300 border-l pl-3 -ml-px border-neutral-700 hover:text-violet-600 hover:border-violet-600`}
                        >
                          <Icon direction="left" text={categorie.name} icon="Categorie" />
                        </a>
                      </Link>
                    </li>
                  )
                })}
                <li>
                  <Link href={`./${regExp(claim.name)}/añadir-categoria`}>
                    <a className="block w-fit text-neutral-300 border-l pl-3 -ml-px border-neutral-700 hover:text-violet-600 hover:border-violet-600">
                      <Icon direction="left" text="Añadir categoria" icon="AddCategorie" />
                    </a>
                  </Link>
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
