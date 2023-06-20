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
                
                <span>Olá, 👋 sou</span>
                
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
      
      </div>

    </div>
  );
}

export default Header;
