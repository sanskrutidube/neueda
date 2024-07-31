import { useEffect, useState } from 'react';
import { getAllCharacters } from '../services/data';
import MagicLink from './MagicLink';
import { Link } from 'react-router-dom';

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const getData = async () => {
      try {
        const data = await getAllCharacters('characters', signal);
        setCharacters(data);
      } catch (err) {
        if (err.name !== 'AbortError') {
          console.error('Failed to fetch characters:', err);
          setError('Failed to load characters. Please try again later.');
        }
      }
    };

    getData();

    return () => controller.abort();
  }, []);

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <>
      <ul className="list-outside ml-6 space-y-2 text-xl">
        {characters.map((character) => (
          <li className="pl-2" key={character.id}>
            <span className="inline-block w-full pl-2 group">
              <MagicLink href={`id/${character.id}`}>
                {character.name}
              </MagicLink>
            </span>
          </li>
        ))}
      </ul>
      <footer className="mt-8 flex justify-center">
        <div className="inline-block">
          <Link
            to="/characters/add"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Add a new character
          </Link>
        </div>
      </footer>
      <div></div>
    </>
  );
};

export default CharacterList;
