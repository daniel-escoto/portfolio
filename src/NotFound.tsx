export default function NotFound() {
  return (
    <div className="min-h-screen w-full bg-[#050709] px-4 py-10 font-mono text-slate-200">
      <div className="mx-auto max-w-3xl border border-slate-800 bg-[#0b1018] p-8">
        <p className="text-sm text-slate-500">command not found</p>
        <h1 className="mt-6 text-4xl text-emerald-300">404</h1>
        <p className="mt-4 text-sm text-slate-300">
          Requested route does not exist. Return to the main terminal session to continue.
        </p>
        <div className="mt-8">
          <a
            href="/"
            className="inline-block border border-slate-700 bg-[#050709] px-4 py-2 text-sm text-slate-300 transition-colors hover:border-emerald-400 hover:text-emerald-300"
          >
            cd ~/Desktop/dev
          </a>
        </div>
      </div>
    </div>
  );
}
