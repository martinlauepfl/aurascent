'use client';

import React from 'react';

export const Background: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-rose-50">
      {/* Gradient Orbs */}
      <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-pink-300/40 blur-[120px] animate-pulse" />
      <div className="absolute top-[40%] -right-[10%] w-[40%] h-[40%] rounded-full bg-rose-300/30 blur-[100px]" />
      <div className="absolute -bottom-[10%] left-[20%] w-[60%] h-[60%] rounded-full bg-fuchsia-300/35 blur-[130px]" />

      {/* Sparkle effects */}
      <div className="absolute top-10 left-20 w-2 h-2 bg-pink-400 rounded-full opacity-60 animate-sparkle" style={{ animationDelay: '0s' }} />
      <div className="absolute top-40 right-40 w-1.5 h-1.5 bg-rose-300 rounded-full opacity-50 animate-sparkle" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-20 left-1/3 w-1 h-1 bg-fuchsia-200 rounded-full opacity-70 animate-sparkle" style={{ animationDelay: '0.5s' }} />
      <div className="absolute top-1/3 left-1/4 w-1.5 h-1.5 bg-pink-200 rounded-full opacity-40 animate-sparkle" style={{ animationDelay: '1.5s' }} />
      <div className="absolute bottom-1/3 right-1/3 w-1 h-1 bg-rose-200 rounded-full opacity-60 animate-sparkle" style={{ animationDelay: '2s' }} />

      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10"></div>
    </div>
  );
};