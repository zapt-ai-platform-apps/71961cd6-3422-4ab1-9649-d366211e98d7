import React from 'react';
import ReactDOM from 'react-dom/client';
import * as Sentry from '@sentry/browser';

// Initialize Sentry for error tracking
Sentry.init({
  dsn: import.meta.env.VITE_PUBLIC_SENTRY_DSN,
  environment: import.meta.env.VITE_PUBLIC_APP_ENV,
  initialScope: {
    tags: {
      type: 'frontend',
      projectId: import.meta.env.VITE_PUBLIC_APP_ID,
    },
  },
});

// Minimal App component
function App() {
  return (
    <div style={{
      minHeight: '100vh',
      width: '100%',
      boxSizing: 'border-box',
      margin: 0,
      padding: '1rem',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      backgroundColor: '#ffffff',
      color: '#1e293b'
    }}>
      <main style={{ flex: '1 0 auto' }}>
        <h1>Hello, Park Appeal UK!</h1>
        <p>Welcome to the newly rebuilt Park Appeal UK application.</p>
      </main>
      <footer style={{ flexShrink: 0, textAlign: 'center', borderTop: '1px solid #e5e7eb', padding: '1rem' }}>
        Made on <a href="https://www.zapt.ai" target="_blank" rel="noopener noreferrer">ZAPT</a>
      </footer>
    </div>
  );
}

// Insert the Umami script for production environment
if (import.meta.env.VITE_PUBLIC_APP_ENV !== 'development') {
  const script = document.createElement('script');
  script.defer = true;
  script.src = 'https://cloud.umami.is/script.js';
  script.setAttribute('data-website-id', import.meta.env.VITE_PUBLIC_UMAMI_WEBSITE_ID);
  document.head.appendChild(script);
}

// Render the app
ReactDOM.createRoot(document.getElementById('root')).render(<App />);