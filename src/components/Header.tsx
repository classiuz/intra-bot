import Icon from './Icon'
import { MdAssignmentTurnedIn } from 'react-icons/md'

const Header = () => {
  return (
    <header className="flex flex-row justify-between items-center bg-gradient-to-r from-violet-800 to-purple-900 p-3 shadow-md">
      <div className="flex flex-row justify-end w-1/4">
        <div className="flex flex-row place-items-center text-3xl text-white font-bold tracking-wide">
          <span>INTRANET B</span>
          <MdAssignmentTurnedIn />
          <span>T</span>
        </div>
      </div>
      <div className="flex flex-row justify-start w-1/4">
        <a
          className="text-xl tracking-wide px-4 py-1 hover:cursor-pointer hover:text-white hover:bg-purple-700 hover:rounded-md hover:shadow-md"
          href="https://discord.com"
          target="_blank"
        >
          <Icon direction="left" text="Discord" icon="Discord" />
        </a>
        <a
          className="text-xl tracking-wide px-4 py-1 hover:cursor-pointer hover:text-white hover:bg-purple-700 hover:rounded-md hover:shadow-md"
          href="https://docs.google.com/forms/d/e/1FAIpQLSc_7mvUs8cNSjY-3mbO4hmBb1dGGBxdIeIcxEYzlemkkAa71g/viewform"
          target="_blank"
        >
          <Icon direction="left" text="Gestiones" icon="Forms" />
        </a>
      </div>
    </header>
  )
}

export default Header
