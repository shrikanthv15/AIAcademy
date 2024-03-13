import './offers.css';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
function Offers() {
    useEffect(() => {
        AOS.init({
          duration: 1000, // Duration of the animation
          once: false, // Only animate once
        });
      }, []);
    return (
<div className="offers">
<h1 style={{ left: '3%',top: '5%', position: "absolute"}}>Workshops</h1>
<button class="cta">
  <span class="hover-underline-animation"> View All </span>
  <svg
    id="arrow-horizontal"
    xmlns="http://www.w3.org/2000/svg"
    width="30"
    height="10"
    viewBox="0 0 46 16"
  >
    <path
      id="Path_10"
      data-name="Path 10"
      d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
      transform="translate(30)"
    ></path>
  </svg>
</button>

<div className='workshopflex'>
<div className="workshopcard" data-aos="fade-right">
<h2>Generative AI</h2>
<div className="content">
    <h3>Date: </h3>
    <h3>Time:</h3>
    <h3>Venue:</h3>
    <br></br>
  <p>Unlock the world of creative possibilities with Generative AI. 
    Explore the intersection of artificial intelligence and creativity. 
    Learn about the applications of Generative AI in art, design, and beyond.</p>
</div>
<div className='buttondiv'>
<button  className='button2'> Learn More
</button>
</div>
</div>
<div className="workshopcard" data-aos="fade-up">
<h2>Machine Learning</h2>
<div className="content">
<h3>Date: </h3>
    <h3>Time:</h3>
    <h3>Venue:</h3>
    <br></br>
<p>Unlock the world of creative possibilities with Generative AI. 
    Explore the intersection of artificial intelligence and creativity. 
    Learn about the applications of Generative AI in art, design, and beyond.</p>
  
</div>
<div className='buttondiv'>
<button className='button2'> Learn More
</button>
</div>
</div>
<div className="workshopcard" data-aos="fade-left">
<h2>Web3</h2>
<div className="content">
<h3>Date: </h3>
    <h3>Time:</h3>
    <h3>Venue:</h3>
    <br></br>
<p>Unlock the world of creative possibilities with Generative AI. 
    Explore the intersection of artificial intelligence and creativity. 
    Learn about the applications of Generative AI in art, design, and beyond.</p>
</div>
<div className='buttondiv'>
<button  className='button2'> Learn More
</button>
</div>
</div>

</div>
</div>
 );
}

export default Offers;
