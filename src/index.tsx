import React from 'react';
import ReactDOM from 'react-dom/client';
import { Theme, presetGpnDefault } from '@consta/uikit/Theme';
import App from './App';

import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Theme preset={presetGpnDefault}>
      <App />
    </Theme>
  </React.StrictMode>
);
