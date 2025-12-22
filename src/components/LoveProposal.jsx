import React, { useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';

const LoveProposal = () => {
    const [accepted, setAccepted] = useState(false);
    const [noBtnPosition, setNoBtnPosition] = useState({ top: '0', left: '0', position: 'static' });
    const [noBtnHov, setNoBtnHov] = useState(false);

    const handleYes = () => {
        setAccepted(true);
        // Huge confetti
        const duration = 15 * 1000;
        const animationEnd = Date.now() + duration;
        const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

        const randomInRange = (min, max) => Math.random() * (max - min) + min;

        const interval = setInterval(function () {
            const timeLeft = animationEnd - Date.now();

            if (timeLeft <= 0) {
                return clearInterval(interval);
            }

            const particleCount = 50 * (timeLeft / duration);
            confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
            confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
        }, 250);
    };

    const moveNoButton = () => {
        // If mobile, maybe just disable? For now, desktop playful dodge
        const x = Math.random() * 200 - 100;
        const y = Math.random() * 200 - 100;
        setNoBtnPosition({
            position: 'relative',
            transform: `translate(${x}px, ${y}px)`,
            transition: 'transform 0.2s'
        });
        setNoBtnHov(true);
    };

    if (accepted) {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="accepted-container"
                style={{ textAlign: 'center' }}
            >
                <h1 style={{ fontFamily: 'var(--font-cursive)', fontSize: '5rem', color: 'var(--color-primary)' }}>
                    YAY! ❤️
                </h1>
                <p style={{ fontSize: '1.5rem', marginTop: '1rem' }}>I Love You Vaishu!</p>
                <div style={{ fontSize: '4rem', marginTop: '2rem' }}>💑💍🌹</div>
            </motion.div>
        );
    }

    return (
        <div className="proposal-container" style={{ textAlign: 'center', marginTop: '2rem' }}>
            <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
            >
                <img
                    src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExM2Q0NzY4N2RkNzY4Nzc2ODc3Njg3NzY4Nzc2ODc3Njg3NzY4NzY4NyZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/26BRv0ThflsHCqDrG/giphy.gif"
                    alt="Cute Hearts"
                    style={{ width: '200px', borderRadius: '15px', marginBottom: '2rem' }}
                />

                <h2 style={{ fontFamily: 'var(--font-cursive)', fontSize: '3rem', marginBottom: '1.5rem', color: '#c2185b' }}>
                    Will you be my Valentine?
                </h2>

                <p style={{ fontSize: '1.2rem', marginBottom: '3rem', maxWidth: '400px', margin: '0 auto 3rem' }}>
                    My journey is incomplete without you. Be my partner in crime, my love, my everything?
                </p>

                <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', alignItems: 'center' }}>
                    <button
                        onClick={handleYes}
                        style={{
                            background: 'var(--color-primary)',
                            color: 'white',
                            padding: '15px 40px',
                            fontSize: '1.5rem',
                            borderRadius: '50px',
                            fontWeight: 'bold',
                            boxShadow: '0 5px 20px rgba(211, 47, 47, 0.5)'
                        }}
                    >
                        YES! 💖
                    </button>

                    <button
                        onMouseEnter={moveNoButton}
                        onClick={moveNoButton} // For touch support fallback
                        style={{
                            background: '#ccc',
                            color: '#666',
                            padding: '15px 40px',
                            fontSize: '1.2rem',
                            borderRadius: '50px',
                            fontWeight: 'bold',
                            cursor: 'default',
                            ...noBtnPosition
                        }}
                    >
                        No 😢
                    </button>
                </div>
            </motion.div>
        </div>
    );
};

export default LoveProposal;
