"use client"

import { useState } from 'react';

const IPInput = ({ setIpData }) => {
  const [ip, setIp] = useState('');

  const handleSearch = async () => {
    try {
      const response = await fetch(`
https://geo.ipify.org/api/v2/country,city?apiKey=at_EQRfo6fkZjRxlyAJ2UZBRIkwgB7VN&ipAddress=${ip}`);
      const data = await response.json();
      console.log(data);
      if (data && data.location) {
        setIpData(data);
      } else {
        alert('Invalid IP address or data not found');
      }
    } catch (error) {
      console.error("Error fetching IP data", error);
      alert('Error fetching IP data');
    }
  };

  return (
    <div className="flex flex-col items-center">
      <input
        type="text"
        value={ip}
        onChange={(e) => setIp(e.target.value)}
        className="p-2 border rounded"
        placeholder="Enter IP address"
      />
      <button onClick={handleSearch} className="mt-2 p-2 bg-blue-500 text-white rounded">
        Search
      </button>
    </div>
  );
};

export default IPInput;
