import React, { useState } from 'react';
import { motion } from 'framer-motion';

const SpecialMessage = ({ onNext }) => {
    // Animation variants for text
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.8, // Slow down the reveal for reading time
                delayChildren: 0.5
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
    };

    const glowText = {
        textShadow: '0 0 10px rgba(255, 64, 129, 0.5), 0 0 20px rgba(255, 64, 129, 0.3)'
    };

    return (
        <div style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center' }}>
            {/* Animated Background Orbs */}
            <motion.div
                animate={{ scale: [1, 1.2, 1], x: [0, 20, 0], y: [0, -20, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                style={{ position: 'absolute', top: '-50px', left: '-20px', width: '150px', height: '150px', background: 'radial-gradient(circle, #f8bbd0, transparent)', borderRadius: '50%', filter: 'blur(40px)', zIndex: -1 }}
            />
            <motion.div
                animate={{ scale: [1, 1.3, 1], x: [0, -30, 0], y: [0, 30, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                style={{ position: 'absolute', bottom: '-50px', right: '-20px', width: '200px', height: '200px', background: 'radial-gradient(circle, #b3e5fc, transparent)', borderRadius: '50%', filter: 'blur(50px)', zIndex: -1 }}
            />

            <motion.div
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, scale: 0.9 }}
                className="special-message-card"
                style={{
                    width: '90%',
                    maxWidth: '650px',
                    background: 'rgba(255, 255, 255, 0.90)',
                    padding: '3rem',
                    borderRadius: '30px',
                    boxShadow: '0 20px 60px rgba(0,0,0,0.1)',
                    border: '1px solid rgba(255, 255, 255, 0.5)',
                    backdropFilter: 'blur(10px)',
                    position: 'relative',
                    overflow: 'hidden'
                }}
            >
                {/* Header Section */}
                <motion.div variants={itemVariants} style={{ textAlign: 'center', marginBottom: '2rem' }}>
                    <motion.h2
                        animate={{ scale: [1, 1.05, 1], textShadow: ["0 0 5px #ff4081", "0 0 20px #ff4081", "0 0 5px #ff4081"] }}
                        transition={{ duration: 3, repeat: Infinity }}
                        style={{
                            fontFamily: 'var(--font-cursive)',
                            fontSize: '3.5rem',
                            color: '#d81b60',
                            marginBottom: '0.5rem',
                            padding: '0 1rem'
                        }}
                    >
                        Happy Birthday Vaishu ❤️🥰
                    </motion.h2>
                    <div style={{ width: '100px', height: '4px', background: 'linear-gradient(to right, transparent, #ff4081, transparent)', margin: '0 auto' }}></div>
                </motion.div>

                {/* Message Content */}
                <motion.div
                    variants={containerVariants}
                    style={{
                        fontSize: '1.15rem',
                        lineHeight: '1.8',
                        color: '#444',
                        textAlign: 'center', // Centered looks more poetic
                        fontFamily: '"Outfit", sans-serif',
                        marginBottom: '2.5rem'
                    }}
                >
                    <motion.p variants={itemVariants} style={{ marginBottom: '1.5rem' }}>
                        I wish u all the best in life❤️☺️💍 may ur dream and wishes comes true❤️😘. Hope intha special day unnoda manasuku pidichcha aasa ellaththaum konduvarum💞🥳.
                    </motion.p>

                    <motion.p variants={itemVariants} style={{ marginBottom: '1.5rem' }}>
                        And i'm so blessed nee en lifela kidachchathukku 😇💞 and i proudly said to everone u are my one and only and u are my girl😇❤️🥳. Entha oru msg aalayum express panna mudiyathu naan unna evloo love panran endu but thanks vaishu came in to my life and being the best soulmate ever 🩵💗.
                    </motion.p>

                    <motion.p variants={itemVariants} style={{ marginBottom: '1.5rem' }}>
                        Today niraya birthday wishes varum unaku, i want u to know ithu ennoda manasalavula irunthu wish panran vaishu ennum niraya niraya unakuda pesanum solanum but ellaththayum orey msg layum solli mudikelaathu sollavum mudiyathu...
                    </motion.p>

                    <motion.div variants={itemVariants} style={{
                        background: 'linear-gradient(45deg, #fff0f5, #e3f2fd)',
                        padding: '1.5rem',
                        borderRadius: '15px',
                        marginTop: '1rem',
                        border: '1px dashed #ff80ab'
                    }}>
                        <p style={{ marginTop: 0, fontWeight: '600' }}>
                            Un koodave un pakkathhula irunthu avloo love ayum unaku kudukkanum unaku maddum vaishuu🥰💕💝.
                        </p>
                        <p style={{ margin: '1rem 0', fontStyle: 'italic' }}>
                            I Just wanna say happiieeee birthday thangoom 🎂😇💝💞🥳. Happya iru eppothume etha paththiyum josikkama intha day va happy ya celebrate pannu and...
                        </p>
                        <h3 style={{
                            fontFamily: 'var(--font-cursive)',
                            fontSize: '2.2rem',
                            color: '#c2185b',
                            margin: '1rem 0 0',
                            ...glowText
                        }}>
                            I Love You Sooo Much Vaishuu ❤️🫂
                        </h3>
                    </motion.div>
                </motion.div>

                {/* Button Section */}
                <motion.div
                    variants={itemVariants}
                    style={{ textAlign: 'center' }}
                >
                    <motion.button
                        onClick={onNext}
                        whileHover={{ scale: 1.1, boxShadow: "0 10px 25px rgba(233, 30, 99, 0.4)" }}
                        whileTap={{ scale: 0.95 }}
                        style={{
                            background: 'linear-gradient(45deg, #FF4081, #f50057)',
                            color: 'white',
                            padding: '15px 45px',
                            fontSize: '1.3rem',
                            borderRadius: '50px',
                            border: 'none',
                            cursor: 'pointer',
                            fontWeight: 'bold',
                            boxShadow: '0 5px 15px rgba(233, 30, 99, 0.3)',
                            textTransform: 'uppercase',
                            letterSpacing: '1px'
                        }}
                    >
                        Click Me Special for U 💝
                    </motion.button>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default SpecialMessage;
