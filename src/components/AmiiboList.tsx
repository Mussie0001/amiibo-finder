import { useEffect, useState } from "react";
import AmiiboCard from "./AmiiboCard";

/**
 * Mussie Abraham
 * AmiiboList component fetches and displays a list of Amiibo figures based on a randomly selected character.
 * It shows a loading spinner while fetching data and displays the Amiibos or a message if no Amiibos are found.
 * Users can refresh the list to fetch Amiibos for a different random character.
 */

function AmiiboList() {
  const [amiibos, setAmiibos] = useState([]); // State to store fetched Amiibos
  const [loading, setLoading] = useState(true); // State to manage loading spinner visibility
  const [displayCharacter, setDisplayCharacter] = useState<string>(""); // State to store the currently displayed character

  /**
   * Fetches Amiibos for a random character from the Amiibo API.
   * Updates the state with the fetched Amiibos and the character.
   * Handles loading state and errors.
   */
  const fetchAmiibos = () => {
    setLoading(true); // Show loading spinner while fetching
    const characters = ["mario", "luigi", "peach", "daisy", "toad", "yoshi", "bowser", "wario", "diddy kong", "donkey kong", "link", "zelda", "kirby", "pac-man", "piranha plant", "inkling", "lucina", "sonic", "mewtwo", "pikachu", "charizard", "jigglypuff", "greninja", "lucario", "incineroar", "wolf", "banjo & kazooie", "king k. rool", "isabelle", "villager", "tom nook", "k.k. slider", "resetti", "blathers", "celeste", "kicks", "mabel", "sable", "timmy & tommy", "lottie", "luna", "porter", "redd", "saharah", "wisp", "zipper", "ace", "booker", "chip", "copper", "cyrus", "digby", "franklin", "gracie", "gulliver", "harriet", "harvey", "joan", "jingle", "joan", "jingle"];
    const randomCharacter = characters[Math.floor(Math.random() * characters.length)];

    fetch(`https://www.amiiboapi.com/api/amiibo/?character=${randomCharacter}`)
      .then((res) => res.json())
      .then((data) => {
        const filteredAmiibos = (data.amiibo || []).filter(
          (amiibo: any) => amiibo.character.toLowerCase() === randomCharacter
        );

        setAmiibos(filteredAmiibos); // Update state with filtered Amiibos
        setDisplayCharacter(randomCharacter); // Update display character
        setLoading(false); // Hide loading spinner
      })
      .catch((err) => {
        console.error("Error fetching Amiibo data:", err);
        setLoading(false); // Hide loading spinner on error
      });
  };

  // Fetch data on initial render
  useEffect(() => {
    fetchAmiibos();
  }, []);

  if (loading) {
    return <div className="text-center text-2xl text-blue-500" style={{ fontFamily: 'Comic Sans MS' }}>Loading Amiibos...</div>;
  }

  if (amiibos.length === 0) {
    return (
      <div className="text-center text-xl" style={{ fontFamily: 'Comic Sans MS' }}>
        No Amiibos found for <strong>{displayCharacter}</strong>.
        <div className="mt-4">
          <button
        onClick={fetchAmiibos}
        className="bg-blue-500 text-white px-4 py-2 mb-4 rounded hover:bg-blue-600 transition" style={{ fontFamily: 'Comic Sans MS' }}
          >
        Refresh
          </button>
        </div>
      </div>
      
    );
  }

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4" style={{ fontFamily: 'Comic Sans MS' }}>
        Showing Amiibos for: <span className="text-blue-600">{displayCharacter.charAt(0).toUpperCase() + displayCharacter.slice(1)}</span>
      </h1>
      <button
        onClick={fetchAmiibos}
        className="bg-blue-500 text-white px-4 py-2 mb-4 rounded hover:bg-blue-600 transition" style={{ fontFamily: 'Comic Sans MS' }}
      >
        Refresh
      </button>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {amiibos.map((amiibo: any) => (
          <AmiiboCard
            key={`${amiibo.head}-${amiibo.tail}`}
            name={amiibo.name}
            image={amiibo.image}
            series={amiibo.amiiboSeries}
            type={amiibo.type}
          />
        ))}
      </div>
    </div>
  );
}

export default AmiiboList;