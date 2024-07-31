import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCharacterById, updateCharacter } from '../services/data';
import CharacterInformationCard from './CharacterInformationCard';
import NotFound from './NotFound';

const CharacterInfo = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [character, setCharacter] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const getData = async () => {
      try {
        setIsLoading(true);
        const data = await getCharacterById('characters/id', id, signal);
        if (data) {
          setCharacter(data);
        } else {
          setError(true);
        }
      } catch (err) {
        if (err.name !== 'AbortError') {
          console.error('Error fetching character:', err);
          setError(true);
        }
      } finally {
        setIsLoading(false);
      }
    };

    getData();

    return () => controller.abort();
  }, [id]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error || !character) {
    return <NotFound />;
  }

  const saveCharacter = async (editedCharacter) => {
    await updateCharacter(editedCharacter);
  };

  return (
    <>
      <CharacterInformationCard character={character} onSave={saveCharacter} />
    </>
  );
};

export default CharacterInfo;
