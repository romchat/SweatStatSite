import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import StatPage from './pages/facebookStat';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<StatPage />, document.getElementById('root'));
registerServiceWorker();
