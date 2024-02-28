import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar1 from './Component/Navbar';
import { Routes, Route } from "react-router-dom"
import Home from './Component/Home';
import { useState } from 'react';
import AnimeDetail from './Component/AnimeDetail';
import Topanime from './Component/Topanime';
import Seasonnow from './Component/Seasonnow';
import Mylist from './Component/Mylist';
import  Carousel1  from './Component/Carousel';

function App() {
  const [search, setSearch] = useState("")
  return (
    <div className="App">
      <Navbar1 setSearch={setSearch} />
     
      <Routes>
       
        <Route path='/' element={<Home search={search} />} />
        <Route path='/topanime' element={<Topanime search={search} />} />
        <Route path='/seasonnow' element={<Seasonnow search={search} />} />
        <Route path='/mylist' element={<Mylist search={search} />} />
        <Route path='/detail/:id' element={<AnimeDetail />} />
      </Routes>
    </div>
  );
}

export default App;
