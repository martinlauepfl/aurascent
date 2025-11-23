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

      {/* 顶部渐变遮罩 */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#1a0a0f]/80 to-transparent pointer-events-none" />

      {/* 底部渐变遮罩 */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#1f0d12]/60 to-transparent pointer-events-none" />
    </div>
  );
};
