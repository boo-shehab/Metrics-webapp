import configureStore from 'redux-mock-store';
import React from 'react';
import { Provider } from 'react-redux';
import ReactTestRenderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import Categories from '../components/Categories';

const mockStore = configureStore([]);

describe('renders Categories React-Redux Component', () => {
  let store;
  let component;

  beforeEach(() => {
    store = mockStore({
      AirAPI: {
        loading: false,
        error: null,
        AirPollutions: [{
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
                co: 226.97,
                no: 0,
                no2: 12.51,
                o3: 56.51,
                so2: 4.59,
                pm2_5: 5.22,
                pm10: 10.98,
                nh3: 0.34,
              },
              dt: 1672858800,
            },
          ],
        }],
      },
    });
    component = ReactTestRenderer.create(
      <Provider store={store}>
        <BrowserRouter>
          <Categories />
        </BrowserRouter>
      </Provider>,
    );
  });

  it('should render with given state from Redux store', () => {
    expect(component.toJSON()).toMatchSnapshot();
  });
});
