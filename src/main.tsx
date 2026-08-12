import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import { CollectionProvider } from './context/CollectionContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CollectionProvider>
      <App />
      <ToastContainer position="bottom-right" />
    </CollectionProvider>
  </StrictMode>
);