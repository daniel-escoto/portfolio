import { useState } from "react";
import listeningDataJson from "../data/listening.json";
import readingDataJson from "../data/reading.json";

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

const listeningData = listeningDataJson as MusicItem[];
const readingData = readingDataJson as BookItem[];

export default function ListeningReading() {
  const [activeTab, setActiveTab] = useState<"listening" | "reading">(
    "listening"
  );

  return (
    <div
      id="library"
      className="flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12 sm:py-16"
    >
      <div className="max-w-2xl w-full">
        {/* Subheader */}
        <h2 className="text-2xl sm:text-3xl font-normal tracking-tight text-gray-900 dark:text-white mb-6">
          My Library
        </h2>
        {/* Tab Navigation */}
        <div className="flex space-x-6 mb-8 border-b border-gray-200 dark:border-gray-800">
          <button
            onClick={() => setActiveTab("listening")}
            className={`pb-3 text-sm sm:text-base font-medium transition-colors ${
              activeTab === "listening"
                ? "text-gray-900 dark:text-white border-b-2 border-gray-900 dark:border-white"
                : "text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-200"
            }`}
          >
            Listening
          </button>
          <button
            onClick={() => setActiveTab("reading")}
            className={`pb-3 text-sm sm:text-base font-medium transition-colors ${
              activeTab === "reading"
                ? "text-gray-900 dark:text-white border-b-2 border-gray-900 dark:border-white"
                : "text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-200"
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
                <p className="text-xs text-gray-500 dark:text-gray-300 truncate">
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
                <div className="aspect-2/3 mb-2 rounded overflow-hidden bg-gray-100 dark:bg-gray-900">
                  <img
                    src={item.coverImage}
                    alt={`${item.title} by ${item.author}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-sm font-medium text-gray-900 dark:text-white truncate">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-300 truncate">
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
