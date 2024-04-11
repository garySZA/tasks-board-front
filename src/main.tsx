import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter } from 'react-router-dom';
import { TasksBoardApp } from './TasksBoardApp';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <TasksBoardApp />
    </BrowserRouter>
  </React.StrictMode>,
)
