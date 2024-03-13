import './Events.css';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
function Events() {
        useEffect(() => {
                AOS.init({
                  duration: 1000, // Duration of the animation
                  once: false, // Only animate once
                });
              }, []);
    return (
<div className="Events">
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
<h1 style={{ marginTop: "3%", marginLeft: '3%'}}>Events</h1>

        <div className="card2" data-aos="zoom-in">
            <div className='cardesc'>
            <h2>Event Title 1</h2>
            <p>Date: July 15, 2024</p>
            <p>Location: Virtual</p>
            <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero sed
              libero maximus, sit amet malesuada nulla facilisis. Suspendisse nec erat non augue viverra commodo.
            </p>
            <a href="#" className="event-link">Learn More</a>
            </div>
            
        </div>
        <div className="thesvg">
        
</div>
<div className="card2" style={{marginLeft: "50%", marginTop: "10%" }} data-aos="zoom-in"> 
<div className='cardesc'>
            <h2>Event Title 1</h2>
            <p>Date: July 15, 2024</p>
            <p>Location: Virtual</p>
            <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero sed
              libero maximus, sit amet malesuada nulla facilisis. Suspendisse nec erat non augue viverra commodo.
            </p>
            <a href="#" className="event-link">Learn More</a>
            </div>
            
        </div>

        

</div>
 );
}

export default Events;
