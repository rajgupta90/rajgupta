import React, { useEffect, useRef } from 'react';
import TubesCursor from 'threejs-components/build/cursors/tubes1.min.js';

const NeonTubesCursor = ({ 
  colors = ["#f967fb", "#53bc28", "#6958d5"], 
  lightColors = ["#83f36e", "#fe8a2e", "#ff008a", "#60aed5"] 
}) => {
  const containerRef = useRef(null);
  const appRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // The script might expect window.innerHeight/innerWidth, but let's test if it bounds to the canvas correctly.
    // If we create a canvas inside our ref.
    const canvas = document.createElement('canvas');
    canvas.style.position = 'absolute';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.zIndex = '0';
    canvas.style.pointerEvents = 'none'; // so it doesn't block clicks to the card surface
    containerRef.current.appendChild(canvas);

    try {
      appRef.current = TubesCursor(canvas, {
        tubes: {
          colors: colors,
          lights: {
            intensity: 200,
            colors: lightColors
          }
        }
      });
    } catch (e) {
      console.error("Error initializing TubesCursor:", e);
    }

    return () => {
      // Cleanup if threejs-components has a destroy method
      if (appRef.current && typeof appRef.current.destroy === 'function') {
        appRef.current.destroy();
      }
      if (canvas.parentNode) {
        canvas.parentNode.removeChild(canvas);
      }
    };
  }, [colors, lightColors]);

  return (
    <div 
      ref={containerRef} 
      style={{ 
        position: 'absolute', 
        top: 0, 
        left: 0, 
        width: '100%', 
        height: '100%', 
        overflow: 'hidden', 
        borderRadius: 'inherit',
        zIndex: 0, // Put it behind the content of the card
        pointerEvents: 'none'
      }} 
    />
  );
};

export default NeonTubesCursor;
