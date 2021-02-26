import { useContext, useEffect } from 'react'
import { animated } from 'react-spring';

import { ChallengesContext } from '../contexts/ChallengesContext'
import styles from '../styles/components/LevelUpModal.module.css'

interface LevelUpModalProps {
  style: object;
}

export function LevelUpModal({ style }: LevelUpModalProps) {
  const { level, closeLevelUpModal } = useContext(ChallengesContext);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      closeLevelUpModal();
    }, 4000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <animated.div className={styles.overlay} style={style}>
      <div className={styles.container}>
        <header>{level}</header>

        <strong>Parabéns</strong>
        <p>Você alcançou um novo nível</p>

        <button type="button" onClick={closeLevelUpModal}>
          <img src="/icons/close.svg" alt="Fechar modal" />
        </button>
      </div>
    </animated.div>
  );
}