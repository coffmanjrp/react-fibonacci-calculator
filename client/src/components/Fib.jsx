import { useEffect, useState } from 'react';
import axios from 'axios';

const Fib = () => {
  const [seenIndexes, setSeenIndexes] = useState([]);
  const [values, setValues] = useState({});
  const [index, setIndex] = useState('');

  useEffect(() => {
    fetchValues();
    fetchIndexes();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchValues = async () => {
    const response = await axios.get('/api/values/current');

    console.log('values', response.data);

    setValues(response.data);
  };

  const fetchIndexes = async () => {
    const response = await axios.get('/api/values/all');

    console.log('indexes', response.data);

    setSeenIndexes([...seenIndexes, ...response.data]);
  };

  const renderSeenIndexes = () => {
    return seenIndexes.map(({ number }) => number.toString().join(','));
  };

  const renderValues = () => {
    const entries = [];

    for (let key in values) {
      entries.push(
        <div key={key}>
          For index {key} I calculated {values[key]}
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
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Enter your index:</label>
        <input
          type="text"
          value={index}
          onChange={(e) => setIndex(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>

      <h3>Indexes I have seen:</h3>
      {renderSeenIndexes()}
      <h3>Calculated values</h3>
      {renderValues()}
    </div>
  );
};

export default Fib;
