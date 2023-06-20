import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './partials/Header';
import Loader from './partials/Loader';
import Projects from './partials/Projects';

function App() {

  const [loading, setLoading] = useState(true)

  useEffect(()=>{

    const onPageLoad = () =>{
      setLoading(false);
    }

    if(document.readyState === 'complete'){
      onPageLoad();
    } else {
      window.addEventListener('load',onPageLoad);
    }
    return () => window.addEventListener('load',onPageLoad);
  },[])

  return (
    <div className="App">
      {loading && <Loader />}
      <Header />
      <Projects />
    </div>
  );
}

export default App;
