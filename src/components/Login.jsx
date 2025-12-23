import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Login = ({ onLogin }) => {
    const [name, setName] = useState('');
    const [code, setCode] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (code === '1229') {
            // You could pass the name up if you wanted to personalize later steps more
            onLogin(name);
        } else {
            setError('Incorrect secret code! Try again 🔒');
            setCode('');
        }
    };

    return (
        <div className="login-container" style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '2rem',
            background: 'rgba(255, 255, 255, 0.9)',
            borderRadius: '20px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
            maxWidth: '400px',
            width: '90%'
        }}>
            <h2 style={{ fontFamily: 'var(--font-cursive)', fontSize: '2.5rem', marginBottom: '1.5rem', color: '#d32f2f' }}>
                Welcome! ❤️
            </h2>
            <p style={{ marginBottom: '2rem', color: '#666' }}>Please enter your details to enter.</p>

            <form onSubmit={handleSubmit} style={{ width: '100%' }}>
                <div style={{ marginBottom: '1.5rem' }}>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', color: '#444' }}>Name</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        placeholder="Your lovely name"
                        style={{
                            width: '100%',
                            padding: '12px',
                            borderRadius: '8px',
                            border: '1px solid #ddd',
                            fontSize: '1rem',
                            outline: 'none',
                            background: '#fff0f5'
                        }}
                    />
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', color: '#444' }}>Secret Code</label>
                    <input
                        type="password"
                        value={code}
                        onChange={(e) => {
                            setCode(e.target.value);
                            setError('');
                        }}
                        required
                        placeholder="****"
                        style={{
                            width: '100%',
                            padding: '12px',
                            borderRadius: '8px',
                            border: '1px solid #ddd',
                            fontSize: '1rem',
                            outline: 'none',
                            background: '#fff0f5'
                        }}
                    />
                </div>

                {error && <p style={{ color: 'red', marginBottom: '1rem', fontSize: '0.9rem' }}>{error}</p>}

                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    style={{
                        width: '100%',
                        padding: '14px',
                        background: '#ff4081',
                        color: 'white',
                        border: 'none',
                        borderRadius: '50px',
                        fontSize: '1.1rem',
                        fontWeight: 'bold',
                        cursor: 'pointer',
                        boxShadow: '0 5px 15px rgba(255, 64, 129, 0.4)'
                    }}
                >
                    Enter ❤️
                </motion.button>
            </form>
        </div>
    );
};

export default Login;
