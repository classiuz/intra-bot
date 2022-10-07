import { useState, useEffect } from 'react'
import linksData from '../data/links.json'
import { Links } from '../resources/interfaces'
import Icon from './Icon'

const LinkList = () => {
  const [links, setLinks] = useState<Links[]>([])
  const [status, setStatus] = useState(-1)
  useEffect(() => setLinks(linksData), [])

  return (
    <div className="links flex flex-col gap-4">
      <div className="text-[24px] font-bold tracking-[0.4px]">
        <Icon direction="left" text="LINKS ÚTILES" icon="Link" />
      </div>
      <div className="flex flex-col gap-2 items-start">
        {links.map((link, index) => {
          return (
            <a
              key={index}
              href={link.url}
              target="_blank"
              onMouseEnter={() => setStatus(index)}
              onMouseLeave={() => setStatus(-1)}
              className="hover:text-violet-600"
            >
              <Icon
                direction="right"
                text={link.name}
                icon="ExternalLink"
                className={`text-sm mb-1 ${status == index ? 'visible' : 'hidden'}`}
              />
            </a>
          )
        })}
      </div>
    </div>
  )
}

export default LinkList
