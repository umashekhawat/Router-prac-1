
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx'; 
import './index.css';

console.log('main.jsx: mounting app');

const rootEl = document.getElementById('root');
if (!rootEl) {
  console.error('No #root element found in index.html');
} else {
  const root = createRoot(rootEl);
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  );
}