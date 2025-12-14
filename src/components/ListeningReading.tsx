import { useState } from "react";

interface MusicItem {
  title: string;
  artist: string;
  coverImage: string;
}

interface BookItem {
  title: string;
  author: string;
  coverImage: string;
}

const listeningData: MusicItem[] = [
  {
    title: "Skin",
    artist: "Aleksandir",
    coverImage:
      "https://m.media-amazon.com/images/I/61Lzj5UiMWL._UX716_FMwebp_QL85_.jpg",
  },
  {
    title: "Smoke Sessions, Vol.2",
    artist: "Lord Apex",
    coverImage:
      "https://m.media-amazon.com/images/I/3157Mdx4MVL._UX716_FMwebp_QL85_.jpg",
  },
  {
    title: "You Will Never Know Why",
    artist: "Sweet Trip",
    coverImage:
      "https://m.media-amazon.com/images/I/41QxxugqVPL._UX716_FMwebp_QL85_.jpg",
  },
  {
    title: "Peripheral Vision",
    artist: "Turnover",
    coverImage:
      "https://m.media-amazon.com/images/I/61sVwFM1APS._UX716_FMwebp_QL85_.jpg",
  },
  {
    title: "The Life Of Pi'erre 4",
    artist: "Pi'erre Bourne",
    coverImage:
      "https://m.media-amazon.com/images/I/21LfBzMonsL._UX716_FMwebp_QL85_.jpg",
  },
  {
    title: "The Life Of Pablo",
    artist: "Kanye West",
    coverImage:
      "https://m.media-amazon.com/images/I/61Qgl45ZaeL._UX716_FMwebp_QL85_.jpg",
  },
];

const readingData: BookItem[] = [
  {
    title: "Fluent Forever",
    author: "Gabriel Wyner",
    coverImage: "https://m.media-amazon.com/images/I/611gisKfUpL._SY522_.jpg",
  },
  {
    title: "Grant",
    author: "Ron Chernow",
    coverImage:
      "https://m.media-amazon.com/images/I/41SGRZQeumL._SY445_SX342_QL70_FMwebp_.jpg",
  },
  {
    title: "The Road",
    author: "Cormac McCarthy",
    coverImage: "https://m.media-amazon.com/images/I/71oj0fEXMTL._SY522_.jpg",
  },
  {
    title: "The Things They Carried",
    author: "Tim O'Brien",
    coverImage: "https://m.media-amazon.com/images/I/7185Yxp5cOL._SY522_.jpg",
  },
  {
    title: "The Baseball 100",
    author: "Joe Posnanski",
    coverImage: "https://m.media-amazon.com/images/I/51wAj2lO3fL._SY522_.jpg",
  },
  {
    title: "The Stranger",
    author: "Albert Camus",
    coverImage:
      "https://m.media-amazon.com/images/I/41elPDenHHL._SY445_SX342_QL70_FMwebp_.jpg",
  },
];

export default function ListeningReading() {
  const [activeTab, setActiveTab] = useState<"listening" | "reading">(
    "listening"
  );

  return (
    <div className="flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <div className="max-w-2xl w-full">
        {/* Subheader */}
        <h2 className="text-2xl sm:text-3xl font-normal tracking-tight text-gray-900 dark:text-white mb-6">
          Listening & Reading
        </h2>
        {/* Tab Navigation */}
        <div className="flex space-x-6 mb-8 border-b border-gray-200 dark:border-gray-800">
          <button
            onClick={() => setActiveTab("listening")}
            className={`pb-3 text-sm sm:text-base font-medium transition-colors ${
              activeTab === "listening"
                ? "text-gray-900 dark:text-white border-b-2 border-gray-900 dark:border-white"
                : "text-gray-500 dark:text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
            }`}
          >
            Listening
          </button>
          <button
            onClick={() => setActiveTab("reading")}
            className={`pb-3 text-sm sm:text-base font-medium transition-colors ${
              activeTab === "reading"
                ? "text-gray-900 dark:text-white border-b-2 border-gray-900 dark:border-white"
                : "text-gray-500 dark:text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
            }`}
          >
            Reading
          </button>
        </div>

        {/* Content Grid */}
        {activeTab === "listening" ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
            {listeningData.map((item, index) => (
              <div
                key={index}
                className="group transition-transform hover:scale-105"
              >
                <div className="aspect-square mb-2 rounded overflow-hidden bg-gray-100 dark:bg-gray-900">
                  <img
                    src={item.coverImage}
                    alt={`${item.title} by ${item.artist}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-sm font-medium text-gray-900 dark:text-white truncate">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-500 truncate">
                  {item.artist}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
            {readingData.map((item, index) => (
              <div
                key={index}
                className="group transition-transform hover:scale-105"
              >
                <div className="aspect-[2/3] mb-2 rounded overflow-hidden bg-gray-100 dark:bg-gray-900">
                  <img
                    src={item.coverImage}
                    alt={`${item.title} by ${item.author}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-sm font-medium text-gray-900 dark:text-white truncate">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-500 truncate">
                  {item.author}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
