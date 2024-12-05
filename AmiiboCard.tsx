/**
 * @file AmiiboCard.tsx
 * @description This file contains the AmiiboCard component which displays an Amiibo card with its image, name, series, and type.
 * The component uses Tailwind CSS for styling and react-router-dom for navigation.
 * 
 * Created by: Martín Herguedas
 * BU ID: U71416128
 */

import { Link } from "react-router-dom";

// Define the type for the props the AmiiboCard component will receive
type AmiiboProps = {
    /** The name of the Amiibo */
    name: string;
    /** The URL of the Amiibo image */
    image: string;
    /** The series to which the Amiibo belongs */
    series: string;
    /** The type of the Amiibo */
    type: string;
};

/**
 * AmiiboCard component
 * 
 * This component takes in properties of type `AmiiboProps` to display an Amiibo card
 * containing an image, the name of the Amiibo, the series it belongs to, and its type.
 * 
 * @param {AmiiboProps} props - The properties passed to the component
 * @returns {JSX.Element} A card displaying Amiibo details
 */
function AmiiboCard({ name, image, series, type }: AmiiboProps) {
    return (
        // Main card container with padding, background color, rounded corners, and shadow effect
        <div className="p-4 bg-white rounded shadow hover:shadow-lg transition">
            {/* The card links to a detail page for the specific Amiibo */}
            <Link to={`/detail/${name}`}>
                {/* Amiibo image with responsive width, fixed height, and rounded corners */}
                <img
                    src={image}
                    alt={name} // Alt text for accessibility and SEO
                    className="w-full h-48 object-cover rounded"
                />
                {/* Amiibo name styled as a bold, large header */}
                <h2 className="mt-4 text-xl font-bold" style={{ fontFamily: 'Comic Sans MS' }}>
                    {name}
                </h2>
                {/* Series information styled with subtle gray text and a blue label */}
                <p className="text-gray-600" style={{ fontFamily: 'Comic Sans MS' }}>
                    <span className="text-blue-500">Series:</span> {series}
                </p>
                {/* Type information styled similarly to the series */}
                <p className="text-gray-600" style={{ fontFamily: 'Comic Sans MS' }}>
                    <span className="text-blue-500">Type:</span> {type}
                </p>
            </Link>
        </div>
    );
}

// Export the component as the default export of the module
export default AmiiboCard;

/*
    Created by: Martín Herguedas
    BU ID: U71416128
*/
