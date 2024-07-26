import React, { useEffect } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion'

type AnimateNumberProps = {
  number: number
}

export const AnimateNumber: React.FC<AnimateNumberProps> = ({number}) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);
  
  useEffect(() => {
    const animation = animate(count, number, { duration: 10 })
    
    return animation.stop
  }, [])
  
  return (
    <motion.p> {rounded} </motion.p>
  );
};
