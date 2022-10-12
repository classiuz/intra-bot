import {
  FaLink,
  FaExternalLinkAlt,
  FaDiscord,
  FaCopy,
  FaEraser,
  FaClipboardList,
  FaHome,
  FaSadCry,
  FaTrashAlt,
  FaEdit,
  FaTasks,
  FaHashtag,
} from 'react-icons/fa'
import {
  MdFormatAlignCenter,
  MdLibraryBooks,
  MdLibraryAdd,
  MdClose,
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from 'react-icons/md'

const icons = [
  {
    name: 'Home',
    icon: <FaHome />,
  },
  {
    name: 'Error',
    icon: <FaSadCry />,
  },
  {
    name: 'Edit',
    icon: <FaEdit />,
  },
  {
    name: 'Delete',
    icon: <FaTrashAlt />,
  },
  {
    name: 'Next',
    icon: <MdOutlineArrowForwardIos />,
  },
  {
    name: 'Prev',
    icon: <MdOutlineArrowBackIos />,
  },
  {
    name: 'Close',
    icon: <MdClose />,
  },
  {
    name: 'Tasks',
    icon: <FaTasks />,
  },
  {
    name: 'Categorie',
    icon: <MdLibraryBooks />,
  },
  {
    name: 'AddCategorie',
    icon: <MdLibraryAdd />,
  },
  {
    name: 'Link',
    icon: <FaLink />,
  },
  {
    name: 'Hashtag',
    icon: <FaHashtag />,
  },
  {
    name: 'ExternalLink',
    icon: <FaExternalLinkAlt />,
  },
  {
    name: 'Discord',
    icon: <FaDiscord />,
  },
  {
    name: 'Forms',
    icon: <MdFormatAlignCenter />,
  },
  {
    name: 'Notes',
    icon: <FaClipboardList />,
  },
  {
    name: 'Copy',
    icon: <FaCopy />,
  },
  {
    name: 'Clear',
    icon: <FaEraser />,
  },
]

interface Props {
  direction?: 'left' | 'right'
  text?: string
  icon: string
  className?: string
}

const Icon = ({ direction, text, icon, className }: Props) => {
  const iconToRender = icons.find((i) => i.name === icon).icon
  return (
    <p className={`flex ${direction === 'left' ? 'flex-row' : 'flex-row-reverse'} place-items-center`}>
      <span className={`${direction === 'left' ? 'mr-1' : 'ml-1'} ${className ?? ''}`}>{iconToRender}</span>
      {text}
    </p>
  )
}

export default Icon
