'use client';

import React, { useEffect, useRef } from 'react';
import { FortuneResult } from '../types';

interface ResultProps {
  data: FortuneResult;
  onReset: () => void;
}

export const Result: React.FC<ResultProps> = ({ data, onReset }) => {
  const resultRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 平滑滚动到结果区域
    if (resultRef.current) {
      setTimeout(() => {
        resultRef.current?.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }, 300);
    }
  }, []);

  return (
    <div ref={resultRef} className="w-full max-w-7xl mx-auto animate-fade-in px-4">
      {/* 顶部标题 */}
      <div className="mb-8 sm:mb-10 md:mb-12 text-center">
        <div className="inline-block relative">
          <div className="absolute inset-0 blur-xl sm:blur-2xl bg-gradient-to-r from-[#A0153E] via-[#D4A5A5] to-amber-400 opacity-15 sm:opacity-20" />
          <h2 className="relative text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display text-gradient-gold animate-text-shine animate-celebration
            drop-shadow-[0_0_15px_rgba(255,215,0,0.3)] sm:drop-shadow-[0_0_20px_rgba(255,215,0,0.3)] mb-2 sm:mb-3 px-2">
            你的香气密码
          </h2>
          <div className="h-0.5 sm:h-1 w-24 sm:w-32 bg-gradient-to-r from-transparent via-amber-400 to-transparent rounded-full mx-auto mb-1.5 sm:mb-2" />
          <p className="text-[#E8B4B8]/70 text-xs sm:text-sm tracking-wider sm:tracking-widest uppercase px-2">Your Soul Signature</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">

        {/* 左侧栏 - 个人分析 */}
        <div className="lg:col-span-5 space-y-5 sm:space-y-6">
          {/* 灵魂本质卡片 */}
          <div className="glass-panel p-6 sm:p-8 rounded-2xl sm:rounded-3xl border-gold mystical-glow hover-lift animate-scale-in delay-100">
            <div className="text-center mb-5 sm:mb-6">
              <div className="inline-block px-4 sm:px-5 py-1.5 sm:py-2 rounded-full bg-gradient-to-r from-[#A0153E]/20 to-[#D4A5A5]/20
                border border-amber-400/30 mb-4 sm:mb-5">
                <span className="text-[10px] sm:text-xs font-bold tracking-[0.25em] sm:tracking-[0.3em] text-gradient-gold uppercase">
                  你的灵魂
                </span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-white/5 to-white/0 rounded-2xl p-6 mb-6 border border-white/10">
              <p className="text-[#E8B4B8] leading-relaxed text-sm md:text-base font-light">
                {data.personalityAnalysis}
              </p>
            </div>

            {/* 幸运元素 */}
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 rounded-xl bg-gradient-to-br from-[#A0153E]/10 to-[#D4A5A5]/10
                border border-[#C41E3A]/20">
                <span className="text-xs uppercase tracking-wider text-amber-300 block mb-2">幸运颜色</span>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <div
                    className="w-8 h-8 rounded-full border-2 border-white/30 shadow-lg"
                    style={{
                      backgroundColor: data.luckyColor.toLowerCase().includes('金') ? '#FFD700' :
                        data.luckyColor.includes('红') ? '#FF6B6B' :
                        data.luckyColor.includes('蓝') ? '#4ECDC4' :
                        data.luckyColor.includes('绿') ? '#95E77E' :
                        data.luckyColor.includes('紫') ? '#A78BFA' : '#FFB6C1'
                    }}
                  />
                </div>
                <span className="text-[#E8B4B8] font-light">{data.luckyColor}</span>
              </div>

              <div className="text-center p-4 rounded-xl bg-gradient-to-br from-[#D4A5A5]/10 to-amber-500/10
                border border-[#D4A5A5]/20">
                <span className="text-xs uppercase tracking-wider text-amber-300 block mb-2">幸运数字</span>
                <div className="text-4xl text-gradient-gold font-display font-bold my-1">
                  {data.fortune.luckyNumber}
                </div>
              </div>
            </div>
          </div>

          {/* 运势罗盘 */}
          <div className="glass-panel p-8 rounded-3xl mystical-glow hover-lift animate-scale-in delay-200">
            <div className="text-center mb-6">
              <div className="inline-block px-5 py-2 rounded-full bg-gradient-to-r from-[#A0153E]/20 to-[#D4A5A5]/20
                border border-amber-400/30">
                <span className="text-xs font-bold tracking-[0.3em] text-gradient-gold uppercase">
                  你的星辰指引
                </span>
              </div>
            </div>

            <div className="space-y-4">
              {/* 综合运势 */}
              <div className="group">
                <div className="p-4 rounded-xl bg-gradient-to-r from-[#A0153E]/10 to-transparent
                  hover:from-[#A0153E]/20 smooth-transition border border-[#C41E3A]/20">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#A0153E] to-[#D4A5A5]
                      flex items-center justify-center text-white text-lg font-bold shadow-lg shrink-0 mt-0.5">
                      ★
                    </div>
                    <div className="flex-1">
                      <div className="text-xs font-bold text-amber-300 mb-2 uppercase tracking-wider">综合运势</div>
                      <div className="text-sm text-[#E8B4B8] leading-relaxed font-light">{data.fortune.overall}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 事业运势 */}
              <div className="group">
                <div className="p-4 rounded-xl bg-gradient-to-r from-[#A0153E]/10 to-transparent
                  hover:from-[#A0153E]/20 smooth-transition border border-[#C41E3A]/20">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#A0153E] to-[#C88B8B]
                      flex items-center justify-center text-xl shadow-lg shrink-0 mt-0.5">
                      💼
                    </div>
                    <div className="flex-1">
                      <div className="text-xs font-bold text-amber-300 mb-2 uppercase tracking-wider">事业运势</div>
                      <div className="text-sm text-[#E8B4B8] leading-relaxed font-light">{data.fortune.career}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 感情运势 */}
              <div className="group">
                <div className="p-4 rounded-xl bg-gradient-to-r from-[#D4A5A5]/10 to-transparent
                  hover:from-[#D4A5A5]/20 smooth-transition border border-[#D4A5A5]/20">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#D4A5A5] to-[#E8B4B8]
                      flex items-center justify-center text-xl shadow-lg shrink-0 mt-0.5">
                      💝
                    </div>
                    <div className="flex-1">
                      <div className="text-xs font-bold text-amber-300 mb-2 uppercase tracking-wider">感情运势</div>
                      <div className="text-sm text-[#E8B4B8] leading-relaxed font-light">{data.fortune.love}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 健康运势 */}
              <div className="group">
                <div className="p-4 rounded-xl bg-gradient-to-r from-emerald-500/10 to-transparent
                  hover:from-emerald-500/20 smooth-transition border border-emerald-400/20">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500
                      flex items-center justify-center text-xl shadow-lg shrink-0 mt-0.5">
                      🌿
                    </div>
                    <div className="flex-1">
                      <div className="text-xs font-bold text-amber-300 mb-2 uppercase tracking-wider">健康运势</div>
                      <div className="text-sm text-[#E8B4B8] leading-relaxed font-light">{data.fortune.health}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 财富运势 */}
              <div className="group">
                <div className="p-4 rounded-xl bg-gradient-to-r from-amber-500/10 to-transparent
                  hover:from-amber-500/20 smooth-transition border border-amber-400/20">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-500 to-yellow-500
                      flex items-center justify-center text-xl shadow-lg shrink-0 mt-0.5">
                      💰
                    </div>
                    <div className="flex-1">
                      <div className="text-xs font-bold text-amber-300 mb-2 uppercase tracking-wider">财富运势</div>
                      <div className="text-sm text-[#E8B4B8] leading-relaxed font-light">{data.fortune.wealth}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 幸运方位 */}
            <div className="mt-6 pt-6 border-t border-[#C41E3A]/20">
              <div className="flex items-center justify-between p-4 rounded-xl
                bg-gradient-to-r from-[#A0153E]/10 to-[#D4A5A5]/10 border border-[#C41E3A]/20">
                <div>
                  <div className="text-xs uppercase text-amber-300 font-bold tracking-wider mb-1">幸运方位</div>
                  <div className="text-xl text-gradient-purple font-display font-bold">{data.fortune.luckyDirection}</div>
                </div>
                <div className="text-4xl opacity-50">🧭</div>
              </div>
            </div>
          </div>
        </div>

        {/* 右侧栏 - 香氛展示 */}
        <div className="lg:col-span-7">
          <div className="glass-panel p-10 rounded-3xl border-gold mystical-glow hover-lift animate-scale-in delay-300">
            {/* 装饰光晕 */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-[#D4A5A5]/10 to-[#A0153E]/10
              rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-amber-500/10 to-[#D4A5A5]/10
              rounded-full blur-2xl pointer-events-none" />

            {/* 香氛标题区 */}
            <div className="relative z-10 text-center mb-10">
              <div className="inline-flex items-center gap-3 mb-6">
                <span className="text-3xl">💎</span>
                <span className="text-xs font-bold tracking-[0.4em] text-gradient-gold uppercase">
                  灵魂香气
                </span>
                <span className="text-3xl">💎</span>
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display text-gradient-gold
                animate-text-shine drop-shadow-[0_0_25px_rgba(255,215,0,0.3)]
                leading-tight mb-4">
                {data.perfumeName}
              </h2>

              <p className="text-xl md:text-2xl text-[#D4A5A5] italic font-light mb-6 leading-relaxed">
                "{data.perfumeTagline}"
              </p>

              <div className="inline-block px-6 py-3 rounded-full
                bg-gradient-to-r from-[#A0153E]/20 via-[#D4A5A5]/20 to-amber-500/20
                border border-amber-400/30 backdrop-blur-sm">
                <span className="text-amber-200 font-semibold tracking-wide">
                  {data.fragranceFamily}
                </span>
              </div>
            </div>

            {/* 产品推荐卡片 */}
            <div className="relative z-10 mb-10">
              <div className="bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-8
                border border-white/20 shadow-2xl backdrop-blur-sm">
                <div className="text-center">
                  <div className="inline-flex items-center gap-2 mb-4">
                    <span className="text-amber-400 text-2xl">🏷️</span>
                    <span className="text-xs uppercase text-amber-300 font-bold tracking-[0.3em]">
                      为你精选
                    </span>
                  </div>
                  <div className="text-2xl md:text-3xl text-gradient-purple font-display font-bold leading-snug">
                    {data.perfumeRecommendation}
                  </div>
                </div>
              </div>
            </div>

            {/* 香调层次 */}
            <div className="relative z-10 mb-10">
              <div className="text-center mb-6">
                <span className="text-xs uppercase text-amber-300 font-bold tracking-[0.3em]">香调层次</span>
              </div>

              <div className="space-y-5">
                {/* 前调 */}
                <div className="flex items-start gap-5 p-5 rounded-2xl
                  bg-gradient-to-r from-[#D4A5A5]/10 to-transparent border border-[#D4A5A5]/20
                  hover:from-[#D4A5A5]/20 smooth-transition group">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#E8B4B8] to-[#D4A5A5]
                    flex items-center justify-center text-white text-xl font-bold shadow-xl shrink-0
                    group-hover:scale-110 smooth-transition">
                    T
                  </div>
                  <div className="flex-1">
                    <div className="text-xs font-bold text-amber-300 mb-2 uppercase tracking-wider">前调 Top Notes</div>
                    <div className="text-base text-[#E8B4B8] leading-relaxed font-light">{data.notes.top}</div>
                  </div>
                </div>

                {/* 中调 */}
                <div className="flex items-start gap-5 p-5 rounded-2xl
                  bg-gradient-to-r from-[#A0153E]/10 to-transparent border border-[#C41E3A]/20
                  hover:from-[#A0153E]/20 smooth-transition group">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#C41E3A] to-[#C88B8B]
                    flex items-center justify-center text-white text-xl font-bold shadow-xl shrink-0
                    group-hover:scale-110 smooth-transition">
                    H
                  </div>
                  <div className="flex-1">
                    <div className="text-xs font-bold text-amber-300 mb-2 uppercase tracking-wider">中调 Heart Notes</div>
                    <div className="text-base text-[#E8B4B8] leading-relaxed font-light">{data.notes.heart}</div>
                  </div>
                </div>

                {/* 后调 */}
                <div className="flex items-start gap-5 p-5 rounded-2xl
                  bg-gradient-to-r from-amber-500/10 to-transparent border border-amber-400/20
                  hover:from-amber-500/20 smooth-transition group">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-400 to-yellow-500
                    flex items-center justify-center text-white text-xl font-bold shadow-xl shrink-0
                    group-hover:scale-110 smooth-transition">
                    B
                  </div>
                  <div className="flex-1">
                    <div className="text-xs font-bold text-amber-300 mb-2 uppercase tracking-wider">后调 Base Notes</div>
                    <div className="text-base text-[#E8B4B8] leading-relaxed font-light">{data.notes.base}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* 香气精髓 */}
            <div className="relative z-10">
              <div className="bg-gradient-to-br from-[#A0153E]/10 to-[#D4A5A5]/10 rounded-2xl p-7
                border border-[#C41E3A]/20 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-amber-400 text-2xl">✨</span>
                  <h4 className="text-base font-bold text-gradient-gold font-display uppercase tracking-wider">
                    香气精髓
                  </h4>
                </div>
                <p className="text-[#E8B4B8] leading-relaxed italic font-light mb-6">
                  {data.perfumeDescription}
                </p>

                <div className="pt-4 border-t border-[#C41E3A]/20">
                  <div className="flex items-center gap-2 text-amber-300/90">
                    <span className="text-lg">💫</span>
                    <span className="text-xs uppercase tracking-wider font-semibold">灵感时刻：</span>
                  </div>
                  <p className="text-[#E8B4B8] mt-2 text-sm font-light leading-relaxed">
                    {data.usageAdvice}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 底部操作按钮 */}
      <div className="mt-10 sm:mt-12 text-center animate-scale-in delay-500">
        <button
          onClick={onReset}
          className="px-8 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-[#C41E3A] via-[#E8B4B8] to-amber-500
            hover:from-[#A0153E] hover:via-[#D4A5A5] hover:to-amber-600
            text-white font-semibold text-base sm:text-lg rounded-full min-h-[56px] sm:min-h-[64px]
            shadow-xl hover:shadow-2xl
            smooth-transition transform hover:scale-105 active:scale-95
            border-2 border-white/20
            mystical-glow relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent
            translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
          <span className="relative z-10 flex items-center justify-center gap-2 sm:gap-3">
            <span className="text-lg sm:text-xl">🔮</span>
            <span>探索更多灵魂密码</span>
            <span className="text-lg sm:text-xl">✨</span>
          </span>
        </button>

        {/* 品牌标识 */}
        <div className="mt-8 sm:mt-10 pb-4 animate-scale-in delay-600">
          <div className="inline-flex flex-col items-center gap-2 px-6 py-4 rounded-2xl
            bg-gradient-to-r from-[#A0153E]/5 to-[#D4A5A5]/5 border border-[#C41E3A]/10">
            <div className="text-gradient-gold font-display text-xl tracking-wider">
              AuraScent
            </div>
            <div className="text-[#D4A5A5]/60 text-xs tracking-[0.3em] uppercase font-light">
              Where Ancient Wisdom Meets Modern Soul
            </div>
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-amber-400/30 to-transparent mt-1" />
            <div className="text-[#C41E3A]/50 text-xs mt-1 font-light">
              解读星辰密码 · 寻找灵魂香气
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
