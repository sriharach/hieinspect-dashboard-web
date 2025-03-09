'use client';
import React from 'react';
export default function Home() {
  React.useEffect(() => {
    window.location.href = '/sign-in';
  }, []);

  return <React.Fragment />
}
