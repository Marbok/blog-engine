import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import { store } from 'redux/store';

import Switcher from 'components/Switcher';
import Navigation from './components/Navigation';

export default function App() {

  return (
    <Provider store={store}>
      <Router>
        <Navigation />
        <Switcher />
      </Router>
    </Provider>
  )
}
