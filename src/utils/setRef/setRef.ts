'use client';
import * as React from 'react';

//use reference from Material UI's setRef function.

export default function setRef<T>(
	ref: React.MutableRefObject<T | null> | ((instance: T | null) => void) | null | undefined,
	value: T | null
): void {
	if (typeof ref ==='function') {
		ref(value);
	} else if (ref) {
		ref.current = value;
	}
}
