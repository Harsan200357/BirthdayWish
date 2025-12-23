import React, { useState } from 'react';
import Login from './components/Login';
import BirthdayCake from './components/BirthdayCake';
import ProposalMessage from './components/ProposalMessage';
import SpecialMessage from './components/SpecialMessage';
import LoveProposal from './components/LoveProposal';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  const [stage, setStage] = useState('login'); // 'login' | 'cake' | 'message' | 'letter' | 'proposal'
  const [userName, setUserName] = useState('');

  return (
    <div className="app-container" style={{ width: '100%', height: '100%', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

      <AnimatePresence mode="wait">
        {stage === 'login' && (
          <motion.div
            key="login"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.5 }}
          >
            <Login onLogin={(name) => {
              setUserName(name);
              setStage('cake');
            }} />
          </motion.div>
        )}

        {stage === 'cake' && (
          <motion.div
            key="cake"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5 }}
          >
            <BirthdayCake onComplete={() => setStage('message')} />
          </motion.div>
        )}

        {stage === 'message' && (
          <motion.div
            key="message"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
          >
            <ProposalMessage onNext={() => setStage('letter')} />
          </motion.div>
        )}

        {stage === 'letter' && (
          <motion.div
            key="letter"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
          >
            <SpecialMessage onNext={() => setStage('proposal')} />
          </motion.div>
        )}

        {stage === 'proposal' && (
          <motion.div
            key="proposal"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <LoveProposal />
          </motion.div>
        )}
      </AnimatePresence>

      <div style={{ position: 'fixed', bottom: '10px', right: '10px', fontSize: '0.8rem', opacity: 0.5 }}>
        Made with ❤️ for Vaishu
      </div>
    </div>
  );
}

export default App;
