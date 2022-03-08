import { useEffect, useState } from 'react';
import axios from 'axios';
import { Loading } from '../components';

const Fib = () => {
  const [seenIndexes, setSeenIndexes] = useState([]);
  const [values, setValues] = useState({});
  const [index, setIndex] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(false);
    fetchValues();
    fetchIndexes();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchValues = async () => {
    const response = await axios.get('/api/values/current');

    setValues({ ...values, ...response.data });
  };

  const fetchIndexes = async () => {
    const response = await axios.get('/api/values/all');

    setSeenIndexes([...seenIndexes, ...response.data]);
  };

  const renderSeenIndexes = () => {
    return seenIndexes.map(({ number }) => number).join(', ');
  };

  const renderValues = () => {
    const entries = [];

    for (let key in values) {
      entries.push(
        <div key={key}>
          For index {key} | calculated {values[key]}
        </div>
      );
    }

    return entries;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios.post('/api/values', {
      index,
    });

    setIndex('');
    setLoading(true);

    setTimeout(() => window.location.reload(), 3000);
  };

  return (
    <>
      {loading && <Loading />}
      <div className="space-y-4">
        <form onSubmit={handleSubmit}>
          <label className="block text-3xl font-semibold p-3">
            Enter your index
          </label>
          <input
            type="text"
            className="border-y-2 border-l-2 rounded-l-lg border-gray-300 focus:outline-none focus:border-gray-400 px-2"
            value={index}
            onChange={(e) => setIndex(e.target.value)}
          />
          <button
            type="submit"
            className="bg-sky-500 px-1 py-0.5 rounded-r-lg text-white hover:opacity-90 focus:outline-none focus:ring-2"
          >
            Submit
          </button>
        </form>
        {seenIndexes.length > 0 && (
          <>
            <h3 className="text-2xl">Indexes I have seen</h3>
            <div>{renderSeenIndexes()}</div>
          </>
        )}
        {values && (
          <>
            <h3 className="text-2xl">Calculated values</h3>
            <div className="space-y-2">{renderValues()}</div>
          </>
        )}
      </div>
    </>
  );
};

export default Fib;
