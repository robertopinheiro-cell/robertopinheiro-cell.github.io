import { motion, useScroll } from 'framer-motion';

function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '3px',
        background: '#DC2626',
        transformOrigin: '0%',
        scaleX: scrollYProgress,
        zIndex: 9999
      }}
    />
  );
}

export default ScrollProgress;
