import { deleteCharacter } from '../services/data';
import { useNavigate } from 'react-router-dom';

const CharacterActions = ({ id, onEdit }) => {
  const navigate = useNavigate();
  const deleteCharacterAction = async () => {
    try {
      await deleteCharacter(id);
    } catch (error) {
      console.error(error);
    } finally {
      navigate('/characters');
    }
  };
  return (
    <div className="grid grid-cols-2 gap-x-2">
      <button
        onClick={deleteCharacterAction}
        className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Delete
      </button>
      <button
        onClick={onEdit}
        className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Edit
      </button>
    </div>
  );
};

export default CharacterActions;
