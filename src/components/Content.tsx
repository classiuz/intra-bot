import './Content.css'
import { useParams } from 'react-router-dom'
import { Props } from '../resources/interfaces'
import regExp from '../resources/regExp'
import NoMatch from './NoMatch'
import { FaTrashAlt, FaEdit } from 'react-icons/fa'

const Content = ({ claims, index }: Props) => {
  const { categoriePath } = useParams()
  const currentClaim = claims.find((claim) => claim.id == index)
  const currentCategorie = currentClaim?.categories.find(
    (categorie) => regExp(categorie.name) == categoriePath
  )

  if (!currentClaim || !currentCategorie) return <NoMatch />

  return (
    <div className="content mt-4">
      <div className="row j-space-b a-center mb-4">
        <div className="row">
          <div className="title">{currentClaim.name}</div>
        </div>
        <div className="row">
          <button>
            <FaEdit />
            <span>Editar</span>
          </button>
          <button>
            <FaTrashAlt />
            <span>Eliminar</span>
          </button>
        </div>
      </div>
      <div className="subtitle">{currentCategorie.name}</div>
      <div className="article">{currentCategorie.content}</div>
    </div>
  )
}

export default Content
