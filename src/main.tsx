import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { TasksBoardApp } from './TasksBoardApp';
import { store } from './store';

import './styles.css';
import { TanStackProvider } from './plugins';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <TanStackProvider>
      <Provider store={ store }>
        <BrowserRouter>
          <TasksBoardApp />
        </BrowserRouter>
      </Provider>
    </TanStackProvider>
  </React.StrictMode>,
)
