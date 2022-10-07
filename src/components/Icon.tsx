import { FaLink, FaExternalLinkAlt, FaDiscord, FaCopy, FaEraser, FaClipboardList, FaHome, FaSadCry, FaTrashAlt, FaEdit, FaTasks } from 'react-icons/fa'
import { MdFormatAlignCenter, MdLibraryBooks, MdLibraryAdd } from 'react-icons/md'

const icons = [
  {
    name: "Home",
    icon: <FaHome />
  },
  {
    name: "Error",
    icon: <FaSadCry />
  },
  {
    name: "Edit",
    icon: <FaEdit />
  },
  {
    name: "Delete",
    icon: <FaTrashAlt />
  },
  {
    name: "Tasks",
    icon: <FaTasks />
  },
  {
    name: "Categorie",
    icon: <MdLibraryBooks />
  },
  {
    name: "AddCategorie",
    icon: <MdLibraryAdd />
  },
  {
    name: "Link",
    icon: <FaLink />
  },
  {
    name: "ExternalLink",
    icon: <FaExternalLinkAlt />
  },
  {
    name: "Discord",
    icon: <FaDiscord />
  },
  {
    name: "Forms",
    icon: <MdFormatAlignCenter />
  },
  {
    name: "Notes",
    icon: <FaClipboardList />
  },
  {
    name: "Copy",
    icon: <FaCopy />
  },
  {
    name: "Clear",
    icon: <FaEraser />
  }
]

interface IconProps {
  direction?: 'left' | 'right'
  text?: string
  icon: string
  className?: string
}

const Icon = ({ direction, text, icon, className }: IconProps) => {
  let toRender = icons.find(i => i.name === icon)
  return (
    <p className={`flex ${direction === 'left' ? 'flex-row' : 'flex-row-reverse'} place-items-center`}>
      <span className={`${direction === 'left' ? 'mr-1' : 'ml-1'} ${className ?? ''}`}>{toRender?.icon}</span>
      {text}
    </p>
  )
}

export default Icon
