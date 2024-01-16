import React, { useState } from 'react';

const Filter = ({onFilterChange}) => {
  
  const [topics, setTopics] = useState(false);
  const [sector, setSector] = useState(false);
  const [region, setRegion] = useState(false);
  const [source, setSource] = useState(false);
  const [country, setCountry] = useState(false);
  const [endYear, setEndYear] = useState(false);


  const handleOptionClick = (option) => {
    console.log("option ===> ",option)
    switch (option) {
      case 'topics':
        setTopics(true);
        onFilterChange('topics');
        break;
      case 'sector':
        setSector(true);
        onFilterChange('sector');
        break;
      case 'region':
        setRegion(true);
        onFilterChange('region');
        break;
      case 'source':
        setSource(true);
        onFilterChange('source');
        break;
      case 'country':
        setCountry(true);
        onFilterChange('country');
        break;
      case 'endyear':
        setEndYear(true);
        onFilterChange('end_year');
        break;
      default:
        console.log("Default is executed");
    }
  };

  return (
    <div>
      <select
        onChange={(e) => handleOptionClick(e.target.value)}
        defaultValue=""
        className='filter_opt'
      >
        <option value="" disabled className='option'>Filter</option>
        <option value="topics" className='option'>Topics</option>
        <option value="sector" className='option'>Sector</option>
        <option value="region" className='option'>Region</option>
        <option value="source" className='option'>Source</option>
        <option value="country" className='option'>Country</option>
        <option value="endyear" className='option'>End Year</option>
      </select>

    </div>
  );
};

export default Filter;
