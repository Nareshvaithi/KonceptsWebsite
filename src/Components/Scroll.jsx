import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const ScrollToTop = () => {
    const { action } = useNavigate()
    const { pathname } = useLocation();
    
  useEffect(() => {
    if (action === 'POP') return

    window.scrollTo(0, 0);
  }, [action, pathname]);
}

export default ScrollToTop;