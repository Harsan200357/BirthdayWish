import React from 'react';
import { motion } from 'framer-motion';
import photo1 from '../assets/photo1.jpg';
import photo2 from '../assets/photo2.jpg';
import photo3 from '../assets/photo3.jpg';

const ProposalMessage = ({ onNext }) => {
    const photos = [photo1, photo2, photo3];

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="message-container"
            style={{
                width: '90%',
                maxWidth: '700px',
                background: 'rgba(255, 255, 255, 0.9)',
                padding: '2.5rem',
                borderRadius: '30px',
                boxShadow: '0 20px 50px rgba(0,0,0,0.15)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.6)',
                textAlign: 'center',
                position: 'relative'
            }}
        >
            <h1 style={{ fontFamily: 'var(--font-cursive)', fontSize: '4rem', color: '#d81b60', marginBottom: '1.5rem', textShadow: '2px 2px 0px rgba(0,0,0,0.1)' }}>
                Happy Birthday, Vaishu! ❤️
            </h1>

            {/* Photo Gallery */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', marginBottom: '2.5rem', flexWrap: 'wrap' }}>
                {photos.map((photo, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20, rotate: index % 2 === 0 ? -5 : 5 }}
                        animate={{ opacity: 1, y: 0, rotate: index === 1 ? 0 : (index === 0 ? -8 : 8) }}
                        whileHover={{ scale: 1.1, rotate: 0, zIndex: 10, boxShadow: '0 10px 30px rgba(0,0,0,0.3)' }}
                        transition={{ delay: index * 0.2, type: 'spring', stiffness: 200 }}
                        style={{
                            position: 'relative',
                            width: '160px',
                            height: '200px',
                            background: 'white',
                            padding: '10px 10px 40px 10px', // Polaroid padding
                            boxShadow: '0 5px 15px rgba(0,0,0,0.2)',
                            borderRadius: '4px',
                            transform: `rotate(${index * 5}deg)`
                        }}
                    >
                        <img
                            src={photo}
                            alt={`Vaishu Memory ${index + 1}`}
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                borderRadius: '2px'
                            }}
                        />
                        <div style={{ position: 'absolute', bottom: '10px', left: '0', width: '100%', textAlign: 'center', fontFamily: 'var(--font-cursive)', color: '#555', fontSize: '1.2rem' }}>
                            {['Beautiful', 'My Love', 'Angel'][index]}
                        </div>
                    </motion.div>
                ))}
            </div>

            <div style={{
                background: '#fff0f5',
                padding: '2rem',
                borderRadius: '20px',
                marginBottom: '2rem',
                border: '1px dashed #ff80ab' // Cute stitching effect
            }}>
                <p style={{ fontSize: '1.3rem', lineHeight: '1.8', marginBottom: '0', color: '#333', fontFamily: '"Nunito", sans-serif' }}>
                    on this special day , un kitta solliye aakanum , naan rompa lucky vaishu because i am to have you in my life.
                    You light up my world like the candles on your cake, but you shine so much brighter.
                    May your smiles never fade and your days be filled with as much joy as you bring to mine.
                </p>
            </div>

            <p style={{ fontSize: '1.2rem', marginBottom: '2rem', fontStyle: 'italic', color: '#e91e63' }}>
                But birthdays are for wishes... and I have a wish too...
            </p>

            <motion.button
                onClick={onNext}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                    background: 'linear-gradient(to right, #ff4081, #ff80ab)',
                    color: 'white',
                    padding: '14px 40px',
                    fontSize: '1.3rem',
                    borderRadius: '50px',
                    border: 'none',
                    fontWeight: 'bold',
                    boxShadow: '0 5px 20px rgba(233, 30, 99, 0.4)',
                    cursor: 'pointer'
                }}
            >
                See My Wish ➡️
            </motion.button>
        </motion.div>
    );
};

export default ProposalMessage;
