import React from 'react';
import Banner from './Components/Banner/Banner'
import Projects from './Components/Projects/Projects'
import About from './Components/About/About'
import Footer from './Components/Footer/Footer'

import './App.css';


function App() {
  return (
    <div className="App">
      <Banner/>
      <About/>
      <Projects/>
      <Footer/>
    </div>
  );
}

export default App;
