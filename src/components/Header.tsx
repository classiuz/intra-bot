import './Header.css'
import { FaDiscord } from 'react-icons/fa'
import { MdFormatAlignCenter, MdAssignmentTurnedIn } from 'react-icons/md'

const Header = () => {
  return (
    <header className="row j-center a-center wth-100">
      <div className="row j-start wth-35">
        <div className="logo">
          <span>INTRANET B</span><MdAssignmentTurnedIn /><span>T</span>
        </div>
      </div>
      <div className="row j-end wth-35">
        <a className="link" href="https://discord.com" target="_blank">
          <FaDiscord />
          <span>Discord</span>
        </a>
        <a
          className="link"
          href="https://docs.google.com/forms/d/e/1FAIpQLSc_7mvUs8cNSjY-3mbO4hmBb1dGGBxdIeIcxEYzlemkkAa71g/viewform"
          target="_blank"
        >
          <MdFormatAlignCenter />
          <span>Gestiones</span>
        </a>
      </div>
    </header>
  )
}

export default Header
