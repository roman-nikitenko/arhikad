import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView as useInViewMotion } from 'framer-motion';
import { AnimationType } from '../types/animation.ts';

type AnimationWrapperProps = {
  children: React.ReactNode;
  variant: AnimationType;
}

export const AnimationWrapper: React.FC<AnimationWrapperProps> = ({ children, variant }) => {
  const viewRef = useRef(null)
  const isInView = useInViewMotion(viewRef, { once: false });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView])
  
  return (
    <motion.div
      className=""
      ref={viewRef}
      variants={variant}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 0.7, delay: 0.25 }}
    >
      {children}
    </motion.div>
  );
};
