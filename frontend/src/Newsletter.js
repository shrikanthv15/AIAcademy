import './Newsletter.css';

function Newsletter() {
    return (
<div className="Newsletter">
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
<h1 style={{ marginTop: "3%", marginLeft: '3%'}}>Newsletter</h1>

<div className="newsletterflex">
    <div className='card3'>
   < h2 className="newstitle"> Machine Learning</h2>
<div className="content">
<p>Unlock the world of creative possibilities with Generative AI. 
    Explore the intersection of artificial intelligence and creativity. 
    Learn about the applications of Generative AI in art, design, and beyond.</p>
  
    </div>
    <div className="byname">
    <p> - Shrikanth Vilvadrinath</p>

</div>
    <button class="button1">Learn More</button>
    </div>
    <div className='card3'>
   < h2 className="newstitle"> Machine Learning</h2>
<div className="content">
<p>Unlock the world of creative possibilities with Generative AI. 
    Explore the intersection of artificial intelligence and creativity. 
    Learn about the applications of Generative AI in art, design, and beyond.</p>
  
    </div>
    <div className="byname">
    <p> - Shrikanth Vilvadrinath</p>

</div>
    <button class="button1">Learn More</button>

    </div>
    <div className='card3'>
   < h2 className="newstitle">Machine Learning</h2>
<div className="content">
<p>Unlock the world of creative possibilities with Generative AI. 
    Explore the intersection of artificial intelligence and creativity. 
    Learn about the applications of Generative AI in art, design, and beyond.</p>
  
    </div>
    <div className="byname">
    <p> - Shrikanth Vilvadrinath</p>

</div>
    <button class="button1">Learn More</button>
    </div>


</div>
</div>
 );
}

export default Newsletter;
