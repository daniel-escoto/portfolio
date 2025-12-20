import { useState } from "react";
import {
  fetchBookData,
  fetchAlbumData,
  type BookSearchResult,
  type AlbumSearchResult,
} from "../utils/fetchCovers";

/**
 * Admin component to easily add books and albums with automatic cover image fetching
 * This can be conditionally rendered in development mode
 */
export default function MediaAdmin() {
  const [type, setType] = useState<"book" | "album">("album");
  const [searchQuery, setSearchQuery] = useState("");
  const [fetchedData, setFetchedData] = useState<
    BookSearchResult | AlbumSearchResult | null
  >(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string>("");

  const handleSearch = async () => {
    if (!searchQuery.trim()) return;

    setLoading(true);
    setResult("");
    setFetchedData(null);

    try {
      let data: BookSearchResult | AlbumSearchResult | null = null;

      if (type === "book") {
        data = await fetchBookData(searchQuery);
      } else {
        data = await fetchAlbumData(searchQuery);
      }

      if (data) {
        setFetchedData(data);
        generateJSON(data);
      } else {
        setResult("❌ Could not find results. Try a different search query.");
      }
    } catch (error) {
      setResult(
        `❌ Error: ${error instanceof Error ? error.message : "Unknown error"}`
      );
    } finally {
      setLoading(false);
    }
  };

  const generateJSON = (data: BookSearchResult | AlbumSearchResult) => {
    setResult(
      `✅ Found! Copy this JSON entry:\n\n${JSON.stringify(data, null, 2)}`
    );
  };

  // Only show in development (you can add a check for process.env.NODE_ENV === 'development')
  return (
    <div className="max-w-2xl mx-auto p-6 bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 mb-8">
      <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
        Add {type === "book" ? "Book" : "Album"}
      </h3>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Type
          </label>
          <div className="flex space-x-4">
            <button
              onClick={() => setType("album")}
              className={`px-4 py-2 rounded ${
                type === "album"
                  ? "bg-gray-900 dark:bg-white text-white dark:text-gray-900"
                  : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
              }`}
            >
              Album
            </button>
            <button
              onClick={() => setType("book")}
              className={`px-4 py-2 rounded ${
                type === "book"
                  ? "bg-gray-900 dark:bg-white text-white dark:text-gray-900"
                  : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
              }`}
            >
              Book
            </button>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Search
          </label>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !loading && searchQuery.trim()) {
                handleSearch();
              }
            }}
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
            placeholder={
              type === "book"
                ? "e.g., 'The Road Cormac McCarthy' or just 'The Road'"
                : "e.g., 'Turn On The Bright Lights Interpol' or just 'Interpol Turn On The Bright Lights'"
            }
          />
          <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
            Enter{" "}
            {type === "book"
              ? "book title and/or author"
              : "album title and/or artist"}
          </p>
        </div>

        <button
          onClick={handleSearch}
          disabled={loading || !searchQuery.trim()}
          className="w-full px-4 py-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded font-medium disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? "Searching..." : "Search & Fetch"}
        </button>

        {fetchedData && (
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Preview
            </label>
            <div className="flex items-start gap-4">
              <img
                src={fetchedData.coverImage}
                alt="Cover preview"
                className="w-32 h-32 object-cover rounded border border-gray-300 dark:border-gray-600 flex-shrink-0"
              />
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900 dark:text-white">
                  {fetchedData.title}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-300 mt-1">
                  {"author" in fetchedData
                    ? fetchedData.author
                    : fetchedData.artist}
                </p>
              </div>
            </div>
          </div>
        )}

        {result && (
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Result
            </label>
            <pre className="p-4 bg-gray-100 dark:bg-gray-800 rounded border border-gray-300 dark:border-gray-600 text-sm text-gray-900 dark:text-white whitespace-pre-wrap overflow-x-auto">
              {result}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
}
