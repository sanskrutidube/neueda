import { useState } from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="container mx-auto px-4 py-4">
      <div className="flex justify-between items-center">
        <div className="text-lg font-bold">Wizarding World</div>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-2xl focus:outline-none"
          >
            🧙🏼‍♂️
          </button>
        </div>
      </div>
      <ul
        className={`md:flex md:justify-center space-y-2 md:space-y-0 md:space-x-6 mt-4 md:mt-0 ${
          isOpen ? 'block' : 'hidden'
        }`}
      >
        <li>
          <Link
            to="/"
            className="hover:underline transition-colors duration-200"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/characters"
            className="hover:underline transition-colors duration-200"
          >
            Characters
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
