import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import Details from '../components/Details';

describe('Details', () => {
  it('displays a "Not found" message when data and name are not provided', () => {
    const { getByTestId } = render(<BrowserRouter><Details /></BrowserRouter>);
    expect(getByTestId('testing').textContent).toEqual('Not found');
  });
  it('displays the correct concentration of each component when data is provided', () => {
    const data = {
      coord: {
        lon: -0.1275,
        lat: 51.5072,
      },
      list: [
        {
          main: {
            aqi: 1,
          },
          components: {
            co: 250.34,
            no: 0.19,
            no2: 26.39,
            o3: 26.82,
            so2: 9.89,
            pm2_5: 5.42,
            pm10: 13.07,
            nh3: 0.5,
          },
          dt: 1672858800,
        },
      ],
    };
    const name = 'London, United Kingdom';

    const { getAllByTestId } = render(
      <MemoryRouter initialEntries={[{ state: { data, name } }]}>
        <Details />
      </MemoryRouter>,
    );
    expect(getAllByTestId('component-concentration')[0].textContent).toEqual(
      'Сoncentration of CO is: 250.34 μg/m3',
    );
    expect(getAllByTestId('component-concentration')[1].textContent).toEqual(
      'Сoncentration of NO is: 0.19 μg/m3',
    );
    expect(getAllByTestId('component-concentration')[2].textContent).toEqual(
      'Сoncentration of NO2 is: 26.39 μg/m3',
    );
    expect(getAllByTestId('component-concentration')[3].textContent).toEqual(
      'Сoncentration of O3 is: 26.82 μg/m3',
    );
    expect(getAllByTestId('component-concentration')[4].textContent).toEqual(
      'Сoncentration of SO2 is: 9.89 μg/m3',
    );
    expect(getAllByTestId('component-concentration')[5].textContent).toEqual(
      'Сoncentration of PM2.5 is: 5.42 μg/m3',
    );
    expect(getAllByTestId('component-concentration')[6].textContent).toEqual(
      'Сoncentration of PM10 is: 13.07 μg/m3',
    );
    expect(getAllByTestId('component-concentration')[7].textContent).toEqual(
      'Сoncentration of NH3 is: 0.5 μg/m3',
    );
  });
});
