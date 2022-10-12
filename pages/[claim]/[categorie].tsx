import PageLayout from '../../components/PageLayout'
import Icon from '../../components/Icon'
import { Claims } from '../../resources/types'

const API_URL = ''

// export const getStaticPaths = async () => {
//   const res = await fetch(API_URL)
//   const data = await res.json()

//   const paths = data.map((categorie) => {
//     return {
//       params: { id: categorie.name },
//     }
//   })

//   return {
//     paths,
//     fallback: false,
//   }
// }

// export const getStaticProps = async (context) => {
//   const categorie = context.params.id
//   const res = await fetch(`${API_URL}/${categorie}`)
//   const data = await res.json()

//   return {
//     props: { categorie: data },
//   }
// }

interface Props {
  categorie: Claims['categories']
}

const Categorie = ({ categorie }: Props) => {
  return (
    <PageLayout title="Categorie - Intra BOT">
      <div className="flex flex-row justify-between items-center">
        <p className="text-[36px] font-bold tracking-[0.6px]">CURRENT CLAIM</p>
        <div>
          <button className="text-neutral-300 px-[0.6rem] py-[0.2rem] hover:text-violet-600">
            <Icon direction="left" text="Editar" icon="Edit" />
          </button>
          <button className="text-neutral-300 px-[0.6rem] py-[0.2rem] hover:text-violet-600">
            <Icon direction="left" text="Eliminar" icon="Delete" />
          </button>
        </div>
      </div>
      <section className="text-2xl ml-6">CURRENT CATEGORIE NAME</section>
      <article className="h-full ml-8">CURRENT CATEGORIE CONTENT</article>
      <div className="flex flex-row justify-between place-items-end mb-4">
        <button className="text-neutral-300 px-[0.6rem] py-[0.2rem] hover:text-violet-600">
          <Icon direction="left" text="Anterior" icon="Prev" />
        </button>
        <p className="text-sm tracking-wide text-neutral-300">Última actualización 09/10</p>
        <button className="text-neutral-300 px-[0.6rem] py-[0.2rem] hover:text-violet-600">
          <Icon direction="right" text="Siguiente" icon="Next" />
        </button>
      </div>
    </PageLayout>
  )
}

export default Categorie
