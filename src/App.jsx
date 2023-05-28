import './App.css';

import {Routes, Route} from 'react-router-dom'
import Homepage from './components/Homepage';
import EstatePage from './components/EstatePage';
import ListingPage from './components/ListingPage';
import AboutUs from './components/AboutUs';
import Layout from './components/Layout';
import Pagenotfound from './components/Pagenotfound';
// userParams


function App() {
  return (
    <Routes>
      <Route path="/"  element={<Layout/>}>
        <Route path="/"  element={<Homepage/>}/>
        <Route path='/listings' element={<ListingPage/>}></Route>
        <Route path='/about' element={<AboutUs/>}></Route>
        <Route path='*' element={<Pagenotfound/>}></Route>
        <Route path='/estate' >
          <Route path=':id' element={<EstatePage/>}></Route>
        </Route>
      </Route>
    </Routes>

  );
}

export default App;