import { useState, useEffect } from 'react'
import raData from '../data/ra.json'
import { raInterface } from '../resources/interfaces'
import { FaTasks } from 'react-icons/fa'

const Navbar = () => {
  const [ra, setRa] = useState<raInterface[]>([])
  useEffect(() => setRa(raData), [])

  return (
    <>
      <div className="row gap title mb-1">
        <span>LISTA GESTIONES</span>
        <FaTasks />
      </div>
      <div className="col gap navbar">
        {ra.map((ra, index) => {
          return <span key={index}>{ra.name}</span>
        })}
      </div>
    </>
  )
}

export default Navbar
