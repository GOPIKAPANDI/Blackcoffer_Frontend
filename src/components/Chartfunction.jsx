import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

export const SectorChart = ({ data }) => {
  // Step 1: Group data by sector
  const groupedData = data.reduce((acc, entry) => {
    const sector = entry.sector;
    acc[sector] = acc[sector] || [];
    acc[sector].push(entry);
    return acc;
  }, {});

  // Step 2: Count the number of entries for each sector
  const sectorCounts = Object.keys(groupedData).map(sector => ({
    sector,
    dataCount: groupedData[sector].length
  }));

  // Step 3: Create an array of objects for the chart data
  const chartData = sectorCounts.map(({ sector, dataCount }) => ({
    sector,
    dataCount
  }));

  return (
    <div>
      <h2>Sector-wise Data Distribution</h2>
      <BarChart
        width={500}
        height={300}
        data={chartData} // Use the processed chartData
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="sector" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="dataCount" fill="#8884d8" />
      </BarChart>
    </div>
  );
};

export const RegionChart = ({ data }) => {
  // Group data by region
  const groupedData = data.reduce((acc, entry) => {
    const region = entry.region;
    acc[region] = acc[region] || [];
    acc[region].push(entry);
    return acc;
  }, {});

  // Count the number of entries for each region
  const regionCounts = Object.keys(groupedData).map(region => ({
    region,
    dataCount: groupedData[region].length
  }));

  // Create an array of objects for the chart data
  const chartData = regionCounts.map(({ region, dataCount }) => ({
    region,
    dataCount
  }));

  return (
    <div>
      <h2>Region-wise Data Distribution</h2>
      <BarChart
        width={500}
        height={300}
        data={chartData}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="region" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="dataCount" fill="#8884d8" />
      </BarChart>
    </div>
  );
};

export const CountryChart = ({ data }) => {
  // Group data by country
  const groupedData = data.reduce((acc, entry) => {
    const country = entry.country;
    acc[country] = acc[country] || [];
    acc[country].push(entry);
    return acc;
  }, {});

  // Count the number of entries for each country
  const countryCounts = Object.keys(groupedData).map(country => ({
    country,
    dataCount: groupedData[country].length
  }));

  // Create an array of objects for the chart data
  const chartData = countryCounts.map(({ country, dataCount }) => ({
    country,
    dataCount
  }));

  return (
    <div>
      <h2>Country-wise Data Distribution</h2>
      <BarChart
        width={500}
        height={300}
        data={chartData}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="country" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="dataCount" fill="#8884d8" />
      </BarChart>
    </div>
  );
};

export const PestleChart = ({ data }) => {
  // Group data by pestle
  const groupedData = data.reduce((acc, entry) => {
    const pestle = entry.pestle;
    acc[pestle] = acc[pestle] || [];
    acc[pestle].push(entry);
    return acc;
  }, {});

  // Count the number of entries for each pestle
  const pestleCounts = Object.keys(groupedData).map(pestle => ({
    pestle,
    dataCount: groupedData[pestle].length
  }));

  // Create an array of objects for the chart data
  const chartData = pestleCounts.map(({ pestle, dataCount }) => ({
    pestle,
    dataCount
  }));

  return (
    <div>
      <h2>Pestle-wise Data Distribution</h2>
      <BarChart
        width={500}
        height={300}
        data={chartData}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="pestle" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="dataCount" fill="#8884d8" />
      </BarChart>
    </div>
  );
};
