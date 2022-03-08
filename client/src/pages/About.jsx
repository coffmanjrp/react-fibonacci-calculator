import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div>
      <h1 className="text-7xl font-bold">About</h1>
      <p className="text-2xl mt-4">Version 1.0.0</p>
      <Link
        to="/"
        className="inline-block mt-6 bg-sky-500 text-white py-3 px-2 rounded cursor-pointer hover:opacity-90 hover:scale-105 transition-all ease-in-out duration-700 focus:ring-2 focus:outline-none"
      >
        Go back home
      </Link>
    </div>
  );
};

export default About;
