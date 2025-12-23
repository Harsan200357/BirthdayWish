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
  };

  useEffect(() => {
    if (candles.every(c => !c) && !wished) {
      setWished(true);
      confetti({
        particleCount: 150,
        spread: 100,
        origin: { y: 0.6 },
        colors: ['#ff0000', '#ff4081', '#ffffff'] // Valentine colors
      });
      setTimeout(() => {
        onComplete();
      }, 2500);
    }
  }, [candles, wished, onComplete]);

  return (
    <div className="cake-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '2rem' }}>
      <h2 style={{
        fontFamily: 'var(--font-cursive)',
        fontSize: '3.5rem',
        marginBottom: '2rem',
        color: '#d32f2f',
        textShadow: '2px 2px 4px rgba(0,0,0,0.1)'
      }}>
        Make a Wish, My Love! ❤️
      </h2>
      <p style={{ marginBottom: '3rem', fontSize: '1.2rem', color: '#880e4f' }}>(Blow out the candles by tapping them)</p>

      <div style={{ position: 'relative', marginTop: '60px' }}>

        {/* Cake Base Layer */}
        <div style={{
          width: '300px',
          height: '120px',
          background: 'linear-gradient(to right, #e91e63, #ad1457)',
          borderRadius: '20px 20px 10px 10px',
          position: 'relative',
          boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-start'
        }}>
          {/* Icing Drips */}
          <div style={{
            position: 'absolute', top: 0, width: '100%', height: '40px',
            background: 'repeating-linear-gradient(45deg, #f8bbd0, #f8bbd0 10px, #fce4ec 10px, #fce4ec 20px)',
            borderRadius: '20px 20px 0 0',
            opacity: 0.9
          }}></div>
          {/* Decorative Hearts */}
          <div style={{ fontSize: '2rem', marginTop: '40px', display: 'flex', gap: '20px' }}>
            <span>❤️</span><span>💖</span><span>❤️</span>
          </div>
        </div>

        {/* Cake Top Layer */}
        <div style={{
          width: '240px',
          height: '90px',
          background: 'linear-gradient(to right, #f06292, #ec407a)',
          borderRadius: '20px 20px 0 0',
          position: 'absolute',
          top: '-90px',
          left: '30px', // Centered relative to 300px base
          zIndex: 5,
          boxShadow: '0 5px 15px rgba(0,0,0,0.15)'
        }}>
          {/* Icing */}
          <div style={{
            position: 'absolute', top: 0, width: '100%', height: '25px',
            background: '#fff',
            borderRadius: '20px 20px 50% 50%',
            opacity: 0.8
          }}></div>
        </div>

        {/* Candles Container */}
        <div style={{
          position: 'absolute',
          top: '-130px',
          left: '55px', // Adjusted to center on top layer
          display: 'flex',
          gap: '25px',
          zIndex: 10
        }}>
          {candles.map((isLit, i) => (
            <div key={i} style={{ position: 'relative', width: '20px' }}>
              {/* Flame */}
              {isLit && (
                <motion.div
                  animate={{
                    scale: [1, 1.3, 1],
                    rotate: [-2, 2, -2],
                    filter: ['brightness(1)', 'brightness(1.5)', 'brightness(1)']
                  }}
                  transition={{ duration: 0.4, repeat: Infinity, ease: "easeInOut" }}
                  onClick={() => extinguishCandle(i)}
                  style={{
                    width: '24px',
                    height: '36px',
                    background: 'radial-gradient(ellipse at bottom, #ffee58, #ff6f00)',
                    borderRadius: '50% 50% 35% 35%',
                    position: 'absolute',
                    top: '-40px',
                    left: '-2px',
                    cursor: 'pointer',
                    boxShadow: '0 0 15px #ffeb3b, 0 0 30px #ff9800',
                    filter: 'blur(0.5px)',
                    zIndex: 20
                  }}
                />
              )}

              {/* Smoke when out */}
              {!isLit && (
                <motion.div
                  initial={{ opacity: 0, y: 0 }}
                  animate={{ opacity: [0, 0.8, 0], y: -30, x: [0, 10, -5, 8] }}
                  transition={{ duration: 1.5 }}
                  style={{
                    position: 'absolute', top: '-25px', left: '8px',
                    fontSize: '20px', color: '#999', pointerEvents: 'none'
                  }}
                >
                  ☁️
                </motion.div>
              )}

              {/* Candle Stick */}
              <div style={{
                width: '20px',
                height: '60px',
                background: 'repeating-linear-gradient(90deg, #ffd700, #ffe082 50%, #ffd700 100%)', // Gold candles
                borderRadius: '4px',
                boxShadow: 'inset 0 -2px 5px rgba(0,0,0,0.2)',
                border: '1px solid #c79100'
              }}></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BirthdayCake;
