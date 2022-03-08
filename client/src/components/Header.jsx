import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="w-full bg-sky-500 text-white">
      <div className="flex justify-around container mx-auto p-4">
        <Link to="/">
          <h2 className="text-lg">Fibonacci Calculator</h2>
        </Link>
        <ul className="flex gap-5">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
