import React from 'react';
import Banner from './Components/Banner/Banner'
import Projects from './Components/Projects/Projects'
import About from './Components/About/About'
import GitHub from './Components/Github/Github'
import Footer from './Components/Footer/Footer'

import './App.css';


function App() {
  return (
    <div className="App">
      <Banner/>
      <About/>
      <GitHub/>
      <Projects/>
      <Footer/>
    </div>
  );
}

export default App;
