import { useEffect, useState } from 'react';

const MagicalRipple = ({ isActive, onAnimationComplete }) => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isActive) {
      setIsAnimating(true);
      const timer = setTimeout(() => {
        setIsAnimating(false);
        onAnimationComplete();
      }, 1500); // Updated to 1500ms to match the new CSS animation duration
      return () => clearTimeout(timer);
    }
  }, [isActive, onAnimationComplete]);

  if (!isAnimating) return null;

  return (
    <div className="magical-ripple">
      <div className="ripple"></div>
    </div>
  );
};

export default MagicalRipple;
