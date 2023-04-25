import React, { useEffect, useRef } from 'react';
import { wrapGrid } from 'animate-css-grid';

function AnimatedGrid({ children }) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      wrapGrid(containerRef.current, { easing: "easeInOut", stagger: 50 });
    }
  }, []);

  return (
    <div ref={containerRef} className="grid-container grid grid-cols-3 grid-rows-1 gap-4">
      {children}
    </div>
  );
}

export default AnimatedGrid
