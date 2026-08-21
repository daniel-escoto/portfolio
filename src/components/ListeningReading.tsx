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
        <h2
          className="text-2xl sm:text-3xl font-normal tracking-tight mb-6 transition-colors duration-700"
          style={{ color: "var(--hour-text)" }}
        >
          My Library
        </h2>
        <div
          className="flex space-x-6 mb-8 border-b transition-colors duration-700"
          style={{ borderColor: "var(--hour-border)" }}
        >
          <button
            onClick={() => setActiveTab("listening")}
            className="pb-3 text-sm sm:text-base font-medium transition-colors duration-700"
            style={{
              color:
                activeTab === "listening"
                  ? "var(--hour-text)"
                  : "var(--hour-muted)",
              borderBottom:
                activeTab === "listening"
                  ? "2px solid var(--hour-text)"
                  : "2px solid transparent",
            }}
          >
            Listening
          </button>
          <button
            onClick={() => setActiveTab("reading")}
            className="pb-3 text-sm sm:text-base font-medium transition-colors duration-700"
            style={{
              color:
                activeTab === "reading"
                  ? "var(--hour-text)"
                  : "var(--hour-muted)",
              borderBottom:
                activeTab === "reading"
                  ? "2px solid var(--hour-text)"
                  : "2px solid transparent",
            }}
          >
            Reading
          </button>
        </div>

        {activeTab === "listening" ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
            {listeningData.map((item, index) => (
              <div
                key={index}
                className="group transition-transform hover:scale-105"
              >
                <div
                  className="aspect-square mb-2 rounded overflow-hidden transition-colors duration-700"
                  style={{ backgroundColor: "var(--hour-surface)" }}
                >
                  <img
                    src={item.coverImage}
                    alt={`${item.title} by ${item.artist}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3
                  className="text-sm font-medium truncate transition-colors duration-700"
                  style={{ color: "var(--hour-text)" }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-xs truncate transition-colors duration-700"
                  style={{ color: "var(--hour-muted)" }}
                >
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
                <div
                  className="aspect-2/3 mb-2 rounded overflow-hidden transition-colors duration-700"
                  style={{ backgroundColor: "var(--hour-surface)" }}
                >
                  <img
                    src={item.coverImage}
                    alt={`${item.title} by ${item.author}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3
                  className="text-sm font-medium truncate transition-colors duration-700"
                  style={{ color: "var(--hour-text)" }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-xs truncate transition-colors duration-700"
                  style={{ color: "var(--hour-muted)" }}
                >
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
