import React from 'react';
import '../App.css';

function Header() {

  return (
    <div className="Header">
      
      <div className="dev-info">
        
        <div className="container">
          
          <div className="row header-info">
              
              <div className="col-md-12 header-info-dev">
                
                <span>Olá, 👋 sou</span>
                
                  <div className="title">

                    <h1>

                    REACT <a href="google.com"><i className="fa-solid fa-file-zipper"></i></a> 
                    <a href="google.com"><i class="fa-brands fa-github"></i></a>
                    <a href="google.com"><i class="fa-brands fa-linkedin"></i></a>
                    </h1>

                    <h1>DEVELOPER</h1>
      
                  </div>
      
                <p>Meu nome é Gabriel, tenho 18 anos e estou em busca de uma oportunidade <br/>para atuar
                em uma empresa, tenho 3 anos de experiência<br/> com front-end em projetos freelancer.</p>
      
              </div>
      
          </div>
      
        </div>
      
      </div>

    </div>
  );
}

export default Header;