import React, { useState, useEffect } from 'react';
import "./comingsoon.scss";

const ComingSoon = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const comingDate = new Date("1 October 2024");
      const presentDate = new Date();
      const myDate = comingDate - presentDate;

      const futureDays = Math.floor(myDate / 1000 / 60 / 60 / 24);
      const futureHours = Math.floor(myDate / 1000 / 60 / 60) % 24;
      const futureMins = Math.floor(myDate / 1000 / 60) % 60;
      const futureSecs = Math.floor(myDate / 1000) % 60;

      setDays(futureDays);
      setHours(futureHours);
      setMinutes(futureMins);
      setSeconds(futureSecs);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="comingSoon">
      <div className="image">
        <picture>
          <img src="https://res.cloudinary.com/dxoemtk19/image/upload/v1715175712/image_3_pjfsbn.jpg" loading="lazy" alt="" />
        </picture>
      </div>
      <div className="details fldc">
        <div className="header">
          <h4>Coming Soon</h4>
          <h3>VolksWagen 2.0</h3>
        </div>
        <div className="timing dfAc">
          <div className="box fldc">
            <h4>{days}</h4>
            <span>days</span>
          </div>
          <div className="box fldc">
            <h4>{hours}</h4>
            <span>hours</span>
          </div>
          <div className="box fldc">
            <h4>{minutes}</h4>
            <span>mins</span>
          </div>
          <div className="box fldc">
            <h4>{seconds}</h4>
            <span>secs</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ComingSoon;
