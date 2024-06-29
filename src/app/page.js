"use client"

import { useState, useEffect } from 'react';
import IPInput from './_components/IPinput';
import Map from './_components/Map';

export default function Home() {
  const [ipData, setIpData] = useState(null);

  useEffect(() => {
    const fetchUserIP = async () => {
      try {
        const response = await fetch(`
https://geo.ipify.org/api/v2/country,city?apiKey=at_EQRfo6fkZjRxlyAJ2UZBRIkwgB7VN`);
        const data = await response.json();
        console.log(data);
        setIpData(data);
      } catch (error) {
        console.error("Error fetching user's IP data", error);
      }
    };

    fetchUserIP();
  }, []);

  return (
    <div className="min-h-screen w-full">
      <IPInput setIpData={setIpData} />
      {ipData && ipData.location && (
        <div className="">
          <div className='relative z-40 flex items-center justify-center md:mx-2 mx-0'>
            <div className='absolute w-fit flex flex-col md:flex-row items-center z-40 rounded-xl md:px-4 px-0 md:py-8 py-4 bg-white justify-center space-y-4 md:space-y-0 md:space-x-6 mx-7
            md:mx-0'>
            {/* for the ip */}
            <div className='md:border-r-2 md:border-slate-200 md:pr-8 px-5 mx-3 text-center md:text-start'>
            <p className='text-[8px] text-dark-gray font-bold tracking-widest'>IP ADDRESS</p>
            <p className='md:text-xl text-base font-bold'>{ipData.ip}</p>
            </div>
            {/* for the location */}
            <div className=' md:border-r-2 md:border-slate-200 md:pr-8 px-5 mx-3 text-center md:text-start'>
            <p className='text-[8px] text-dark-gray font-bold tracking-widest '>LOCATION:</p>
            <p className='md:text-xl text-base font-bold'>{ipData.location.region}, {ipData.location.country}</p>
            </div>
          {/* fpr the timezone */}
          <div className=' md:border-r-2 md:border-slate-200 md:pr-8 px-5 mx-3 text-center md:text-start'>
          <p className='text-[8px] text-dark-gray font-bold tracking-widest '><>Timezone:</></p>
          <p className='md:text-xl text-base font-bold'>{ipData.location.timezone}</p>
          </div>
          {/* for the isp */}
          <div className='md:pr-8 px-5 mx-3 text-center md:text-start'>
          <p className='text-[8px] text-dark-gray font-bold tracking-widest'>ISP:</p>
          <p className='md:text-xl text-base font-bold'>{ipData.isp}</p>
          </div>
            </div>
         
          </div>
          <div className='relative z-20'>
          <Map location={ipData.location} />
          </div>
        </div>
      )}
    </div>
  );
}
