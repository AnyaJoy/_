import React from 'react'
import '../../styles/about.scss'
import Divider from '../divider';

function About() {
  return (
    <>
      <span id='about'></span>
      <Divider header="About me"/>
      <div className="about-container w-10/12 sm:w-7/12">
        <h4 className='text-center mb-12 -mt-5'>I used to be an acrobat, a nursery teacher and now a software developer.</h4>
        {/* <div className='flex justify-center w-fit'> */}

          <div className="carousel-wrapper">
            <div className="carousel-container">
              <div className="carousel">
                <div className="image-one"></div>
                <div className="image-two"></div>
                <div className="image-three"></div>
              </div>
            </div>
          {/* </div> */}
        </div>
            <h4 className="my-12 text-justify">
              Sport has taught me that talent is helpful, but it is persistence and resilience that makes you a champion.<br /><br />
              Children have taught me that love fixes everything, and that there’s always a solution even if it takes you 50 attempts to find it.<br /><br />
              And coding gave me a gift of being able to craft ideas into reality through the synergy of logic and art. Ideas that could serve millions.
            </h4>
      </div>
    </>
  );
}

export default About