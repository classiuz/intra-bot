import './LinkList.css'
import { useState, useEffect } from 'react'
import linksData from '../data/links.json'
import { Links } from '../resources/interfaces'
import { FaLink, FaExternalLinkAlt } from 'react-icons/fa'

const LinkList = () => {
  const [links, setLinks] = useState<Links[]>([])
  const [status, setStatus] = useState(-1)
  useEffect(() => setLinks(linksData), [])

  return (
    <div className="link-list">
      <div className="row gap title mb-1 mt-4">
        <FaLink />
        <span>LINKS ÚTILES</span>
      </div>
      <div className="col gap links">
        {links.map((link, index) => {
          return (
            <a
              key={index}
              href={link.url}
              target="_blank"
              onMouseEnter={() => setStatus(index)}
              onMouseLeave={() => setStatus(-1)}
            >
              {link.name}
              <span
                className={`icon ${status == index ? 'visible' : 'hidden'}`}
              >
                <FaExternalLinkAlt />
              </span>
            </a>
          )
        })}
      </div>
    </div>
  )
}

export default LinkList
