import { useEffect } from 'react';

function useNoScroll(isOpen: boolean) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = isOpen ? 'hidden' : 'auto'
    }
    return () => {
      document.body.style.overflow = 'auto'
    }
  },[isOpen])
}

export default useNoScroll;
