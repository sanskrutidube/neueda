const BASE_URI = import.meta.env.VITE_BASE_URI;

const getAllCharacters = async (endpoint, signal) => {
  try {
    const response = await fetch(`${BASE_URI}/${endpoint}`, { signal });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    if (error.name === 'AbortError') {
      console.log('Fetch aborted');
    } else {
      console.error('Error fetching all characters:', error);
    }
    throw error;
  }
};

const getCharacterById = async (endpoint, id, signal) => {
  try {
    const response = await fetch(`${BASE_URI}/${endpoint}/${id}`, { signal });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    if (error.name === 'AbortError') {
      console.log('Fetch aborted');
    } else {
      console.error(`Error fetching character with id ${id}:`, error);
    }
    throw error;
  }
};

const addCharacter = async (endpoint, payload, signal) => {
  try {
    const response = await fetch(`${BASE_URI}/${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
      signal,
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const { id } = await response.json();
    return id;
  } catch (error) {
    if (error.name === 'AbortError') {
      console.log('Fetch aborted');
    } else {
      console.error('Error adding character:', error);
    }
    throw error;
  }
};

const deleteCharacter = async (id, signal) => {
  try {
    const response = await fetch(`${BASE_URI}/characters/${id}`, {
      method: 'DELETE',
      signal,
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return true;
  } catch (error) {
    if (error.name === 'AbortError') {
      console.log('Fetch aborted');
      return false;
    } else {
      console.error('Error deleting character:', error);
      return false;
    }
  }
};

const updateCharacter = async (payload, signal) => {
  try {
    const response = await fetch(`${BASE_URI}/characters`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
      signal,
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return true;
  } catch (error) {
    if (error.name === 'AbortError') {
      console.log('Fetch aborted');
      return false;
    } else {
      console.error('Error deleting character:', error);
      return false;
    }
  }
};

export {
  getAllCharacters,
  getCharacterById,
  addCharacter,
  deleteCharacter,
  updateCharacter,
};
