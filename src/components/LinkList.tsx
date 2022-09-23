import "./LinkList.css"
import { useState, useEffect } from 'react'
import linksData from '../data/links.json'
import { linksInterface } from '../resources/interfaces'
import { FaLink, FaExternalLinkAlt } from 'react-icons/fa'

const LinkList = () => {
  const [links, setLinks] = useState<linksInterface[]>([])
  useEffect(() => setLinks(linksData), [])

  return (
    <div className="link-list">
      <div className="row gap title mb-1">
        <FaLink />
        <span>LINKS ÚTILES</span>
      </div>
      <div className="col gap links">
        {links.map((link, index) => {
          return (
            <a
              href={link.url}
              target="_blank"
              key={index}
              onMouseEnter={(e) =>
                (e.target as HTMLElement)
                  .querySelector('span')
                  ?.classList.remove('hidden')
              }
              onMouseLeave={(e) =>
                (e.target as HTMLElement)
                  .querySelector('span')
                  ?.classList.add('hidden')
              }
            >
              {link.name}
              <span className="icon hidden">
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
