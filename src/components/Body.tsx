import { useState, useEffect } from 'react'
import claimsData from '../data/claims.json'
import { Claims } from '../resources/interfaces'
import { Routes, Route } from 'react-router-dom'

import Navbar from './Navbar'
import Content from './Content'
import LinkList from './LinkList'
import Notes from './Notes'
import NoMatch from './NoMatch'

import regExp from '../resources/regExp'

const Body = () => {
  const [claims, setClaims] = useState<Claims[]>([])
  const [status, setStatus] = useState(-1) // EDIT INCOMPLETED
  useEffect(() => setClaims(claimsData), [])

  return (
    <main className="row j-space-b wth-85 ms-auto hgh-100">
      <div className="col wth-30">
        <Navbar claims={claims} status={status} />
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
