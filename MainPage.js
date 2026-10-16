// MainPage.js (or equivalent landing page component)
import React from 'react';
import { useNavigate } from 'react-router-dom';

function MainPage() {
    const navigate = useNavigate();

    const handleGetStarted = () => {
        navigate('/home'); // or wherever your main app routes
    };

    return (
        <div className="landing-container" style={{ textAlign: 'center', padding: '50px' }}>
            {/* Required: Project Title or Site Name */}
            <h1>GiftLink</h1>
            
            {/* Required: Brief description or tagline */}
            <p className="tagline">Sharing gifts, spreading joy within your community.</p>
            
            {/* Required: 'Get Started' button */}
            <button 
                onClick={handleGetStarted} 
                className="btn-get-started"
                style={{ padding: '10px 20px', fontSize: '18px', cursor: 'pointer', marginTop: '20px' }}
            >
                Get Started
            </button>
        </div>
    );
}

export default MainPage;
