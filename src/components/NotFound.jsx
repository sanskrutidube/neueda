import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center px-4">
      <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
      <p className="text-2xl text-gray-600 mb-8">Mischief Not Managed!</p>
      <div className="text-center mb-8">
        <p className="text-xl text-gray-700 mb-4">
          Looks like this page pulled a Disapparating act!
        </p>
        <p className="text-lg text-gray-600">
          Even the Marauder's Map couldn't find what you're looking for.
        </p>
      </div>
      <img
        src="/confused-wizard.webp"
        alt="Confused Wizard"
        className="w-64 h-64 object-cover mb-8 rounded-full shadow-lg"
      />
      <Link
        to="/"
        className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105"
      >
        Accio Homepage!
      </Link>
    </div>
  );
};

export default NotFound;
