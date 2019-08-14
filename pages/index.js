import React, { useState, useEffect } from 'react';
import { format as formatDate } from 'date-fns';
import '../assets/styles/index.css'
import Background from '../components/Background'
import Clock from '../components/Clock'

const Home = () => {

  // Time
  const [time, setTime] = useState(new Date());

  // On mount, start an interval
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    });

    // Clear the interval on destroy
    return function cleanup() {
      clearInterval(interval);
    }
  }, []);

  // Pretty time
  const getPrettyTime = () => formatDate(time, `hh:mm.ss A`);
  // Pretty date
  const getPrettyDate = () => formatDate(time, `dddd, MM/DD/YYYY`)

  return (
    <div className="flex flex-col justify-center items-center h-screen relative">
      <Background />
      <div className="z-10 text-gray-300 text-4xl">{ getPrettyTime() }</div>
      <Clock time={time} />
      <div className="z-10 text-gray-300 text-2xl">{ getPrettyDate() }</div>
    </div>
  );
};

export default Home;