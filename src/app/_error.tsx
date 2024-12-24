"use client";
import React from 'react';

export default function Error({ statusCode }: { statusCode?: number }) {
  return (
    <html>
      <head>
        <title>{statusCode ? `${statusCode}: ` : ''}Une erreur est survenue</title>
      </head>
      <body>
        <div style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px',
          textAlign: 'center',
          fontFamily: 'system-ui, -apple-system, sans-serif'
        }}>
          <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>
            {statusCode === 404 ? 'Page non trouvée' : 'Une erreur est survenue'}
          </h1>
          <p style={{ marginBottom: '2rem', color: '#666' }}>
            {statusCode === 404
              ? 'Désolé, la page que vous recherchez n\'existe pas.'
              : 'Nous sommes désolés, une erreur s\'est produite.'}
          </p>
          <a
            href="/"
            style={{
              backgroundColor: '#007AFF',
              color: 'white',
              padding: '12px 24px',
              borderRadius: '6px',
              textDecoration: 'none',
              fontWeight: 500
            }}
          >
            Retour à l'accueil
          </a>
        </div>
      </body>
    </html>
  );
}
