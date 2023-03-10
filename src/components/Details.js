import React from 'react';
import { useLocation } from 'react-router-dom';
import './Details.css';
import DetailsHeader from './DetailsHeader';

const Details = () => {
  const location = useLocation();
  const data = location.state?.data;
  const name = location.state?.name;

  const qualtyAir = () => {
    if (data) {
      if (data.list[0].main.aqi === 1) {
        return 'Good';
      } if (data.list[0].main.aqi === 2) {
        return 'Fair';
      } if (data.list[0].main.aqi === 3) {
        return 'Moderate';
      } if (data.list[0].main.aqi === 4) {
        return 'Poor';
      }
      return 'Very Poor';
    }
    return '';
  };
  if (!data && !name) {
    return <div data-testid="testing">Not found</div>;
  }
  return (
    <div className="container">
      <DetailsHeader />
      <section>
        <div className="details-header">
          <div data-testid="testing">{name}</div>
          <div>{qualtyAir()}</div>
        </div>
        <ul>
          <li data-testid="component-concentration">
            {`Сoncentration of CO is: ${data.list[0].components.co} μg/m`}
            <sup>3</sup>
          </li>
          <li data-testid="component-concentration" className="different-color">
            {`Сoncentration of NO is: ${data.list[0].components.no} μg/m`}
            <sup>3</sup>
          </li>
          <li data-testid="component-concentration">
            Сoncentration of NO
            <sub>2</sub>
            {' '}
            {`is: ${data.list[0].components.no2} μg/m`}
            <sup>3</sup>
          </li>
          <li data-testid="component-concentration" className="different-color">
            Сoncentration of O
            <sub>3</sub>
            {` is: ${data.list[0].components.o3} μg/m`}
            <sup>3</sup>
          </li>
          <li data-testid="component-concentration">
            Сoncentration of SO
            <sub>2</sub>
            {' '}
            {`is: ${data.list[0].components.so2} μg/m`}
            <sup>3</sup>
          </li>
          <li data-testid="component-concentration" className="different-color">
            Сoncentration of PM
            <sub>2.5</sub>
            {' '}
            {`is: ${data.list[0].components.pm2_5} μg/m`}
            <sup>3</sup>
          </li>
          <li data-testid="component-concentration">
            Сoncentration of PM
            <sub>10</sub>
            {' '}
            {`is: ${data.list[0].components.pm10} μg/m`}
            <sup>3</sup>
          </li>
          <li data-testid="component-concentration" className="different-color">
            Сoncentration of NH
            <sub>3</sub>
            {' '}
            {`is: ${data.list[0].components.nh3} μg/m`}
            <sup>3</sup>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Details;
