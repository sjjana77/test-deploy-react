import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import Blog from './Components/Blog'
// import {BrowserRouter, Routes, Route} from "react-router-dom"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
          {/* <BrowserRouter>
        <Routes>
        <Route path ="/blog" element={<Blog/>}/>
        <Route path ="/" element={}/>
        </Routes>
        </BrowserRouter> */}
        <App/>
  </React.StrictMode>
);

