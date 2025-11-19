'use client';

import React from 'react';
import { FortuneResult } from '../types';

interface ResultProps {
  data: FortuneResult;
  onReset: () => void;
}

export const Result: React.FC<ResultProps> = ({ data, onReset }) => {
  return (
    <div className="w-full max-w-5xl mx-auto animate-fade-in px-4">
      <div className="mb-8 text-center">
        <div className="inline-block">
          <h2 className="text-2xl md:text-3xl font-display bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent font-bold mb-2">
            您的命运密码
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-rose-400 to-pink-400 rounded-full mx-auto"></div>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 lg:gap-8">

        {/* Left Column: Personal Analysis */}
        <div className="xl:col-span-1 space-y-6">
          {/* Personal Essence */}
          <div className="glass-panel p-6 rounded-2xl border-t border-pink-300/30 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-rose-200/20 to-pink-200/20 rounded-full blur-xl"></div>

            <div className="text-center mb-6 relative z-10">
              <span className="inline-block px-4 py-2 text-xs font-bold tracking-widest text-rose-600 uppercase border border-pink-300/50 rounded-full bg-gradient-to-r from-pink-100/60 to-rose-100/60 mb-4 shadow-sm">
                灵魂本质
              </span>
              <h3 className="text-3xl text-rose-900 font-display mb-2">{data.element}</h3>
              <p className="text-pink-600 text-sm font-serif italic">{data.archetype}</p>
            </div>

            <div className="bg-white/30 rounded-xl p-4 mb-6 relative z-10">
              <div className="space-y-3 text-rose-700 text-sm leading-relaxed">
                <p>{data.personalityAnalysis}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 relative z-10">
               <div className="text-center">
                 <span className="text-xs uppercase text-rose-600 font-bold tracking-wider block mb-1">幸运颜色</span>
                 <div className="flex items-center justify-center gap-2">
                   <div
                      className="w-6 h-6 rounded-full border-2 border-white/50 shadow-lg"
                      style={{ backgroundColor: data.luckyColor.toLowerCase().includes('金') ? '#FFD700' : data.luckyColor.includes('红') ? '#FF6B6B' : data.luckyColor.includes('蓝') ? '#4ECDC4' : data.luckyColor.includes('绿') ? '#95E77E' : '#FFB6C1' }}
                   />
                 </div>
                 <span className="text-xs text-rose-800 mt-1 block">{data.luckyColor}</span>
               </div>
               <div className="text-center">
                 <span className="text-xs uppercase text-rose-600 font-bold tracking-wider block mb-1">幸运数字</span>
                 <div className="text-2xl text-rose-800 font-display font-bold">{data.fortune.luckyNumber}</div>
               </div>
            </div>
          </div>

          {/* Fortune Compass */}
          <div className="glass-panel p-6 rounded-2xl border-t border-rose-300/30">
            <div className="text-center mb-6">
              <span className="inline-block px-4 py-2 text-xs font-bold tracking-widest text-rose-600 uppercase border border-pink-300/50 rounded-full bg-gradient-to-r from-pink-100/60 to-rose-100/60 shadow-sm">
                运势罗盘
              </span>
            </div>

            <div className="space-y-5">
              <div className="group">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-rose-50/50 to-transparent hover:from-rose-100/50 transition-all">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-rose-400 to-pink-400 flex items-center justify-center text-white text-sm font-bold shadow-lg">
                    ★
                  </div>
                  <div className="flex-1">
                    <div className="text-xs font-bold text-rose-600 mb-1">综合运势</div>
                    <div className="text-sm text-rose-700 leading-relaxed">{data.fortune.overall}</div>
                  </div>
                </div>
              </div>

              <div className="group">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-pink-50/50 to-transparent hover:from-pink-100/50 transition-all">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center text-white text-sm font-bold shadow-lg">
                    💼
                  </div>
                  <div className="flex-1">
                    <div className="text-xs font-bold text-purple-600 mb-1">事业运势</div>
                    <div className="text-sm text-rose-700 leading-relaxed">{data.fortune.career}</div>
                  </div>
                </div>
              </div>

              <div className="group">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-red-50/50 to-transparent hover:from-red-100/50 transition-all">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-red-400 to-pink-400 flex items-center justify-center text-white text-sm font-bold shadow-lg">
                    💝
                  </div>
                  <div className="flex-1">
                    <div className="text-xs font-bold text-red-600 mb-1">感情运势</div>
                    <div className="text-sm text-rose-700 leading-relaxed">{data.fortune.love}</div>
                  </div>
                </div>
              </div>

              <div className="group">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-orange-50/50 to-transparent hover:from-orange-100/50 transition-all">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-400 to-amber-400 flex items-center justify-center text-white text-sm font-bold shadow-lg">
                    🌿
                  </div>
                  <div className="flex-1">
                    <div className="text-xs font-bold text-orange-600 mb-1">健康运势</div>
                    <div className="text-sm text-rose-700 leading-relaxed">{data.fortune.health}</div>
                  </div>
                </div>
              </div>

              <div className="group">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-yellow-50/50 to-transparent hover:from-yellow-100/50 transition-all">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-yellow-400 to-amber-400 flex items-center justify-center text-white text-sm font-bold shadow-lg">
                    💰
                  </div>
                  <div className="flex-1">
                    <div className="text-xs font-bold text-yellow-600 mb-1">财富运势</div>
                    <div className="text-sm text-rose-700 leading-relaxed">{data.fortune.wealth}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-pink-200/30">
              <div className="flex items-center justify-between bg-gradient-to-r from-pink-50/30 to-rose-50/30 rounded-lg p-4">
                <div className="text-center">
                  <div className="text-xs uppercase text-rose-600 font-bold tracking-wider mb-1">幸运方位</div>
                  <div className="text-lg text-rose-800 font-display font-bold">{data.fortune.luckyDirection}</div>
                </div>
                <div className="text-rose-300 text-2xl">🧭</div>
              </div>
            </div>
          </div>

          <button
            onClick={onReset}
            className="w-full py-3 rounded-xl border border-pink-200/40 hover:bg-gradient-to-r hover:from-pink-100/50 hover:to-rose-100/50 text-rose-600 text-sm transition-all duration-300 transform hover:scale-105 shadow-sm hover:shadow-md hidden lg:block"
          >
            重新为他人占卜
          </button>
        </div>

        {/* Right Column: Perfume Showcase */}
        <div className="xl:col-span-2 lg:col-span-1">
          <div className="glass-panel p-8 rounded-2xl relative overflow-hidden border-t border-pink-300/40">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-pink-300/20 to-rose-300/20 rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-purple-300/15 to-pink-300/15 rounded-full blur-xl"></div>

            {/* Perfume Header */}
            <div className="relative z-10 text-center mb-8">
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="text-2xl">💎</span>
                <span className="text-xs font-bold tracking-[0.4em] text-rose-600 uppercase">灵魂香气</span>
                <span className="text-2xl">💎</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-display bg-gradient-to-b from-rose-900 via-rose-700 to-pink-600 bg-clip-text text-transparent font-bold leading-tight mb-3">
                {data.perfumeName}
              </h2>
              <p className="text-lg text-pink-600 italic font-serif mb-4">"{data.perfumeTagline}"</p>
              <div className="inline-block">
                <span className="bg-gradient-to-r from-pink-100/80 to-rose-100/80 border border-pink-200/60 px-4 py-2 rounded-full text-sm text-rose-800 font-semibold shadow-sm">
                  {data.fragranceFamily}
                </span>
              </div>
            </div>

            {/* Product Card */}
            <div className="relative z-10 mb-8">
              <div className="bg-gradient-to-br from-rose-50/80 via-pink-50/60 to-white/40 rounded-2xl p-6 border border-pink-200/40 shadow-xl">
                <div className="text-center mb-4">
                  <div className="inline-flex items-center gap-2 mb-2">
                    <span className="text-rose-400 text-xl">🏷️</span>
                    <span className="text-xs uppercase text-rose-600 font-bold tracking-wider">真实推荐</span>
                  </div>
                  <div className="text-xl md:text-2xl text-rose-900 font-display font-bold leading-tight">
                    {data.perfumeRecommendation}
                  </div>
                </div>
              </div>
            </div>

            {/* Scent Notes */}
            <div className="relative z-10 mb-8">
              <div className="text-center mb-4">
                <span className="text-xs uppercase text-rose-600 font-bold tracking-wider">香调层次</span>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-3 rounded-lg bg-gradient-to-r from-rose-50/60 to-transparent">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-rose-300 to-pink-300 flex items-center justify-center text-white font-bold shadow-md">
                    T
                  </div>
                  <div className="flex-1">
                    <div className="text-xs font-bold text-rose-500 mb-1">前调 TOP</div>
                    <div className="text-sm text-rose-700">{data.notes.top}</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-3 rounded-lg bg-gradient-to-r from-pink-50/60 to-transparent">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-300 to-purple-300 flex items-center justify-center text-white font-bold shadow-md">
                    H
                  </div>
                  <div className="flex-1">
                    <div className="text-xs font-bold text-pink-500 mb-1">中调 HEART</div>
                    <div className="text-sm text-rose-700">{data.notes.heart}</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-3 rounded-lg bg-gradient-to-r from-purple-50/60 to-transparent">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-300 to-fuchsia-300 flex items-center justify-center text-white font-bold shadow-md">
                    B
                  </div>
                  <div className="flex-1">
                    <div className="text-xs font-bold text-purple-500 mb-1">后调 BASE</div>
                    <div className="text-sm text-rose-700">{data.notes.base}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Essence Description */}
            <div className="relative z-10">
              <div className="bg-gradient-to-r from-rose-100/50 to-pink-100/50 rounded-xl p-5 border border-pink-200/30">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-rose-400 text-lg">✨</span>
                  <h4 className="text-sm font-bold text-rose-800 font-display">香气精髓</h4>
                </div>
                <p className="text-rose-700 text-sm italic leading-relaxed">
                  {data.perfumeDescription}
                </p>
              </div>

              <div className="mt-4 text-center">
                <p className="text-xs text-rose-600 uppercase tracking-wider flex items-center justify-center gap-2">
                  <span>💫</span>
                  <span>使用建议：{data.usageAdvice}</span>
                  <span>💫</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Action Button */}
      <div className="lg:hidden mt-8 text-center">
        <button
          onClick={onReset}
          className="px-8 py-3 bg-gradient-to-r from-rose-400 to-pink-400 hover:from-rose-500 hover:to-pink-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
        >
          <span className="flex items-center gap-2">
            <span>🔮</span>
            <span>重新为他人占卜</span>
          </span>
        </button>
      </div>
    </div>
  );
};