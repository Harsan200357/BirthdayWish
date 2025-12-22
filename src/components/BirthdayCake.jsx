import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';

const BirthdayCake = ({ onComplete }) => {
  const [candles, setCandles] = useState([true, true, true, true, true]); // 5 candles
  const [wished, setWished] = useState(false);

  const extinguishCandle = (index) => {
    if (!candles[index]) return;
    
    const newCandles = [...candles];
    newCandles[index] = false;
    setCandles(newCandles);
    
    // Smoke effect?
  };

  useEffect(() => {
    if (candles.every(c => !c) && !wished) {
      setWished(true);
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
      setTimeout(() => {
        onComplete();
      }, 2000);
    }
  }, [candles, wished, onComplete]);

  return (
    <div className="cake-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '2rem' }}>
      <h2 style={{ fontFamily: 'var(--font-cursive)', fontSize: '3rem', marginBottom: '2rem', color: 'var(--color-primary)' }}>
        Make a Wish & Blow the Candles!
      </h2>
      <p style={{marginBottom: '2rem', opacity: 0.7}}>(Click/Tap the flames)</p>
      
      <div style={{ position: 'relative', marginTop: '50px' }}>
        {/* Cake Layers */}
        <div style={{
          width: '250px',
          height: '80px',
          backgroundColor: '#f8bbd0',
          borderRadius: '10px 10px 0 0',
          position: 'relative',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
        }}></div>
         <div style={{
          width: '300px',
          height: '100px',
          backgroundColor: '#f48fb1',
          borderRadius: '10px 10px 0 0',
          position: 'relative',
          top: '-10px',
          zIndex: 0,
           boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
        }}></div>

        {/* Candles */}
        <div style={{
          position: 'absolute',
          top: '-40px',
          left: '25px', // Center align roughly
          display: 'flex',
          gap: '20px',
          zIndex: 10
        }}>
          {candles.map((isLit, i) => (
             <div key={i} style={{ position: 'relative', width: '20px' }}>
                {/* Flame */}
                {isLit && (
                  <motion.div
                    animate={{ scale: [1, 1.2, 1], rotate: [-5, 5, -5] }}
                    transition={{ duration: 0.5, repeat: Infinity }}
                    onClick={() => extinguishCandle(i)}
                    style={{
                      width: '20px',
                      height: '30px',
                      backgroundColor: '#ff9800',
                      borderRadius: '50% 50% 20% 20%',
                      position: 'absolute',
                      top: '-35px',
                      left: '0',
                      cursor: 'pointer',
                      boxShadow: '0 0 10px #ffeb3b, 0 0 20px #ff9800',
                      filter: 'blur(1px)'
                    }}
                  />
                )}
                {!isLit && (
                    <div style={{
                        position: 'absolute', top: '-15px', left: '8px', 
                        width: '4px', height: '15px', background: '#ccc'
                    }} />
                )}
                
                {/* Candle Stick */}
                <div style={{
                  width: '20px',
                  height: '60px',
                  background: 'repeating-linear-gradient(45deg, #fff, #fff 5px, #2196f3 5px, #2196f3 10px)',
                  borderRadius: '4px',
                  boxShadow: 'inset 0 -5px 2px rgba(0,0,0,0.1)'
                }}></div>
             </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BirthdayCake;
