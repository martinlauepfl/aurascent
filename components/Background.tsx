'use client';

import React from 'react';

export const Background: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* 深邃渐变背景 */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a0b2e] via-[#2d1b4e] to-[#1f0a33]" />

      {/* 动态光晕层 */}
      <div className="absolute inset-0">
        {/* 主光晕 - 紫色 */}
        <div className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] rounded-full
          bg-gradient-to-br from-purple-600/20 via-violet-500/10 to-transparent
          blur-[120px] animate-gradient"
          style={{
            backgroundSize: '200% 200%',
            animation: 'gradientFlow 20s ease infinite'
          }}
        />

        {/* 副光晕 - 粉紫 */}
        <div className="absolute top-[30%] right-[-15%] w-[60%] h-[60%] rounded-full
          bg-gradient-to-bl from-pink-500/15 via-fuchsia-500/10 to-transparent
          blur-[100px] animate-gradient"
          style={{
            backgroundSize: '200% 200%',
            animation: 'gradientFlow 25s ease infinite reverse',
            animationDelay: '5s'
          }}
        />

        {/* 底部光晕 - 深紫蓝 */}
        <div className="absolute bottom-[-10%] left-[20%] w-[65%] h-[65%] rounded-full
          bg-gradient-to-tr from-indigo-600/15 via-purple-600/10 to-transparent
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
        <div className="absolute top-[25%] right-[20%] w-2.5 h-2.5 rounded-full bg-gradient-to-r from-pink-300 to-rose-400
          opacity-60 animate-glow-pulse" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-[60%] left-[25%] w-2 h-2 rounded-full bg-gradient-to-r from-purple-300 to-violet-400
          opacity-65 animate-glow-pulse" style={{ animationDelay: '3s' }} />
        <div className="absolute bottom-[20%] right-[30%] w-3 h-3 rounded-full bg-gradient-to-r from-blue-300 to-indigo-400
          opacity-55 animate-glow-pulse" style={{ animationDelay: '2s' }} />

        {/* 中型星光 */}
        <div className="absolute top-[15%] right-[40%] w-1.5 h-1.5 rounded-full bg-white/60
          animate-sparkle" style={{ animationDelay: '0.5s' }} />
        <div className="absolute top-[45%] left-[35%] w-1.5 h-1.5 rounded-full bg-amber-200/50
          animate-sparkle" style={{ animationDelay: '2.5s' }} />
        <div className="absolute bottom-[35%] right-[15%] w-1.5 h-1.5 rounded-full bg-pink-200/55
          animate-sparkle" style={{ animationDelay: '1s' }} />
        <div className="absolute top-[70%] right-[50%] w-1.5 h-1.5 rounded-full bg-violet-200/50
          animate-sparkle" style={{ animationDelay: '3.5s' }} />

        {/* 小型星尘 */}
        <div className="absolute top-[30%] left-[10%] w-1 h-1 rounded-full bg-white/40
          animate-sparkle" style={{ animationDelay: '1.2s' }} />
        <div className="absolute top-[50%] right-[25%] w-1 h-1 rounded-full bg-yellow-100/35
          animate-sparkle" style={{ animationDelay: '2.8s' }} />
        <div className="absolute bottom-[25%] left-[40%] w-1 h-1 rounded-full bg-pink-100/40
          animate-sparkle" style={{ animationDelay: '0.8s' }} />
        <div className="absolute top-[80%] left-[60%] w-1 h-1 rounded-full bg-purple-100/38
          animate-sparkle" style={{ animationDelay: '3.2s' }} />
        <div className="absolute top-[40%] right-[35%] w-1 h-1 rounded-full bg-blue-100/35
          animate-sparkle" style={{ animationDelay: '1.8s' }} />
        <div className="absolute bottom-[45%] left-[20%] w-1 h-1 rounded-full bg-white/30
          animate-sparkle" style={{ animationDelay: '2.2s' }} />
      </div>

      {/* 微妙纹理叠加 */}
      <div className="absolute inset-0 opacity-[0.03]
        bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMSI+PHBhdGggZD0iTTM2IDE0YzQgMCA4IDQgOCA4cy00IDgtOCA4LTgtNC04LTggNC04IDgtOHptMCAwYzQgMCA4LTQgOC04cy00LTgtOC04LTggNC04IDggNC04IDggOHoiLz48L2c+PC9nPjwvc3ZnPg==')]"
      />

      {/* 顶部渐变遮罩 */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#1a0b2e]/80 to-transparent pointer-events-none" />

      {/* 底部渐变遮罩 */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#1f0a33]/60 to-transparent pointer-events-none" />
    </div>
  );
};