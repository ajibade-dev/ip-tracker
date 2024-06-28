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
    <div className="min-h-screen flex flex-col items-center justify-center">
      <IPInput setIpData={setIpData} />
      {ipData && ipData.location && (
        <div className="mt-4">
          <p><strong>IP:</strong> {ipData.ip}</p>
          <p><strong>Location:</strong> {ipData.location.region}, {ipData.location.country}</p>
          <p><strong>Timezone:</strong> {ipData.location.timezone}</p>
          <p><strong>ISP:</strong> {ipData.isp}</p>
          <Map location={ipData.location} />
        </div>
      )}
    </div>
  );
}
