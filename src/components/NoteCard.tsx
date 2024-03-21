export function NoteCard() {
  return (
    <button className="rounded-md text-left bg-slate-800 p-5 space-y-3 overflow-hidden relative outline-none hover:ring-2 hover:ring-slate-600 focus-visible:ring-2 focus-visible:ring-lime-400">
      <span className="text-sm font-medium text-slate-300">Há 2 dias</span>
      <p className="text-sm leading-6 text-slate-400">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum optio
        minus itaque! Dolor sed odit quae exercitationem eius sunt id qui esse
        earum molestias a facere, obcaecati iste fugit. Fugiat. Lorem, ipsum
        dolor sit amet consectetur adipisicing elit. Quos exercitationem nulla
        corrupti fugit quidem nisi minus eligendi, ut, dolorem facilis sed at,
        odio porro cupiditate fugiat recusandae odit! Dolor, suscipit.
      </p>

      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0 pointer-events-none" />
    </button>
  )
}
