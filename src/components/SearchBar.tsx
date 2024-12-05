/**
 * @file SearchBar.tsx
 * @description This file contains the SearchBar component which is used to filter and search Amiibo by name.
 * 
 * Created By Jason Kim 
 * 
 */

// Define the type for props passed to the SearchBar component
interface SearchBarProps {
    query: string; // The current search query value
    setQuery: (query: string) => void; // Function to update the search query
}

/**
 * SearchBar component renders an input field for searching Amiibo by name.
 * 
 * @param {SearchBarProps} props - The props for the SearchBar component.
 * @param {string} props.query - The current search query.
 * @param {function} props.setQuery - Function to update the search query.
 * @returns {JSX.Element} The rendered input field.
 */
function SearchBar({ query, setQuery }: SearchBarProps) {
    return (
        <input
            type="text" // Input field of type text
            value={query} // Bind the input's value to the query prop
            onChange={(e) => setQuery(e.target.value)} // Update the query state on input change
            className="w-full p-2 border border-gray-300 rounded" 
            placeholder="Search Amiibo by name..." // Placeholder text for the input field
            style={{ fontFamily: 'Comic Sans MS' }} 
        />
    );
}

export default SearchBar; // Export the component for use in other parts of the application

/*
    Created By Jason Kim 
*/
