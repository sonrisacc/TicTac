import React from 'react';
import { render } from 'react-dom';

import Game from './Game';

const renderApp = () => {
  render(<Game />, document.getElementById('app'));
};
// render App for the same time
renderApp();
