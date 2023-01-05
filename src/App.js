import { Provider } from 'react-redux';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Categories from './components/Categories';
import Store from './redux/store';
import Details from './components/Details';

function App() {
  return (
    <Provider store={Store}>
      <Routes>
        <Route path="/" element={<Categories />} />
        <Route path="/Details" element={<Details />} />
      </Routes>
    </Provider>
  );
}

export default App;
