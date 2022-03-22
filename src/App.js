import React from 'react';
import { Routes, Route, Link} from 'react-router-dom';
import Inquiries from './components/Inquiries'
import NavBar from './components/NavBar'
import Form from './components/Form'

import '../src/scss/app.scss'


function App() {
  return (
    <div className="app">
      <NavBar />
      <div className="content">
        <Routes>
          <Route path="*" element={<Form/>} exact/>
          <Route path="/Inquiries" element={<Inquiries  />} />
        </Routes>
        
      </div>
      </div>
  );
}

export default App;
