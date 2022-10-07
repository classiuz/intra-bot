import { useParams } from 'react-router-dom'
import { Props } from '../resources/interfaces'
import regExp from '../resources/regExp'
import NoMatch from './NoMatch'
import Icon from './Icon'

const Content = ({ claims, index }: Props) => {
  const { categoriePath } = useParams()
  const currentClaim = claims.find((claim) => claim.id == index)
  const currentCategorie = currentClaim?.categories.find((categorie) => regExp(categorie.name) == categoriePath)

  if (!currentClaim || !currentCategorie) return <NoMatch />

  return (
    <div className="content flex flex-col gap-4 w-full h-full px-8">
      <div className="flex flex-row justify-between items-center">
        <div>
          <p className="text-[36px] font-bold tracking-[0.6px]">{currentClaim.name.toLocaleUpperCase()}</p>
        </div>
        <div>
          <button className="text-neutral-300 px-[0.6rem] py-[0.2rem] hover:text-violet-600">
            <Icon direction="left" text="Editar" icon="Edit" />
          </button>
          <button className="text-neutral-300 px-[0.6rem] py-[0.2rem] hover:text-violet-600">
            <Icon direction="left" text="Eliminar" icon="Delete" />
          </button>
        </div>
      </div>
      <section className="text-2xl ml-6">{currentCategorie.name}</section>
      <article className="ml-8">{currentCategorie.content}</article>
    </div>
  )
}

export default Content
