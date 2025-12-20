/**
 * Utility functions to fetch cover images for books and albums
 */

export interface BookSearchResult {
  title: string;
  author: string;
  coverImage: string;
}

export interface AlbumSearchResult {
  title: string;
  artist: string;
  coverImage: string;
}

/**
 * Fetches book data from Google Books API
 */
export async function fetchBookData(
  searchQuery: string
): Promise<BookSearchResult | null> {
  try {
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(
        searchQuery
      )}&maxResults=1`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch from Google Books API");
    }

    const data = await response.json();

    if (data.items && data.items.length > 0) {
      const book = data.items[0].volumeInfo;
      // Try to get the largest available image
      const coverImage =
        book.imageLinks?.large ||
        book.imageLinks?.medium ||
        book.imageLinks?.small ||
        book.imageLinks?.thumbnail;

      if (coverImage && book.title && book.authors && book.authors.length > 0) {
        // Replace http with https and remove size restrictions
        const cleanCoverImage = coverImage
          .replace(/^http:/, "https:")
          .replace(/&zoom=\d+/, "");

        return {
          title: book.title,
          author: book.authors[0], // Use first author
          coverImage: cleanCoverImage,
        };
      }
    }

    return null;
  } catch (error) {
    console.error("Error fetching book data:", error);
    return null;
  }
}

/**
 * Fetches album data from iTunes API (free, no auth required)
 */
export async function fetchAlbumData(
  searchQuery: string
): Promise<AlbumSearchResult | null> {
  try {
    const response = await fetch(
      `https://itunes.apple.com/search?term=${encodeURIComponent(
        searchQuery
      )}&entity=album&limit=1`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch from iTunes API");
    }

    const data = await response.json();

    if (data.results && data.results.length > 0) {
      const album = data.results[0];
      // Get the largest available artwork (100x100, 300x300, or 600x600)
      // Replace 100x100 with 600x600 for better quality
      const artworkUrl = album.artworkUrl100?.replace("100x100", "600x600");
      if (artworkUrl && album.collectionName && album.artistName) {
        return {
          title: album.collectionName,
          artist: album.artistName,
          coverImage: artworkUrl,
        };
      }
    }

    return null;
  } catch (error) {
    console.error("Error fetching album data:", error);
    return null;
  }
}
