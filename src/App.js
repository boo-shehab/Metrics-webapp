import { Provider } from 'react-redux';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Categories from './components/Categories';
import Store from './redux/store';
import Details from './components/Details';

function App() {
  return (
    <BrowserRouter>
      <Provider store={Store}>
        <Routes>
          <Route path="/" element={<Categories />} />
          <Route path="/Details" element={<Details />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
