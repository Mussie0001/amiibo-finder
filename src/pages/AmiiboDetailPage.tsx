/**
 * @file AmiiboDetailPage.tsx
 * @description This file contains the AmiiboDetailPage component which fetches and displays detailed information 
 * about a specific Amiibo character using the Amiibo API. It utilizes React hooks for state management and navigation
 * via URL parameters.
 * 
 * Created by: Martín Herguedas
 * BU ID: U71416128
 */

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

/**
 * AmiiboDetailPage Component
 * 
 * This component is designed to fetch details of an Amiibo character based on the `name` parameter from the URL.
 * It communicates with the Amiibo API, displays a loading state during the data fetch process, handles errors, 
 * and presents the Amiibo's details in a styled card format.
 * 
 * @returns {JSX.Element} A rendered component that displays Amiibo details or appropriate error/loading messages.
 */
function AmiiboDetailPage() {
  // Extract the 'name' parameter from the URL using `useParams` from react-router-dom
  const { name } = useParams<{ name: string }>();

  // State variable to store the fetched Amiibo data
  const [amiibo, setAmiibo] = useState<any>(null);

  // State variable to handle the loading state
  const [loading, setLoading] = useState(true);

  /**
   * useEffect Hook
   * 
   * Fetches the Amiibo data when the component is mounted or the `name` parameter changes.
   * The API is queried with the Amiibo name extracted from the URL.
   */
  useEffect(() => {
    if (name) {
      // API request to fetch Amiibo data based on the name parameter
      fetch(`https://www.amiiboapi.com/api/amiibo/?name=${name}`)
        .then((res) => res.json()) // Parse the JSON response
        .then((data) => {
          // Check if valid Amiibo data is returned
          if (data.amiibo && data.amiibo.length > 0) {
            setAmiibo(data.amiibo[0]); // Set the first result in the state
          }
          setLoading(false); // Set loading to false after data is processed
        });
    }
  }, [name]);

  // Display a loading message while waiting for the API response
  if (loading) {
    return (
      <div
        className="text-center text-xl text-blue-500"
        style={{ fontFamily: 'Comic Sans MS' }}
      >
        Loading details...
      </div>
    );
  }

  // Display a message if no Amiibo is found
  if (!amiibo) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="bg-white shadow-lg rounded-lg p-8 max-w-md text-center">
          <p className="text-xl">Amiibo not found. Please try again.</p>
        </div>
      </div>
    );
  }

  // Render the fetched Amiibo details
  return (
    <div className="flex justify-center items-center min-h-screen px-4">
      {/* Card container for Amiibo details */}
      <div
        className="bg-white shadow-lg rounded-lg p-8 max-w-2xl"
        style={{ fontFamily: 'Comic Sans MS' }}
      >
        {/* Amiibo image */}
        <img
          src={amiibo.image}
          alt={amiibo.name}
          className="w-64 h-64 mx-auto rounded"
        />
        {/* Amiibo character name */}
        <p className="text-xl font-bold text-blue-500 mt-4 text-center">
          {amiibo.character}
        </p>
        {/* Amiibo series */}
        <p className="text-lg font-bold text-center">{amiibo.amiiboSeries}</p>
        {/* Release dates section */}
        <div className="mt-4">
          <h2 className="text-xl font-bold text-center text-blue-500 underline">
            Release Dates:
          </h2>
          <ul className="text-center font-bold">
            <li>North America: {amiibo.release?.na || "N/A"}</li>
            <li>Europe: {amiibo.release?.eu || "N/A"}</li>
            <li>Japan: {amiibo.release?.jp || "N/A"}</li>
            <li>Australia: {amiibo.release?.au || "N/A"}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AmiiboDetailPage;

/*
  Created by: Martín Herguedas
  BU ID: U71416128
*/
