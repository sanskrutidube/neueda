import { useState } from 'react';
import CharacterActions from './CharacterActions';
import MagicalRipple from './MagicRipple';

const houses = ['Gryffindor', 'Hufflepuff', 'Ravenclaw', 'Slytherin'];

const CharacterInformationCard = ({ character, onSave }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedCharacter, setEditedCharacter] = useState(character);

  const [isRippling, setIsRippling] = useState(false);

  const handleRippleComplete = () => {
    setIsRippling(false);
    setIsEditing(true);
  };

  const handleEdit = () => {
    setIsRippling(true);
    setIsEditing(true);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditedCharacter(character);
  };

  const handleSave = async () => {
    try {
      await onSave(editedCharacter);
      setIsEditing(false);
    } catch (error) {
      console.error('Error saving character:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedCharacter((prev) => ({
      ...prev,
      [name]:
        name === 'wand'
          ? { ...prev.wand, [e.target.dataset.wandProp]: value }
          : value,
    }));
  };

  return (
    <>
      <MagicalRipple
        isActive={isRippling}
        onAnimationComplete={handleRippleComplete}
      />
      <header className="text-center mb-8">
        <h1 className="font-cinzel text-4xl md:text-6xl font-bold mb-2">
          {isEditing ? (
            <input
              name="name"
              value={editedCharacter.name}
              onChange={handleChange}
              className="w-full text-center"
            />
          ) : (
            character.name
          )}
        </h1>
      </header>
      <main className="flex flex-col md:flex-row items-center justify-center gap-8">
        <div className="md:w-1/2">
          <img
            src={character.imageurl}
            alt={character.name}
            className="rounded-lg shadow-lg w-full max-w-md mx-auto"
          />
        </div>
        <div className="md:w-1/2">
          {isEditing ? (
            <form>
              <div className="mb-4">
                <label className="font-bold">House:</label>
                <select
                  name="house"
                  value={editedCharacter.house}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                >
                  {houses.map((house) => (
                    <option key={house} value={house}>
                      {house}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mb-4">
                <label className="font-bold">Bio:</label>
                <textarea
                  name="bio"
                  value={editedCharacter.bio}
                  onChange={handleChange}
                  className="w-full"
                  rows="4"
                />
              </div>
              <div className="mb-4">
                <h3 className="font-bold mb-2">Wand:</h3>
                <div>
                  <label>Wood:</label>
                  <input
                    name="wand"
                    data-wand-prop="wood"
                    value={editedCharacter.wand?.wood || ''}
                    onChange={handleChange}
                    className="w-full"
                  />
                </div>
                <div>
                  <label>Core:</label>
                  <input
                    name="wand"
                    data-wand-prop="core"
                    value={editedCharacter.wand?.core || ''}
                    onChange={handleChange}
                    className="w-full"
                  />
                </div>
                <div>
                  <label>Length:</label>
                  <input
                    name="wand"
                    data-wand-prop="length"
                    value={editedCharacter.wand?.length || ''}
                    onChange={handleChange}
                    className="w-full"
                  />
                </div>
              </div>
              <div className="mb-4">
                <label className="font-bold">Image URL:</label>
                <input
                  type="url"
                  id="imageurl"
                  value={editedCharacter.imageurl}
                  onChange={handleChange}
                  className="w-full"
                  name="imageurl"
                />
              </div>
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={handleCancel}
                  className="px-4 py-2 bg-gray-300 rounded"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleSave}
                  className="px-4 py-2 bg-blue-500 text-white rounded"
                >
                  Save
                </button>
              </div>
            </form>
          ) : (
            <>
              <p className="mb-4">
                <span className="font-bold">House:</span> {character.house}
              </p>
              <p className="mb-4">
                <span className="font-bold">Bio:</span> {character.bio}
              </p>
              <div className="mb-4">
                <h3 className="font-bold mb-2">Wand:</h3>
                <ul className="list-disc list-inside pl-4">
                  <li>Wood: {character.wand?.wood || ''}</li>
                  <li>Core: {character.wand?.core || ''}</li>
                  <li>Length: {character.wand?.length || ''}</li>
                </ul>
              </div>
            </>
          )}
        </div>
      </main>
      <footer className="mt-8 flex justify-center">
        <div className="inline-block">
          {!isEditing && (
            <CharacterActions id={character.id} onEdit={handleEdit} />
          )}
        </div>
      </footer>
    </>
  );
};

export default CharacterInformationCard;
