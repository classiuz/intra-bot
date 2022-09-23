import './Notes.css'
import { useState } from 'react'
import { FaClipboardList, FaEraser, FaCopy } from 'react-icons/fa'

const Notes = () => {
  const [Notes, setNotes] = useState('')

  return (
    <div className="notes">
      <div className="row gap title mb-1">
        <FaClipboardList />
        <span>BLOC DE NOTAS</span>
      </div>
      <textarea
        placeholder="Escribir una nota..."
        value={Notes}
        onChange={(e) => setNotes(e.target.value)}
      />
      <div className="row j-center a-center gap mt">
        <button className="row a-center gap" onClick={() => setNotes('')}>
          <FaEraser />
          <span>Limpiar</span>
        </button>
        <button
          className="row a-center gap"
          onClick={() => navigator.clipboard.writeText(Notes)}
        >
          <FaCopy />
          <span>Copiar</span>
        </button>
      </div>
    </div>
  )
}

export default Notes
