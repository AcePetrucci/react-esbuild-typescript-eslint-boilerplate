import React from 'react';
import ReactDOM from 'react-dom';

// CSS Defaults
import '../assets/scss/normalize.css';
import '../assets/scss/app.scss';

// Routes
import { Routes } from './config';

/**
 * Render the React Bootstrap
 */

ReactDOM.render(<Routes />, document.getElementById('root'));
