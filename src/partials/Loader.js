import React from 'react';
import '../App.css';

const  Loader = () => {

  return (
    <div className="Loader">
      <div class="spinner-box">
        <div class="solar-system">
          <div class="earth-orbit orbit">
            <div class="planet earth"></div>
            <div class="venus-orbit orbit">
              <div class="planet venus"></div>
              <div class="mercury-orbit orbit">
                <div class="planet mercury"></div>
                <div class="sun"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h2>Carregando <br></br><p className='loader-p'>Aguarde até essa tela desaparecer</p></h2>
    </div>
  );
}

export default Loader;
