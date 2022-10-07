import Navbar from './Navbar'
import Content from './Content'
import Home from './Home'
import LinkList from './LinkList'
import Notes from './Notes'
import NoMatch from './NoMatch'

import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Claims } from '../resources/interfaces'
import regExp from '../resources/regExp'
import claimsData from '../data/claims.json'

const Body = () => {
  const [claims, setClaims] = useState<Claims[]>([])
  useEffect(() => setClaims(claimsData), [])

  return (
    <main className="flex flex-row md:w-11/12 lg:w-10/12 sm:w-full  mx-auto h-full">
      <div className="flex flex-col w-[30%]">
        <Navbar claims={claims} />
      </div>
      <div className="flex flex-col w-[100%] mt-10">
        <Routes>
          <Route path="/" element={<Home />} />
          {claims.map((claim, index) => {
            return (
              <Route
                key={index}
                path={`${regExp(claim.name)}/:categoriePath`}
                element={<Content claims={claims} index={index} />}
              />
            )
          })}
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </div>
      <div className="flex flex-col gap-8 w-[30%] mt-10">
        <LinkList />
        <Notes />
      </div>
    </main>
  )
}

export default Body
