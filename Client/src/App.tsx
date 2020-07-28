import React, { useEffect, useState } from 'react';
// import api from './services/api'
import GlobalStyles from './styles/GlocalStyles'
import Layout from './components/Layout'
import Login from './components/Login'





function App() {

  const [name, setName] = useState('')


  return (
    <div >
      {name !== '' ?
        <Layout name={name} /> :
        <Login setName={setName} />
      }
      <GlobalStyles />
    </div>
  );
}

export default App;
