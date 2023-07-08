import React from 'react';
import '../App.css';
import template01 from '../images/template-legasdasdal.png';
import template02 from '../images/template-legasdasdal02.png';

const  Projects = () => {

  return (
    <div className="Projects">
      
     <div className='Projects-container'>

        <div className='container'>

            <div className='row'>
                <div className='col-md-6'>
                    <div className='project-single'>
                            <img src={template01}/>
                            <div className='project-info'>
                                <h2>Netflix Clone</h2>
                                <p>Um clone da netflix com uso e manipulção da API Tmdb</p>
                            </div>
                            <div className='project-links'>
                            <a href="https://netflix-react-project.vercel.app/" target="_blank" rel='noreferrer'><i class="fa-solid fa-globe"></i> Visitar Pagina</a>
                            <a href="https://github.com/Player1mene/netflix-react-project/tree/main" target="_blank" rel='noreferrer'><i className="fa-brands fa-github"></i>Codigo no GitHub</a>
                            </div>
                    </div>
                </div>
                
                <div className='col-md-6'>
                    <div className='project-single'>      
                            <img src={template02}/>
                            <div className='project-info'>
                                <h2>Cartão Interativo</h2>
                                <p>Um formulario de cartão de crédito interativo.</p>
                            </div>
                            <div className='project-links'>
                            <a href="https://react-interative-card-with-details-front-end.vercel.app/" target="_blank" rel='noreferrer'><i class="fa-solid fa-globe"></i> Visitar Pagina</a>
                            <a href="https://github.com/Player1mene/react-interative-card-with-details" target="_blank" rel='noreferrer'><i className="fa-brands fa-github"></i> Codigo no GitHub</a>
                            </div>                 
                    </div>        
                </div>
            </div>

        </div>

     </div>

    </div>
  );
}

export default Projects;
