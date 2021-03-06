import React from 'react';
import ReactDOM from 'react-dom';

// CSS Defaults
import '../assets/scss/normalize.css';
import '../assets/scss/app.scss';

// Routes
import { Routes } from './config';

// Styled Components
import { MainWrapper } from './styled';

/**
 * Render the React Bootstrap
 */

 ReactDOM.render(
  <MainWrapper>
    <Routes />
  </MainWrapper>,
  document.getElementById('root'),
);

