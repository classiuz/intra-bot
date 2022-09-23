import { useState } from 'react'
import { FaClipboardList, FaEraser, FaCopy } from 'react-icons/fa'

const Notes = () => {
  const [note, setNote] = useState('')

  return (
    <div>
      <div className="row gap title mb-1">
        <FaClipboardList />
        <span>BLOC DE NOTAS</span>
      </div>
      <textarea
        placeholder="Escribir una nota..."
        value={note}
        onChange={(e) => setNote(e.target.value)}
      />
      <div className="row j-center a-center gap mt">
        <button className="row a-center gap" onClick={() => setNote('')}>
          <FaEraser />
          <span>Limpiar</span>
        </button>
        <button
          className="row a-center gap"
          onClick={() => navigator.clipboard.writeText(note)}
        >
          <FaCopy />
          <span>Copiar</span>
        </button>
      </div>
    </div>
  )
}

export default Notes
