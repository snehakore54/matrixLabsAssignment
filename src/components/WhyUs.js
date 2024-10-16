/*import React from 'react'
import './WhyUs.css'  // Assuming you're adding styles here.

const WhyUs = () => {
  return (
    <div>
      <h1 className='head text-white'>About EthAi</h1>
      <h5 className='text'>At EthAi, we're all about making crypto trading easier and more intuitive. We provide tools that help traders keep up with all new market trends and track top traders' movements.</h5>
      <button className='button'>Read More</button>

      <div className='container-c'>
        <div className='column col-12 col-lg-6 d-flex justify-content-center'>
          <div className='card'>
            <img src="\graph.png" alt='stay' className='icon'/>
            <h2 className='header'>Stay Ahead</h2>
            <h5 className='text'>No more guesswork—get clear, trustable insights.</h5>
          </div>
          <div className='card'>
            <img src="\Vector (1).png" alt='assets' className='icon'/>
            <h2 className='header'>Know Your Assets</h2>
            <h5 className='text'>Always stay on top of how your investments are performing.</h5>
          </div>
        </div>

        <div className='column col-12 col-lg-6 d-flex justify-content-center'>
          <div className='card'>
            <img src='\Vector.png' alt='vector' className='icon'/>
            <h2 className='header'>Simple, Not Overwhelming</h2>
            <h5 className='text'>Our tools are designed to make complex market analysis easy to understand and act on.</h5>
          </div>
          <div className='card'>
            <img src='\Future Technology.png' alt='future' className='icon'/>
            <h2 className='header'>Future-Proof</h2>
            <h5 className='text'>We're constantly improving, adding new features to help you make the most informed decisions possible.</h5>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhyUs;*/

import React from 'react';
import './WhyUs.css';  // Assuming you're adding styles here.

const WhyUs = () => {
  return (
    <div className='cntiner'>
    <div className='center-container'>
      <h1 className='text-white white'>About EthAi</h1>
      <h5 className='text'>
        At EthAi, we're all about making crypto trading easier and more intuitive.
        We provide tools that help traders keep up with all new market trends and
        track top traders' movements.
      </h5>
      <button className='whiteButton'>Read More</button>
    </div>

      <div className='container-c'>
        <div className='column'>
          <div className='card'>
            <img src="/graph.png" alt='stay' className='icon'/>
            <h2 className='header'>Stay Ahead</h2>
            <h5 className='text'>No more guesswork—get clear, trustable insights.</h5>
          </div>
          <div className='card'>
            <img src="/Vector (1).png" alt='assets' className='icon'/>
            <h2 className='header'>Know Your Assets</h2>
            <h5 className='text'>Always stay on top of how your investments are performing.</h5>
          </div>
        </div>

        <div className='column'>
          <div className='card'>
            <img src='/Vector.png' alt='vector' className='icon'/>
            <h2 className='header'>Simple, Not Overwhelming</h2>
            <h5 className='text'>Our tools are designed to make complex market analysis easy to understand and act on.</h5>
          </div>
          <div className='card'>
            <img src='/Future Technology.png' alt='future' className='icon'/>
            <h2 className='header'>Future-Proof</h2>
            <h5 className='text'>We're constantly improving, adding new features to help you make the most informed decisions possible.</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyUs;

