import React, { useState, useEffect } from 'react';
import '../../src/App.css';
import Body from './Body';
import Filter from './Filter';
import ChartBody from './Chartbody';

export const Header = () => {
  const [originalList, setOriginalList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState('');
  const [selectedFilter, setSelectedFilter] = useState(null);
  const [showChart, setShowChart] = useState(false); 

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/data');
      const data = await response.json();
      const dataCopy = [...data];
      dataCopy.sort((a, b) => a.title.localeCompare(b.title));
      setOriginalList(dataCopy);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
  };

  const searchRes = (value) => {
    const searchResult = originalList.filter((res) => {
      if (res[selectedFilter] === undefined || res[selectedFilter] === "" || res[selectedFilter] === null) {
        return false;
      }
      let val = res[selectedFilter];
      if (typeof (val) === 'number') val = val.toString();
      return val.toLowerCase().includes(value.toLowerCase());
    });
    setOriginalList(searchResult);
  };

  const updateSearchText = (e) => {
    setSearchText(e.target.value);
    searchRes(e.target.value);
  };

  const toggleChart = () => {
    setShowChart(!showChart);
  };

  return (
    <>
      <div className='header_section'>
        <div className='background_image'></div>
        <h1 className='header_section_title'>Global Energy and Economic Trends </h1>
        <input
          className='input_container'
          type='text'
          placeholder='Search'
          value={searchText}
          onChange={updateSearchText}
        />
        <div className='search'>
          <button className="search_btn" onClick={searchRes}>Search</button>
          <Filter onFilterChange={handleFilterChange} />
          <button className="chart_btn" onClick={toggleChart}>Chart</button>
        </div>
      </div>
      <div className='body-container'>
        {loading ? (
          <p>Loading...</p>
        ) : showChart ? (
          <ChartBody data={originalList} />
        ) : (
          originalList.length === 0 ? (
            <p>No results found.</p>
          ) : (
            originalList.map((data) => {
              return <Body key={data._id} print={data} />;
            })
          )
        )}
      </div>
    </>
  );
};

export default Header;
