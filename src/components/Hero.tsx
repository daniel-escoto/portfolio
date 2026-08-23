export default function Hero() {
  return (
    <div
      id="hero"
      className="flex min-h-0 w-full max-w-2xl flex-col justify-end self-center px-4 pb-[max(2.5rem,env(safe-area-inset-bottom))] [@media(max-height:700px)]:pb-[max(2rem,calc(env(safe-area-inset-bottom,0px)+3.5rem))] sm:px-6 lg:px-8"
    >
      <div className="w-full">
        <div className="flex items-center gap-3">
          <h1
            className="text-4xl font-normal tracking-tight transition-colors duration-700 sm:text-5xl"
            style={{ color: "var(--hour-text)" }}
          >
            Daniel Escoto
          </h1>
          <a
            href="https://www.linkedin.com/in/danescoto/"
            target="_blank"
            rel="noopener noreferrer"
            className="hour-accent-hover shrink-0 transition-colors duration-700"
            style={{ color: "var(--hour-muted)" }}
            aria-label="LinkedIn"
          >
            <svg
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
        </div>
        <p
          className="mt-3 text-sm transition-colors duration-700 sm:text-base"
          style={{ color: "var(--hour-muted)" }}
        >
          Currently automating my fantasy baseball team.
        </p>
      </div>
    </div>
  );
}
