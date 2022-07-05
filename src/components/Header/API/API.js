import React, { useEffect, useState } from 'react';

import { Container, Locale, Degree, Image } from './API.styled';

const API = () => {
  const [result, setResult] = useState();
  const wheatherImage = {
    '01d': '/API-Icon/01d.png',
    '01n': '/API-Icon/01n.png',
    '02d': '/API-Icon/02d.png',
    '02n': '/API-Icon/02n.png',
    '03d': '/API-Icon/03d.png',
    '03n': '/API-Icon/03n.png',
    '04d': '/API-Icon/04d.png',
    '04n': '/API-Icon/04n.png',
    '09d': '/API-Icon/09d.png',
    '09n': '/API-Icon/09n.png',
    '10d': '/API-Icon/10d.png',
    '10n': '/API-Icon/10n.png',
    '11d': '/API-Icon/11d.png',
    '11n': '/API-Icon/11n.png',
    '13d': '/API-Icon/13d.png',
    '13n': '/API-Icon/13n.png',
    '50d': '/API-Icon/50d.png',
    '50n': '/API-Icon/50n.png',
    unknown: '/API-Icon/unknown.png',
  };

  useEffect(() => {
    const API = async () => {
      let lat = -15.7801;
      let long = -47.9292;
      setResult(
        await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&lang=pt_br&units=metric&APPID=14a93c6d345c75aac48f1afbf4e032cf`,
        ).then((res) => res.json()),
      );
    };
    API();
  }, []);

  console.log(result);

  return (
    <Container>
      <Locale>
        {result ? result.name : result} - {result ? result.sys.country : result}
      </Locale>
      <div>
        <Image
          src={
            result
              ? wheatherImage[result.weather[0].icon]
              : wheatherImage.unknown
          }
        />
        <Degree>
          {result ? Number(result.main.temp).toFixed(0) : result}º
        </Degree>
      </div>
    </Container>
  );
};

export default API;
