import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useRouteError } from 'react-router-dom';

const Error = () => {
    const navigate = useNavigate();
    const error = useRouteError();
    console.log(error.error.message);
    
    const handleGoBack = () => {
        navigate(-1); // Navigates to the previous page
    };

    return (
        <div style={styles.container}>
            <div style={styles.errorBox}>
                <h1 style={styles.title}>404</h1>
                <p style={styles.subtitle}>Page Not Found</p>
                <p style={styles.message}>
                    Sorry, the page you are looking for doesn’t exist. It may have been moved or deleted.<br />
                    {error.error.message}
                </p>
                <div style={styles.buttonContainer}>
                    <button onClick={handleGoBack} style={styles.button}>
                        🔙 Go Back
                    </button>
                    <button onClick={() => navigate('/')} style={styles.button}>
                        🏠 Return Home
                    </button>
                </div>
            </div>
            <div style={styles.bgOverlay}></div>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        position: 'relative',
        overflow: 'hidden',
        fontFamily: "'Poppins', sans-serif",
        background: 'linear-gradient(135deg, #ff6e7f 0%, #bfe9ff 100%)',
    },
    errorBox: {
        zIndex: 1,
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        padding: '50px',
        borderRadius: '15px',
        textAlign: 'center',
        boxShadow: '0 15px 30px rgba(0, 0, 0, 0.2)',
        maxWidth: '500px',
        width: '100%',
        animation: 'fadeIn 1.5s ease-in-out',
    },
    title: {
        fontSize: '80px',
        fontWeight: '700',
        margin: '0',
        color: '#ff6e7f',
        textShadow: '2px 2px 10px rgba(0, 0, 0, 0.1)',
    },
    subtitle: {
        fontSize: '24px',
        fontWeight: '500',
        margin: '10px 0',
        color: '#333',
    },
    message: {
        fontSize: '16px',
        color: '#666',
        margin: '20px 0',
    },
    buttonContainer: {
        display: 'flex',
        justifyContent: 'center',
        gap: '20px',
        marginTop: '20px',
    },
    button: {
        padding: '12px 30px',
        fontSize: '16px',
        fontWeight: '600',
        color: '#fff',
        backgroundColor: '#ff6e7f',
        border: 'none',
        borderRadius: '50px',
        cursor: 'pointer',
        boxShadow: '0 5px 15px rgba(0, 0, 0, 0.2)',
        transition: 'transform 0.3s ease, background-color 0.3s',
    },
    buttonHover: {
        backgroundColor: '#e65e6b',
        transform: 'translateY(-3px)',
    },
    bgOverlay: {
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        opacity: '0.3',
    },
    '@keyframes fadeIn': {
        '0%': { opacity: 0 },
        '100%': { opacity: 1 },
    }
};

export default Error;
