import React from 'react';
import ReactDOM from 'react-dom/client';
import { Analytics } from '@vercel/analytics/react';
import App from './App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    {/* Vercel's own page-view/visitor analytics — cookie-less, so it
        doesn't trigger a UK GDPR/PECR consent banner. Renders nothing
        visible; just reports pageviews back to the Vercel dashboard.
        Still needs "Web Analytics" turned on for this project in the
        Vercel dashboard (Project → Analytics tab) — that toggle can only
        be flipped from your account, not from here. */}
    <Analytics />
  </React.StrictMode>
);
