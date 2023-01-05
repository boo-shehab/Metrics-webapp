import React, { useState } from 'react';
import CITY from '../data/city.json';
import City from './City';
import logo from '../image/logo.png';
import './Categories.css';

const Categories = () => {
  const [cities, setCities] = useState(CITY.slice(0, 12));

  const filtered = (ele) => {
    const filter = [];
    for (let i = 0; i < CITY.length; i += 1) {
      if (CITY[i].city.toLowerCase().includes(ele.target.value.toLowerCase())
      || CITY[i].country.toLowerCase().includes(ele.target.value.toLowerCase())) {
        filter.push(CITY[i]);
      }
      if (filter.length === 12) break;
    }
    setCities(filter);
  };

  return (
    <div className="container">
      <header>
        <img src={logo} alt="logo" className="logo" />
        <form>
          <input type="search" onChange={filtered} />
        </form>
      </header>
      <div>
        <div className="card-container">
          {cities.map((city, i) => <City key={city.id} city={city} index={i} />)}
        </div>
      </div>
    </div>
  );
};

export default Categories;
