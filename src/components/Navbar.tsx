import './Navbar.css'
import { useState, useEffect } from 'react'
import raData from '../data/ra.json'
import { raInterface } from '../resources/interfaces'
import { FaTasks } from 'react-icons/fa'

const Navbar = () => {
  const [ra, setRa] = useState<raInterface[]>([])
  useEffect(() => setRa(raData), [])

  return (
    <div className="navbar">
      <div className="row gap title mb-1 mt-4">
        <span>LISTA GESTIONES</span>
        <FaTasks />
      </div>
      <div className="col gap-2">
        {ra.map((ra, index) => {
          return (
            <div className="col gap" key={index}>
              <span className="ml fs-20">{ra.name}</span>
              <ul>
                {ra.categories.map((categorie, index) => {
                  return <li key={index}><a href="">{categorie}</a></li>
                })}
              </ul>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Navbar
