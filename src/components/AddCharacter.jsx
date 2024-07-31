import { useEffect, useState } from 'react';
import { addCharacter } from '../services/data';
import { useNavigate } from 'react-router-dom';

const AddCharacter = () => {
  const [name, setName] = useState('');
  const [house, setHouse] = useState('');
  const [wandWood, setWandWood] = useState('');
  const [wandCore, setWandCore] = useState('');
  const [wandLength, setWandLength] = useState('');
  const [bio, setBio] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [characterId, setCharacterId] = useState(null);

  const [countdown, setCountdown] = useState(5);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      name,
      house,
      wand: {
        wood: wandWood,
        core: wandCore,
        length: wandLength,
      },
      bio,
      imageurl: imageUrl,
    };
    const id = await addCharacter('characters', formData);
    setCharacterId(id);
    setIsSubmitted(true);
  };

  useEffect(() => {
    let timer;
    if (isSubmitted && countdown > 0) {
      timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);
    } else if (isSubmitted && countdown === 0 && characterId) {
      navigate(`/characters/id/${characterId}`);
    }
    return () => clearTimeout(timer);
  }, [isSubmitted, countdown, characterId, navigate]);

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto mt-8 p-6 bg-white rounded-lg shadow-md"
    >
      <h2 className="text-2xl font-bold mb-6 text-center">Add New Character</h2>

      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
          Name:
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="house" className="block text-gray-700 font-bold mb-2">
          House:
        </label>
        <select
          id="house"
          value={house}
          onChange={(e) => setHouse(e.target.value)}
          required
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
        >
          <option value="">Select a house</option>
          <option value="Gryffindor">Gryffindor</option>
          <option value="Hufflepuff">Hufflepuff</option>
          <option value="Ravenclaw">Ravenclaw</option>
          <option value="Slytherin">Slytherin</option>
        </select>
      </div>

      <div className="mb-4">
        <h3 className="text-lg font-bold mb-2">Wand:</h3>
        <div className="grid grid-cols-3 gap-4">
          <div>
            <label
              htmlFor="wood"
              className="block text-gray-700 font-bold mb-2"
            >
              Wood:
            </label>
            <input
              type="text"
              id="wood"
              value={wandWood}
              onChange={(e) => setWandWood(e.target.value)}
              required
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div>
            <label
              htmlFor="core"
              className="block text-gray-700 font-bold mb-2"
            >
              Core:
            </label>
            <input
              type="text"
              id="core"
              value={wandCore}
              onChange={(e) => setWandCore(e.target.value)}
              required
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div>
            <label
              htmlFor="length"
              className="block text-gray-700 font-bold mb-2"
            >
              Length:
            </label>
            <input
              type="number"
              id="length"
              value={wandLength}
              onChange={(e) => setWandLength(e.target.value)}
              required
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
        </div>
      </div>

      <div className="mb-4">
        <label htmlFor="bio" className="block text-gray-700 font-bold mb-2">
          Bio:
        </label>
        <textarea
          id="bio"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          required
          rows="4"
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
        ></textarea>
      </div>

      <div className="mb-4">
        <label
          htmlFor="imageurl"
          className="block text-gray-700 font-bold mb-2"
        >
          Image URL:
        </label>
        <input
          type="url"
          id="imageurl"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          required
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring"
      >
        Add Character
      </button>

      {isSubmitted && (
        <div className="text-green-500 mt-4">
          <p>Character added successfully!</p>
          <p>Redirecting in {countdown} seconds...</p>
        </div>
      )}
    </form>
  );
};

export default AddCharacter;
