import { AnimationType } from './animation.ts';

export const variantLeft: AnimationType = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    x: -75
  }
}

export const variantRight: AnimationType = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    x: 75
  }
}

export const variantUp: AnimationType = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    y: -75
  }
}

export const variantDown: AnimationType = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    y: 75
  }
}