import React, { useState, useEffect } from 'react';
import { SectorChart, RegionChart, CountryChart, PestleChart } from './Chartfunction';

const Chartbody = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/data');
        const fetchedData = await response.json();
        setData(fetchedData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {/* Render other components and UI elements here */}
          <SectorChart data={data} />
          <RegionChart data={data} />
          <CountryChart data={data} />
          <PestleChart data={data} />
        </>
      )}
    </div>
  );
};

export default Chartbody;
