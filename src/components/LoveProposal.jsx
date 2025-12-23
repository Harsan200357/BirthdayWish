import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';

const LoveProposal = () => {
    const [accepted, setAccepted] = useState(false);
    const [noBtnPosition, setNoBtnPosition] = useState({ x: 0, y: 0 });
    const [isHoveringNo, setIsHoveringNo] = useState(false);

    // Background floating hearts animation
    const FloatingHearts = () => (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: -1, overflow: 'hidden' }}>
            {[...Array(20)].map((_, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, y: '110vh', x: Math.random() * window.innerWidth }}
                    animate={{
                        opacity: [0, 0.6, 0],
                        y: '-10vh',
                        x: (Math.random() - 0.5) * 200 + Math.random() * window.innerWidth // Drift
                    }}
                    transition={{
                        duration: 10 + Math.random() * 10,
                        repeat: Infinity,
                        delay: Math.random() * 5,
                        ease: "linear"
                    }}
                    style={{
                        position: 'absolute',
                        fontSize: Math.random() * 30 + 10 + 'px',
                        color: Math.random() > 0.5 ? '#ff4081' : '#ffcdd2'
                    }}
                >
                    {Math.random() > 0.5 ? '❤️' : '💖'}
                </motion.div>
            ))}
        </div>
    );

    const handleYes = () => {
        setAccepted(true);
        // HUGE Celebration
        const duration = 15 * 1000;
        const animationEnd = Date.now() + duration;
        const defaults = { startVelocity: 45, spread: 360, ticks: 100, zIndex: 100 };

        const randomInRange = (min, max) => Math.random() * (max - min) + min;

        const interval = setInterval(function () {
            const timeLeft = animationEnd - Date.now();

            if (timeLeft <= 0) {
                return clearInterval(interval);
            }

            const particleCount = 100 * (timeLeft / duration);

            // Fireworks
            confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
            confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));

            // Heart rain
            confetti({
                particleCount: 20,
                spread: 100,
                origin: { y: -0.1 },
                colors: ['#ff0000', '#ff4081', '#ffffff'],
                shapes: ['heart'],
                scalar: 2
            });

        }, 200);
    };

    const moveNoButton = () => {
        const x = Math.random() * 200 - 100;
        const y = Math.random() * 200 - 100;
        setNoBtnPosition({ x, y });
        setIsHoveringNo(true);
    };

    if (accepted) {
        return (
            <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <FloatingHearts />
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: "spring", stiffness: 100 }}
                    style={{
                        textAlign: 'center',
                        padding: '3rem',
                        background: 'rgba(255,255,255,0.9)',
                        borderRadius: '30px',
                        boxShadow: '0 0 50px rgba(233, 30, 99, 0.5)',
                        border: '5px solid #e91e63'
                    }}
                >
                    <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 0.8, repeat: Infinity }}
                        style={{ fontSize: '6rem', marginBottom: '1rem' }}
                    >
                        💍🥰
                    </motion.div>

                    <h1 style={{
                        fontFamily: 'var(--font-cursive)',
                        fontSize: '4.5rem',
                        color: '#d81b60',
                        textShadow: '2px 2px 4px rgba(0,0,0,0.2)'
                    }}>
                        She Said YESSS!
                    </h1>

                    <p style={{ fontSize: '1.4rem', marginTop: '1.5rem', color: '#880e4f', fontFamily: 'var(--font-body)' }}>
                        You've made me the happiest person in the world, Vaishu! <br />
                        I promise to love you forever and always. ❤️
                    </p>

                    <div style={{ marginTop: '2.5rem', display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                        <img src="https://media.giphy.com/media/26FLdmIp6wJr91JAI/giphy.gif" alt="Happy Couple" style={{ borderRadius: '15px', height: '150px' }} />
                        <img src="https://media1.tenor.com/m/5T9NoewNL9EAAAAC/bubu-dudu.gif" alt="Love" style={{ borderRadius: '15px', height: '150px' }} />
                    </div>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="proposal-container" style={{ textAlign: 'center', marginTop: '2rem', position: 'relative' }}>
            <FloatingHearts />

            <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                style={{
                    background: 'rgba(255, 255, 255, 0.85)',
                    padding: '3rem',
                    borderRadius: '30px',
                    boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
                    backdropFilter: 'blur(10px)',
                    border: '2px solid rgba(255, 64, 129, 0.3)',
                    maxWidth: '600px'
                }}
            >
                <motion.img
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.5 }}
                    src="https://media1.tenor.com/m/r158WOOj-0wAAAAC/milk-mocha.gif"
                    alt="Cute Hearts"
                    style={{ width: '220px', borderRadius: '15px', marginBottom: '2rem', boxShadow: '0 5px 15px rgba(0,0,0,0.1)' }}
                />

                <h2 style={{ fontFamily: 'var(--font-cursive)', fontSize: '3.5rem', marginBottom: '1rem', color: '#c2185b' }}>
                    Will you be my Valentine?
                </h2>

                <p style={{ fontSize: '1.3rem', marginBottom: '3rem', color: '#555', lineHeight: '1.6' }}>
                    Every moment with you is magic. <br />
                    I want to hold your hand today, tomorrow, and forever. <br />
                    <span style={{ color: '#e91e63', fontWeight: 'bold' }}>Make me the luckiest person alive?</span> 🌹
                </p>

                <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem', alignItems: 'center', position: 'relative', height: '80px' }}>
                    <motion.button
                        onClick={handleYes}
                        whileHover={{ scale: 1.1, boxShadow: "0 0 25px rgba(233, 30, 99, 0.8)" }}
                        whileTap={{ scale: 0.95 }}
                        animate={{ boxShadow: ["0 0 0px rgba(233, 30, 99, 0)", "0 0 20px rgba(233, 30, 99, 0.5)", "0 0 0px rgba(233, 30, 99, 0)"] }}
                        transition={{ boxShadow: { duration: 2, repeat: Infinity } }}
                        style={{
                            background: 'linear-gradient(45deg, #ff4081, #f50057)',
                            color: 'white',
                            padding: '18px 50px',
                            fontSize: '1.5rem',
                            borderRadius: '50px',
                            fontWeight: 'bold',
                            border: 'none',
                            cursor: 'pointer',
                            textTransform: 'uppercase',
                            letterSpacing: '1px'
                        }}
                    >
                        YES! 🥰
                    </motion.button>

                    <motion.button
                        onMouseEnter={moveNoButton}
                        onTouchStart={moveNoButton} // Better mobile support attempt
                        animate={{ x: noBtnPosition.x, y: noBtnPosition.y }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        style={{
                            background: '#eceff1',
                            color: '#90a4ae',
                            padding: '15px 40px',
                            fontSize: '1.2rem',
                            borderRadius: '50px',
                            fontWeight: 'bold',
                            cursor: 'default', // Don't show pointer to imply it's clickable (it's not easily!)
                            border: '1px solid #cfd8dc',
                            position: isHoveringNo ? 'absolute' : 'relative', // Switch to absolute to move freely
                            right: isHoveringNo ? 'auto' : '0' // Initial positioning help
                        }}
                    >
                        No 😢
                    </motion.button>
                </div>
            </motion.div>
        </div>
    );
};

export default LoveProposal;
