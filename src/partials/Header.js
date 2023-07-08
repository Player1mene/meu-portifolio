import React from 'react';
import '../App.css';
import mouse from '../images/icons8-rato-24.png';

const  Header = () => {

  return (
    <div className="Header">
      
      <div className="dev-info">
        
        <div className="container">
          
          <div className="header-info">
              
              <div className="header-info-dev">
                
                <span>OLÁ, 👋 SOU</span>
                
                  <div className="title">

                    <h1>
                    REACT 
                    <a href="https://www.linkedin.com/in/gabriel-da-silva-ferreira-868704208/" target="_blank" rel='noreferrer'><i className="fa-brands fa-linkedin"></i></a>
                    <a href="https://github.com/Player1mene" target="_blank" rel='noreferrer'><i className="fa-brands fa-github"></i></a>
                    <a href="https://google.com" target="_blank" rel='noreferrer'><i className="fa-solid fa-file-zipper" ></i></a> 
                    </h1>

                    <h1>DEVELOPER</h1>
      
                  </div>

                  <div className="title-mobile">

                    <h1>
                    REACT
                    </h1>

                    <h1>DEVELOPER</h1>
                    
                  </div>
      
                <p className='p'>Meu nome é Gabriel, tenho 18 anos e estou em busca de uma<br></br> oportunidade para atuar em uma empresa, tenho 3 anos de experiência <br></br>com front-end em projetos freelancer.</p>

                <p className='p-mobile'>Meu nome é Gabriel, tenho 18 anos e estou em busca de uma<br></br> oportunidade para atuar em uma empresa, tenho 3 anos de experiência com front-end em projetos freelancer.</p>                

                
                <div className='links'>
                    <a href="https://www.linkedin.com/in/gabriel-da-silva-ferreira-868704208/" target="_blank" rel='noreferrer'><i className="fa-brands fa-linkedin"></i></a>
                    <a href="https://github.com/Player1mene" target="_blank" rel='noreferrer'><i className="fa-brands fa-github"></i></a>
                    <a href="https://google.com" target="_blank" rel='noreferrer'><i className="fa-solid fa-file-zipper" ></i></a> 
                </div>

                <img className="mouse" alt="" width="24" src={mouse} />

              </div>

              
          </div>



        </div>
      <svg id="wave" style={{transform:"rotate(0deg)", transition: "0.3s"}} viewBox="0 0 1490 490" version="1.1" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0"><stop stop-color="rgba(255, 208, 192, 1)" offset="0%"></stop><stop stop-color="rgba(255, 208, 192, 1)" offset="100%"></stop></linearGradient></defs><path style={{transform:"translate(0, 0px)", opacity:"1"}} fill="url(#sw-gradient-0)" d="M0,294L40,318.5C80,343,160,392,240,408.3C320,425,400,408,480,359.3C560,310,640,229,720,196C800,163,880,180,960,196C1040,212,1120,229,1200,196C1280,163,1360,82,1440,40.8C1520,0,1600,0,1680,49C1760,98,1840,196,1920,228.7C2000,261,2080,229,2160,253.2C2240,278,2320,359,2400,383.8C2480,408,2560,376,2640,367.5C2720,359,2800,376,2880,383.8C2960,392,3040,392,3120,351.2C3200,310,3280,229,3360,179.7C3440,131,3520,114,3600,122.5C3680,131,3760,163,3840,155.2C3920,147,4000,98,4080,73.5C4160,49,4240,49,4320,49C4400,49,4480,49,4560,98C4640,147,4720,245,4800,236.8C4880,229,4960,114,5040,98C5120,82,5200,163,5280,212.3C5360,261,5440,278,5520,310.3C5600,343,5680,392,5720,416.5L5760,441L5760,490L5720,490C5680,490,5600,490,5520,490C5440,490,5360,490,5280,490C5200,490,5120,490,5040,490C4960,490,4880,490,4800,490C4720,490,4640,490,4560,490C4480,490,4400,490,4320,490C4240,490,4160,490,4080,490C4000,490,3920,490,3840,490C3760,490,3680,490,3600,490C3520,490,3440,490,3360,490C3280,490,3200,490,3120,490C3040,490,2960,490,2880,490C2800,490,2720,490,2640,490C2560,490,2480,490,2400,490C2320,490,2240,490,2160,490C2080,490,2000,490,1920,490C1840,490,1760,490,1680,490C1600,490,1520,490,1440,490C1360,490,1280,490,1200,490C1120,490,1040,490,960,490C880,490,800,490,720,490C640,490,560,490,480,490C400,490,320,490,240,490C160,490,80,490,40,490L0,490Z"></path></svg>
      </div>

    </div>
  );
}

export default Header;
