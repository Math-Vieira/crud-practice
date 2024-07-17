import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App.tsx';

const deferRender = async () => {
  const { worker } = await import('./mocks/browser.js');
  await worker.start();
};

deferRender().then(() => {
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
});
