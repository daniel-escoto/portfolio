export default function Hero() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="text-left space-y-3 max-w-2xl w-full">
        <h1 className="text-4xl sm:text-5xl font-normal tracking-tight text-gray-900 dark:text-white">
          Daniel Escoto
        </h1>
        <p className="text-sm sm:text-base text-gray-500 dark:text-gray-500">
          Founding Engineer at{" "}
          <a
            href="https://www.shopgarage.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-600 dark:text-orange-500 hover:text-orange-700 dark:hover:text-orange-400 transition-colors"
          >
            Garage
          </a>
        </p>
      </div>
    </div>
  );
}
