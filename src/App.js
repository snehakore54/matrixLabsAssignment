import React from 'react';
import Features from './components/Features';
import WhyUs from './components/WhyUs'
import Tokenomics from './components/Tokenomics'
import Roadmap from './components/Roadmap'
import ExploreOurDApp from './components/ExploreOurDApp';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className=''>
      <div className='app-container'>
      
      
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div className="container">
                <div className='img'>
                <img src='\Frame43094logo.png' alt="Logo" />
                </div>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navItems navbar-nav">
                        <a className="nav-link active" href="#sectionFeatures">
                            Features<span className="sr-only">(current)</span>
                        </a>
                        <a className="nav-link" href="#sectionWhyUs">Why Us</a>
                        <a className="nav-link" href="#sectionTokenomics">Tokenomics</a>
                        <a className="nav-link" href="#sectionRoadmap">Roadmap</a>
                    </div>
                    <div className="d-none d-lg-block ml-5">
                        <button className="logBtn mr-3">Log in</button>
                        <button className="whiteBtn">Whitepaper</button>
                    </div>
                </div>
            </div>
        </nav>




      <video autoPlay muted loop className="background-video">
        <source src={process.env.PUBLIC_URL + '/-c85c-4755-a1c0-4646ee276bd5.mp4'} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      <div className='content'>
        <h1 className='hd'>When Innovation Meets <span className='btnStyle'>Investment</span></h1>
        <h3 className='txt'>Empowering Trading Through Technology</h3>
        <button className='button'>Open dApp</button>
      </div>
    </div>

    <div className="container-ttl">
    <div id="sectionFeatures" className="my-5"><Features/></div>
    <div id="sectionWhyUs" className="my-5"><WhyUs/></div>
    <div id="sectionTokenomics" className="my-5"><Tokenomics/></div>
    <div id="sectionRoadmap" className="my-5"><Roadmap/></div>
    <ExploreOurDApp/>

    <div className='app-last-bg'>

      <div className='cntimg'>
       <img src="\Frame43094logo.png" alt='EthAi'/>
       <img src='\Frame 213.png' alt='social'/>
      </div>

      <div className='cntimg placeholder-cmnt'>
        <h1 className='header'>"Designed for trader of today, just like you."</h1>
        <div className=''>
        <input type="text" placeholder="What's your work email?" class="search-input"/>
        <button class="get-started-btn">Get Started</button>
        </div>
       
      </div>

    </div>
    </div>
</div>
  );
}

export default App