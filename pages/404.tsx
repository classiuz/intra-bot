import Link from 'next/link'
import PageLayout from '../components/PageLayout'
import Icon from '../components/Icon'

const Error404 = () => {
  return (
    <PageLayout title="Error 404 - Intra BOT">
      <div className="flex flex-col items-center">
        <Icon icon="Error" className="text-8xl mb-5" />
        <div className="font-bold text-4xl tracking-wide">
          <span>LO SENTIMOS</span>
        </div>
        <p className="text-center text-neutral-300 mt-2 mb-4">
          Al parecer la página que este buscando no existe. <br />
          Si cree que esto es un errror, contáctese con el administrador.
        </p>
        <Link href="/">
          <a className="hover:text-violet-600">
            <Icon direction="left" text="Volver al Inicio" icon="Home" />
          </a>
        </Link>
      </div>
    </PageLayout>
  )
}

export default Error404
