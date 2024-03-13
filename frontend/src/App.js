
import './App.css';
import NavbarApp from './Nabar';
import Newsletter from './Newsletter';
import Offers from './offers';
import Events from './Events';
import Resources from './Resources';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of the animation
      once: false, // Only animate once
    });
  }, []);
  return (
    <div className="App">
     
      <NavbarApp/>
     
      <div className='overview'>
        <h1>Overview</h1>
        <div className="overviewdiv">
        <h2>Welcome to AI Academy</h2>
        <br></br>
        <h4>Discover, Learn, and Grow with Us:</h4>
        <br></br>
        <h6>At AI Academy, we blend education and innovation to provide a dynamic learning experience.<br></br>
           Explore workshops, newsletters, and rich learning content crafted for learners of all levels.</h6>
           <br></br>
        <h2>What We Offer</h2> <br></br>
        <div className="cardsflex">
          <div className="card1" data-aos="fade-right">
          <div className="card1title">
            <h3>Diverse Workshops</h3>
          </div>
          
          <h2>Hands-on learning experiences covering a wide range of topics.</h2>
          <div className='imagediv1'></div>
          </div>
          <div className="card1" data-aos="fade-up">
          <div className="card1title">
            <h3>Informative Newsletters</h3>
          </div>
          <h2>Stay updated with exclusive content and industry insights.</h2>
          <div className='imagediv2'></div>
</div>
<div className="card1" data-aos="fade-left">
<div className="card1title">
            <h3>Learning Content/Guides</h3>
          </div>
        <h2>Access a library of materials created by industry experts.</h2>
        
<div className='imagediv3'></div>
</div>
          </div>
        </div>


      </div>
<Offers/>
    <Newsletter/> 
    <Events/>
    <Resources/>
     </div>
  );
}

export default App;
