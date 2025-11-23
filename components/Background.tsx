'use client';

import React from 'react';

export const Background: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* 深邃渐变背景 - 玫瑰金版 */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a0a0f] via-[#2d1618] to-[#1f0d12]" />

      {/* 动态光晕层 */}
      <div className="absolute inset-0">
        {/* 主光晕 - 深酒红 */}
        <div className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] rounded-full
          bg-gradient-to-br from-[#8B1538]/20 via-[#A0153E]/10 to-transparent
          blur-[120px] animate-gradient"
          style={{
            backgroundSize: '200% 200%',
            animation: 'gradientFlow 20s ease infinite'
          }}
        />

        {/* 副光晕 - 玫瑰金 */}
        <div className="absolute top-[30%] right-[-15%] w-[60%] h-[60%] rounded-full
          bg-gradient-to-bl from-[#D4A5A5]/15 via-[#C88B8B]/10 to-transparent
          blur-[100px] animate-gradient"
          style={{
            backgroundSize: '200% 200%',
            animation: 'gradientFlow 25s ease infinite reverse',
            animationDelay: '5s'
          }}
        />

        {/* 底部光晕 - 深勃艮第红 */}
        <div className="absolute bottom-[-10%] left-[20%] w-[65%] h-[65%] rounded-full
          bg-gradient-to-tr from-[#A0153E]/15 via-[#8B1538]/10 to-transparent
          blur-[130px] animate-gradient"
          style={{
            backgroundSize: '200% 200%',
            animation: 'gradientFlow 30s ease infinite',
            animationDelay: '10s'
          }}
        />
      </div>

      {/* 星空粒子系统 */}
      <div className="absolute inset-0">
        {/* 大型星光 */}
        <div className="absolute top-[10%] left-[15%] w-3 h-3 rounded-full bg-gradient-to-r from-yellow-200 to-amber-300
          opacity-70 animate-glow-pulse" style={{ animationDelay: '0s' }} />
        <div className="absolute top-[25%] right-[20%] w-2.5 h-2.5 rounded-full bg-gradient-to-r from-[#E8B4B8] to-[#D4A5A5]
          opacity-60 animate-glow-pulse" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-[60%] left-[25%] w-2 h-2 rounded-full bg-gradient-to-r from-[#D4A5A5] to-[#C88B8B]
          opacity-65 animate-glow-pulse" style={{ animationDelay: '3s' }} />
        <div className="absolute bottom-[20%] right-[30%] w-3 h-3 rounded-full bg-gradient-to-r from-[#E8B4B8] to-[#B76E79]
          opacity-55 animate-glow-pulse" style={{ animationDelay: '2s' }} />

        {/* 中型星光 */}
        <div className="absolute top-[15%] right-[40%] w-1.5 h-1.5 rounded-full bg-white/60
          animate-sparkle" style={{ animationDelay: '0.5s' }} />
        <div className="absolute top-[45%] left-[35%] w-1.5 h-1.5 rounded-full bg-amber-200/50
          animate-sparkle" style={{ animationDelay: '2.5s' }} />
        <div className="absolute bottom-[35%] right-[15%] w-1.5 h-1.5 rounded-full bg-[#E8B4B8]/55
          animate-sparkle" style={{ animationDelay: '1s' }} />
        <div className="absolute top-[70%] right-[50%] w-1.5 h-1.5 rounded-full bg-[#D4A5A5]/50
          animate-sparkle" style={{ animationDelay: '3.5s' }} />

        {/* 小型星尘 */}
        <div className="absolute top-[30%] left-[10%] w-1 h-1 rounded-full bg-white/40
          animate-sparkle" style={{ animationDelay: '1.2s' }} />
        <div className="absolute top-[50%] right-[25%] w-1 h-1 rounded-full bg-yellow-100/35
          animate-sparkle" style={{ animationDelay: '2.8s' }} />
        <div className="absolute bottom-[25%] left-[40%] w-1 h-1 rounded-full bg-[#E8B4B8]/40
          animate-sparkle" style={{ animationDelay: '0.8s' }} />
        <div className="absolute top-[80%] left-[60%] w-1 h-1 rounded-full bg-[#D4A5A5]/38
          animate-sparkle" style={{ animationDelay: '3.2s' }} />
        <div className="absolute top-[40%] right-[35%] w-1 h-1 rounded-full bg-[#E8B4B8]/35
          animate-sparkle" style={{ animationDelay: '1.8s' }} />
        <div className="absolute bottom-[45%] left-[20%] w-1 h-1 rounded-full bg-white/30
          animate-sparkle" style={{ animationDelay: '2.2s' }} />
      </div>

      {/* 顶部渐变遮罩 */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#1a0a0f]/80 to-transparent pointer-events-none" />

      {/* 底部渐变遮罩 */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#1f0d12]/60 to-transparent pointer-events-none" />
    </div>
  );
};
