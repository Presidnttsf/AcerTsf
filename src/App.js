import './App.css';
import React, { useEffect } from 'react'
import NavbarComponent from './Components/Navbar';
import RoutersComponent from './Components/Routers';
import IMAGES from './Data/images/imagesData';
import { Link } from "react-router-dom";
import { useState } from "react";



function App() {

  const [show, setShow] = useState(true)
  const [NavShow, NavsetShow] = useState(false)


  const Text = () => <div className='App'>
    <img src={IMAGES[4]} alt="cryptography" width={300} /> <br />
    <h3>Please click to start TSF React practice app😉 </h3>  <br />
    <button onClick={combine}><Link to="/home" className='navlink'>CLICK ME</Link></button>
    {/* plz explain how to avoid app.js with condition */}
  </div >
  const NavBar = () => <NavbarComponent />

  const handleClick = () => setShow(false)

  const NavhandleClick = () => NavsetShow(true)

  // const combine = () => { return handleClick() + NavhandleClick() }
  const combine = () => {
    setShow(false);
    NavsetShow(true);
  }

  return (
    <div>



      {NavShow ? <NavBar /> : null}

      <RoutersComponent />
      {show ? <Text /> : null}

    </div >
  );
}

export default App;
