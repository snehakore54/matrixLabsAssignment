import React from 'react';
import './Features.css';

const Features = () => {
  return (
    <div className='container-fluid bg-color'>
      <div className='row justify-content-center'>
      
        <div className='card-container col-12 col-lg-4 d-flex justify-content-center mx-2 mb-3 rounded-top-left'>
          <div className='text-center'> {/* Center the content */}
            <img src="/Rectangle 3.png" alt='rectangle' className='image' />
            <h2 className='header'>Trade Optimizer</h2>
            <h5 className='text'>Find the right moments to buy or sell, with personalized trade suggestions designed to help you make the most of every opportunity.</h5>
          </div>
        </div>
        <div className='card-container col-12 col-lg-4 d-flex justify-content-center mx-2 mb-3'>
          <div className='text-center'>
            <h2 className='header'>Market Insight</h2>
            <h5 className='text'>Stay ahead of the market. Get real-time updates on the market trends, track top traders' movements, and spot signals from key influencers.</h5>
            <hr style={{ color: 'white' }} />
          </div>
        </div>
        <div className='card-container col-12 col-lg-4 d-flex justify-content-center mx-2 mb-3 rounded-top-right'>
          <div className='text-center'>
            <img src="/l1NtBTj8px6kzRLIscIs56ETWRE.svg.png" alt='imgone' className='image' />
            <h2 className='header'>Risk Guard</h2>
            <h5 className='text'>Get alerts on market swings and potential risks before they impact your portfolio. This agent helps you navigate volatility and stay prepared for anything.</h5>
          </div>
        </div>
      </div>
    
      <div className='row justify-content-center'>
        <div className='card-container col-12 col-lg-6 d-flex justify-content-center mx-2 mb-3 rounded-bottom-left'>
          <div className='text-center'>
            <h2 className='header'>Portfolio Sync</h2>
            <h5 className='text'>Easily manage your portfolio. you'll always know what you own, how it's performing, and where it's headed.</h5>
          </div>
        </div>
        <div className='card-container col-12 col-lg-6 d-flex justify-content-center mx-2 mb-3 rounded-bottom-right'>
          <div className='text-center'>
            <h2 className='header'>Opportunity Scout</h2>
            <h5 className='text'>Find exciting new projects, events, and tokens that others might be missing. Identifying promising opportunities early, so you never miss out on the next big thing.</h5>
            <div>
              <img src='/2034690_271695-P5GZLA-551 1.png' alt="mirror" className='mirImg' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
