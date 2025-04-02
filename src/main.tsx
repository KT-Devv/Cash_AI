import './index.css';
import App from './App.tsx';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { GoogleOAuthProvider } from '@react-oauth/google';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* !! Needs to be stored with .env variable but it's causing problems */}
    <GoogleOAuthProvider clientId='83908429245-4rdphq4ls4hhpc60kl8ucsng600b8rlk.apps.googleusercontent.com'>
      <App/>
    </GoogleOAuthProvider>
  </StrictMode>
);
