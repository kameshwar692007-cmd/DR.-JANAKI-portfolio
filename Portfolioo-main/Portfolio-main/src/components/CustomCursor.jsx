import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export const CustomCursor = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isTouch] = useState(() => 
    typeof window !== 'undefined' && (window.matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window)
  );

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth trailing spring physics for outer ring
  const springX = useSpring(mouseX, { stiffness: 350, damping: 25, mass: 0.5 });
  const springY = useSpring(mouseY, { stiffness: 350, damping: 25, mass: 0.5 });

  // Tight spring for center dot
  const dotX = useSpring(mouseX, { stiffness: 900, damping: 35 });
  const dotY = useSpring(mouseY, { stiffness: 900, damping: 35 });

  useEffect(() => {
    // If touch/mobile device, no cursor event listeners needed
    if (isTouch) return;

    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    // Dynamic hover detection for interactive elements
    const handleOver = (e) => {
      const target = e.target;
      if (
        target.closest('a') ||
        target.closest('button') ||
        target.closest('input') ||
        target.closest('textarea') ||
        target.closest('select') ||
        target.closest('[role="button"]') ||
        target.closest('.group') ||
        target.closest('.cursor-pointer')
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mouseover', handleOver, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseover', handleOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [mouseX, mouseY, isVisible, isTouch]);

  if (isTouch || !isVisible) return null;

  return (
    <>
      {/* Outer Cyan Trailing Glow Ring */}
      <motion.div
        aria-hidden="true"
        style={{
          x: springX,
          y: springY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width: isHovered ? 50 : isClicking ? 26 : 34,
          height: isHovered ? 50 : isClicking ? 26 : 34,
          borderColor: isHovered ? '#38BDF8' : 'rgba(56, 189, 248, 0.75)',
          backgroundColor: isHovered ? 'rgba(56, 189, 248, 0.16)' : 'rgba(2, 132, 199, 0.05)',
          boxShadow: isHovered
            ? '0 0 24px rgba(56, 189, 248, 0.55), inset 0 0 10px rgba(56, 189, 248, 0.25)'
            : '0 0 12px rgba(56, 189, 248, 0.3)',
        }}
        transition={{ type: 'spring', stiffness: 400, damping: 25 }}
        className="fixed top-0 left-0 pointer-events-none z-[999999] rounded-full border border-solid"
      />

      {/* Inner Pinpoint Cyan Dot */}
      <motion.div
        aria-hidden="true"
        style={{
          x: dotX,
          y: dotY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isClicking ? 0.7 : isHovered ? 1.4 : 1,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ duration: 0.15 }}
        className="fixed top-0 left-0 pointer-events-none z-[999999] w-2.5 h-2.5 rounded-full bg-[#38BDF8] shadow-[0_0_10px_#38BDF8,0_0_3px_#ffffff]"
      />
    </>
  );
};

export default CustomCursor;
