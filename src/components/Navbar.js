/*import React from 'react'
import './Navbar.css'
import 'bootstrap/dist/css/bootstrap.min.css';


const Navbar = () => {
  return (
     <div>
     <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top d-sm-none">
       <div className="container">
        <div className="img">
        <img src='\Frame43094logo.png' alt="Logo" />
        </div>
        <div className="collapse navbar-collapse">
            <div className="navItems navbar-nav">
                <h3 className="nav-link active">
                    Features
                </h3>
                <h3 className="nav-link">Why Us</h3>
                <h3 className="nav-link">Tokenomics</h3>
                <h3 className="nav-link">Roadmap</h3>
            </div>
            <div className="d-none d-lg-block ml-5">
                <button className="logBtn mr-3">Log in</button>
                <button className="whiteBtn">Whitepaper</button>
            </div>
        </div>
       </div>
     </nav>

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

     </div>
    

  )
}

export default Navbar
*/
import React from 'react';
import './Navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="navbar-container">
        <div className="img">
          <img src="./Frame43094logo.png" alt="Logo" />
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
          <div className="nav-wrapper"> {/* Wrapper for styling */}
            <div className="navItems navbar-nav">
              <a className="nav-link active" href="#sectionFeatures">
                Features<span className="sr-only">(current)</span>
              </a>
              <a className="nav-link" href="#sectionWhyUs">Why Us</a>
              <a className="nav-link" href="#sectionTokenomics">Tokenomics</a>
              <a className="nav-link" href="#sectionRoadmap">Roadmap</a>
            </div>
          </div>
          <div className="d-none d-lg-block ml-lg-5">
            <button className="logBtn mr-3">Log in</button>
            <button className="whiteBtn">Whitepaper</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;