import Navbar from './Navbar'
import Content from './Content'
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
    <main className="row j-space-b wth-85 ms-auto hgh-100">
      <div className="col wth-30">
        <Navbar claims={claims} />
      </div>
      <div className="col wth-100">
        <Routes>
          <Route path="/" element={<Content claims={claims} />} />
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
      <div className="col gap-2 wth-30">
        <LinkList />
        <Notes />
      </div>
    </main>
  )
}

export default Body
