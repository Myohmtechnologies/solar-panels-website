"use client";
import React from 'react';

export default function Error() {
  return (
    <div style={{
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh', 
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f0f0f0'
    }}>
      <div style={{
        textAlign: 'center',
        padding: '20px',
        backgroundColor: 'white',
        borderRadius: '8px',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
      }}>
        <h1 style={{ color: 'red' }}>Erreur Serveur</h1>
        <p>Un problème technique est survenu</p>
        <a 
          href="/" 
          style={{
            display: 'inline-block',
            marginTop: '15px',
            padding: '10px 20px',
            backgroundColor: 'red',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '5px'
          }}
        >
          Retour à l&apos;accueil
        </a>
      </div>
    </div>
  );
}
