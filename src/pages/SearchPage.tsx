import { useState } from "react";
import SearchBar from "../components/SearchBar";
import AmiiboCard from "../components/AmiiboCard";

/**
 * 
 * Created By Jason Kim 
 * 
 * @file SearchPage.tsx
 * @description This file contains the SearchPage component which allows users to search for Amiibos using the Amiibo API.
 * The component manages the search query, results, loading state, and error state.
 */

/**
 * SearchPage component
 * @returns {JSX.Element} The rendered SearchPage component.
 */
function SearchPage() {
  const [query, setQuery] = useState(""); // State to store the search query input by the user
  const [results, setResults] = useState([]); // State to store the search results fetched from the API
  const [loading, setLoading] = useState(false); // State to indicate whether the search is in progress
  const [error, setError] = useState(""); // State to store any error messages

  /**
   * Handles the search operation by fetching data from the Amiibo API.
   * Validates the query, sets loading state, and updates results or error state based on the API response.
   */
  const handleSearch = () => {
    if (query.trim() === "") { // Check if the query is empty or only contains whitespace
      setError("Please enter a valid search query.");
      return;
    }

    setLoading(true); // Set loading state to true while fetching data
    setError(""); // Clear any previous error messages
    fetch(`https://www.amiiboapi.com/api/amiibo/?name=${query}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.amiibo && data.amiibo.length > 0) { // Check if the API returned any results
          setResults(data.amiibo); // Update results state with the fetched data
        } else {
          setResults([]); // Clear results if no data was found
          setError("No results found."); // Set error message if no results were found
        }
        setLoading(false); // Set loading state to false after fetching data
      })
      .catch(() => {
        setLoading(false); // Set loading state to false if an error occurred
        setError("An error occurred while fetching data."); // Set error message if an error occurred
      });
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4 text-center" style={{ fontFamily: 'Comic Sans MS' }}>
        Search <span className="text-blue-500">Amiibos</span>
      </h1>
      <SearchBar query={query} setQuery={setQuery} /> {/* SearchBar component to input search query */}
      <div className="flex justify-center">
        <button
          onClick={handleSearch}
          className="bg-blue-500 text-white px-4 py-2 mt-4 rounded" style={{ fontFamily: 'Comic Sans MS' }}
        >
          Search
        </button>
      </div>
      {loading ? (
        <p className="text-center mt-4 text-blue-500" style={{ fontFamily: 'Comic Sans MS' }}>Loading results...</p> // Display loading message while fetching data
      ) : error ? (
        <p className="text-center mt-4 text-red-500" style={{ fontFamily: 'Comic Sans MS' }}>{error}</p> // Display error message if an error occurred
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {results.map((amiibo: any) => (
            <AmiiboCard
              key={amiibo.head} // Unique key for each AmiiboCard component
              name={amiibo.name}
              image={amiibo.image}
              series={amiibo.amiiboSeries}
              type={amiibo.type}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchPage;


/*
*
* Created By Jason Kim 
*
*/