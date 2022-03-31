import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as EventProvider } from '@/hooks/useBus';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '@/store';
import './index.css';
import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <EventProvider>
        <App />
      </EventProvider>
    </Router>
  </Provider>,
  document.getElementById('root'),
);
