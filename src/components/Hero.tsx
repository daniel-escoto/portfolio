export default function Hero() {
  return (
    <div className="min-h-screen flex items-center justify-start px-4 sm:px-6 lg:px-8">
      <div className="text-left space-y-6 max-w-4xl">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-gray-900 dark:text-white">
          Daniel Escoto
        </h1>
        <p className="text-base sm:text-lg text-gray-500 dark:text-gray-500">
          Founding Engineer at{" "}
          <a
            href="https://www.shopgarage.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-orange-600 dark:text-orange-500 hover:text-orange-700 dark:hover:text-orange-400 transition-colors underline"
          >
            Garage
          </a>
        </p>
      </div>
    </div>
  );
}
