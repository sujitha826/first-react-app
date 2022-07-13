import React from 'react';                       // React library to create UI elements using some methods
import ReactDOM from 'react-dom/client';         // To render the components/elements(vitrual DOM) to the (real DOM)browser screen, React needs React-DOM to be able to dispaly the elements to the real screen
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(  
    <App />
);

