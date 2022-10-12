import { useState } from 'react'
import Icon from './Icon'

const Notes = () => {
  const [notes, setNotes] = useState('')

  return (
    <div className="notes flex flex-col gap-4">
      <div className="text-[24px] font-bold tracking-[0.4px]">
        <Icon direction="left" text="BLOC DE NOTAS" icon="Notes" />
      </div>
      <textarea
        className="bg-[#1e1e1e] shadow-xl rounded-lg resize-none border-none cursor-auto p-4 text-sm w-full h-[30em] placeholder:italic placeholder:text-neutral-400"
        onChange={(e) => setNotes(e.target.value)}
        placeholder="Escribir una nota..."
        value={notes}
      />
      <div className="flex flex-row justify-center items-center gap-3">
        <button className="rounded-md px-3 py-1 bg-violet-600 hover:bg-violet-800" onClick={() => setNotes('')}>
          <Icon direction="left" text="Limpiar" icon="Clear" />
        </button>
        <button
          className="rounded-md px-3 py-1 bg-violet-600 hover:bg-violet-800"
          onClick={() => navigator.clipboard.writeText(notes)}
        >
          <Icon direction="left" text="Copiar" icon="Copy" />
        </button>
      </div>
    </div>
  )
}

export default Notes
