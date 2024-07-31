import { Link } from 'react-router-dom';

const MagicLink = ({ href, children, className = '' }) => {
  return (
    <Link
      to={href}
      className={`
        relative
        inline-block
        font-medium
        transition-all
        duration-300
        px-6
        hover:text-blue-700
        hover:scale-110
        ${className}
      `}
    >
      <span className="relative z-10">{children}</span>
      <span
        className="
        absolute left-0 top-1/2 -translate-y-1/2
        opacity-0 transition-all duration-300
        group-hover:opacity-100 group-hover:left-1
      "
      >
        ✨
      </span>
      <span
        className="
        absolute right-0 top-1/2 -translate-y-1/2
        opacity-0 transition-all duration-300
        group-hover:opacity-100 group-hover:right-1
      "
      >
        ✨
      </span>
    </Link>
  );
};

export default MagicLink;
