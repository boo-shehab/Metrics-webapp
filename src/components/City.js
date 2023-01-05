/* eslint-disable react/destructuring-assignment */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchAirPollution } from '../redux/AirAPI';

const City = (prop) => {
  const {
    city, country, lat, lng,
  } = prop.city;
  const { index } = prop;
  const { AirPollutions, loading } = useSelector((state) => state.AirAPI);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAirPollution({ lat, lon: lng, index }));
  }, [dispatch, lat, lng, index]);
  const getTime = () => {
    if (AirPollutions[index]) {
      return new Date(AirPollutions[index].list[0].dt * 1000).toLocaleDateString('en-GB');
    }
    return '';
  };
  const qualtyAir = () => {
    if (AirPollutions[index]) {
      if (AirPollutions[index].list[0].main.aqi === 1) {
        return 'Good';
      } if (AirPollutions[index].list[0].main.aqi === 2) {
        return 'Fair';
      } if (AirPollutions[index].list[0].main.aqi === 3) {
        return 'Moderate';
      } if (AirPollutions[index].list[0].main.aqi === 4) {
        return 'Poor';
      }
      return 'Very Poor';
    }
    return '';
  };
  if (loading) {
    return (
      <>
        <div>loading...</div>
      </>
    );
  }
  return (
    <Link
      to="Details"
      state={{
        data: AirPollutions[index],
        name: `${city}, ${country}`,
      }}
      style={{ textDecoration: 'none' }}
    >
      <div className="card">
        <div>
          <div>
            city:
            {' '}
            { city }
          </div>
          <div>
            country:
            {' '}
            { country }
          </div>
        </div>
        <div>
          date:
          {' '}
          {getTime()}
        </div>
        <div>
          air qualty:
          {' '}
          {qualtyAir()}
        </div>
      </div>
    </Link>
  );
};

export default City;
