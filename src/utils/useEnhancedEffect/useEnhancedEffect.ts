'use client';
import * as React from "react";

// use reference from Material UI's useEnhancedEffect hook.
const useEnhancedEffect = typeof window !== 'undefined' ? React.useLayoutEffect : React.useEffect;

export default useEnhancedEffect
