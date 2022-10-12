import { ReactNode, useEffect, useState } from 'react'
import Head from 'next/head'

import Header from './Header'
import Notes from '../components/Notes'
import LinkList from './LinkList'
import Navbar from './Navbar'

import claimsData from '../data/claims.json' // BORRADOR
import { Claims } from '../resources/types'

interface Props {
  children: ReactNode
  title: string
}

const PageLayout = ({ children, title = 'Intranet BOT' }: Props) => {
  const [claims, setClaims] = useState<Claims[]>([]) // BORRADOR
  useEffect(() => setClaims(claimsData), []) // BORRADOR

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Intranet BOT - Helper" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="flex flex-row md:w-11/12 lg:w-10/12 sm:w-full  mx-auto h-full">
        <div className="flex flex-col w-[30%]">
          <Navbar claims={claims} />
        </div>
        <div className="flex flex-col w-full mt-10">
          <div className="content flex flex-col gap-4 w-full h-full px-8">{children}</div>
        </div>
        <div className="flex flex-col gap-8 w-[30%] mt-10">
          <LinkList />
          <Notes />
        </div>
      </main>
    </>
  )
}

export default PageLayout
