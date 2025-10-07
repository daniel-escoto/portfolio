export const TerminalHeader = () => (
  <div className="flex items-center justify-between border-b border-slate-800 bg-[#131821] px-4 py-3">
    <div className="flex items-center gap-2">
      <span className="h-3 w-3 rounded-full bg-red-500" />
      <span className="h-3 w-3 rounded-full bg-amber-400" />
      <span className="h-3 w-3 rounded-full bg-emerald-400" />
    </div>
    <p className="text-xs text-slate-400 sm:text-sm">danielescoto - terminal ~/Desktop/dev</p>
  </div>
);
