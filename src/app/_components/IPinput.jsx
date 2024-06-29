"use client"

import { useState } from 'react';
import Image from 'next/image';

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
    <div className="flex flex-col items-center justify-center">
      
      <div className="relative w-full lg:h-[35vh] md:h-[25vh] h-[35vh] bg-custom-mobile md:bg-custom-desk bg-cover bg-center flex flex-col gap-4 items-center pt-5">
      <h1 className='text-white font-semibold md:text-3xl text-xl md:mb-5 mb-2'>IP Adress Tracker</h1>
        <div className='flex flex-row'>
        <input
        type="text"
        value={ip}
        onChange={(e) => setIp(e.target.value)}
        className="p-2 border rounded-l-lg md:w-[30vw] w-full"
        placeholder="Search for any IP or domain"
      />
      <button onClick={handleSearch} className="p-4 bg-very-dark-gray text-white rounded-r-md">
        <Image src="/icon-arrow.svg" width={10} height={10}/>
      </button>
        </div>
    
      </div>
      
    </div>
  );
};

export default IPInput;
