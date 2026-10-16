// MainPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

function MainPage() {
    const navigate = useNavigate();

    const handleGetStarted = () => {
        // Redirects user when clicking Get Started
        navigate('/login');
    };

    return (
        <div className="main-container" style={{ textAlign: 'center', padding: '80px 20px', fontFamily: 'Arial, sans-serif' }}>
            {/* Project Title / Site Name */}
            <h1 style={{ fontSize: '3rem', color: '#333', marginBottom: '20px' }}>
                GiftLink
            </h1>
            
            {/* Brief description or tagline */}
            <p className="tagline" style={{ fontSize: '1.25rem', color: '#666', marginBottom: '30px' }}>
                Sharing gifts, spreading joy, and connecting your community together.
            </p>
            
            {/* 'Get Started' Button */}
            <button 
                onClick={handleGetStarted} 
                className="btn-get-started"
                style={{
                    backgroundColor: '#007bff',
                    color: 'white',
                    padding: '12px 28px',
                    fontSize: '1.1rem',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                }}
            >
                Get Started
            </button>
        </div>
    );
}

export default MainPage;
