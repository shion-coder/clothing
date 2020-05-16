import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import React from 'react';
import ReactDOM from 'react-dom';

import Root from 'config/root';

import * as serviceWorker from './serviceWorker';

/* -------------------------------------------------------------------------- */

ReactDOM.render(<Root />, document.getElementById('root'));

serviceWorker.register();
