import React, { useEffect, useState } from 'react';
import PodInfo from './components/PodInfo';
import axios from 'axios';

const App = () => {
  const [podData, setPodData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/data');
        setPodData(response.data);
      } catch (error) {
        console.error('Error fetching pod data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Pod Information</h1>
      {podData ? (
        <PodInfo data={podData} />
      ) : (
        <p>Loading pod Information...</p>
      )}
    </div>
  );
};

export default App;