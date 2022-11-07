
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar.jsx';
import About from './Pages/About';
import Comments from './Pages/Comments';
import Dashboard from './Pages/Dashboard.jsx';
import Login from './Pages/Login';
import MyServices from './Pages/Myservices';
import Products from './Pages/Product';
import ProductList from './Pages/ProductList';
import Register from './Pages/Register';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { useEffect } from 'react';

function App() {
  const dispatch = useDispatch();
  const getLocation = async()=>{
    await axios.get('https://api.bigdatacloud.net/data/reverse-geocode-client').then((res)=>{
     dispatch({
       type:"CountryName",
       payload:res.data.countryCode
     })
   }).catch((err)=>{
     throw err
   })
 }

 useEffect(() => {
    getLocation();
 })
 
  
  return (
    <div className="App">
     <BrowserRouter>
    <Sidebar>
    <Navbar/>
    <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/comments' element={<Comments/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/myservices' element={<MyServices/>}/>
      <Route path='/products' element={<Products/>}/>
      <Route path='/productlist' element={<ProductList/>}/>
      <Route path='/' element={<Dashboard/>}/>
     </Routes>
    </Sidebar>
     </BrowserRouter>
    </div>
  );
}

export default App;
