import React from 'react';
import { motion } from 'framer-motion';
import vaishu from '../assets/vaishu.jpg';

const ProposalMessage = ({ onNext }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="message-container"
            style={{
                maxWidth: '500px',
                background: 'rgba(255, 255, 255, 0.8)',
                padding: '2rem',
                borderRadius: '20px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                backdropFilter: 'blur(5px)',
                border: '2px solid rgba(255, 64, 129, 0.3)',
                textAlign: 'center'
            }}
        >
            <div style={{ marginBottom: '1.5rem' }}>
                <img
                    src={vaishu}
                    alt="Vaishu"
                    style={{
                        width: '180px',
                        height: '180px',
                        borderRadius: '50%',
                        objectFit: 'cover',
                        border: '4px solid white',
                        boxShadow: '0 5px 15px rgba(0,0,0,0.2)'
                    }}
                />
            </div>
            <h1 style={{ fontFamily: 'var(--font-cursive)', fontSize: '3.5rem', color: 'var(--color-primary)', marginBottom: '1rem' }}>
                Happy Birthday, Vaishu! ❤️
            </h1>

            <p style={{ fontSize: '1.2rem', lineHeight: '1.6', marginBottom: '1.5rem', color: '#555' }}>
                On this special day, I just want to tell you how incredibly lucky I am to have you in my life.
                You light up my world like the candles on your cake, but you shine so much brighter.
                May your smiles never fade and your days be filled with as much joy as you bring to mine.
            </p>

            <p style={{ fontSize: '1.1rem', marginBottom: '2rem', fontStyle: 'italic', color: 'var(--color-accent)' }}>
                But birthdays are for wishes... and I have a wish too...
            </p>

            <button
                onClick={onNext}
                style={{
                    background: 'var(--color-primary)',
                    color: 'white',
                    padding: '12px 30px',
                    fontSize: '1.2rem',
                    borderRadius: '50px',
                    fontWeight: 'bold',
                    boxShadow: '0 5px 15px rgba(211, 47, 47, 0.4)'
                }}
                onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
                onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
            >
                See My Wish ➡️
            </button>
        </motion.div>
    );
};

export default ProposalMessage;
