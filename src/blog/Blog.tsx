export default function Blog() {
  return (
    <>
      <body className="bg-gray-100 dark:bg-gray-800">
        <header className="bg-white dark:bg-gray-900 shadow">
          <div className="container mx-auto px-6 py-2 flex items-center justify-between">
            <a
              className="font-bold text-2xl lg:text-4xl text-gray-800 dark:text-white"
              href="#"
            >
              Daniel Escoto
            </a>
            <nav className="space-x-4">
              <a
                className="font-bold text-lg text-gray-800 dark:text-gray-200 hover:text-gray-700 dark:hover:text-gray-400"
                href="#"
              >
                Home
              </a>
              <a
                className="font-bold text-lg text-gray-800 dark:text-gray-200 hover:text-gray-700 dark:hover:text-gray-400"
                href="#"
              >
                Blog
              </a>
              <a
                className="font-bold text-lg text-gray-800 dark:text-gray-200 hover:text-gray-700 dark:hover:text-gray-400"
                href="#"
              >
                Projects
              </a>
              <a
                className="font-bold text-lg text-gray-800 dark:text-gray-200 hover:text-gray-700 dark:hover:text-gray-400"
                href="#"
              >
                About
              </a>
            </nav>
          </div>
        </header>
        <section className="container mx-auto px-6 py-8">
          <h3 className="text-gray-700 dark:text-gray-200 text-2xl font-medium">
            Blog
          </h3>
          <div className="mt-4">
            <div className="flex items-center">
              <div className="text-sm text-gray-500 font-semibold">
                <time dateTime="2021-01-01">January 1, 2021</time>
              </div>
            </div>
          </div>
        </section>
      </body>
      <footer className="bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-6 py-4 flex flex-col md:flex-row items-center">
          {/* Daniel Escoto */}
          <p className="text-center text-gray-500 dark:text-gray-400">
            Made with ❤️ by Daniel Escoto
          </p>
        </div>
      </footer>
    </>
  );
}
