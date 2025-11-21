'use client';

import React, { useState } from 'react';
import { Form } from '../components/Form';
import { Result } from '../components/Result';
import { Background } from '../components/Background';
import { Gender, UserProfile, FortuneResult, AppState } from '../types';

export default function Home() {
  const [appState, setAppState] = useState<AppState>(AppState.Input);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<FortuneResult | null>(null);

  const handleFormSubmit = async (data: UserProfile) => {
    setAppState(AppState.Loading);
    setError(null);

    try {
      const response = await fetch('/api/fortune', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to generate fortune');
      }

      const fortuneResult = await response.json();
      setResult(fortuneResult);
      setAppState(AppState.Result);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred');
      setAppState(AppState.Error);
    }
  };

  const handleReset = () => {
    setAppState(AppState.Input);
    setError(null);
    setResult(null);
  };

  return (
    <div className="min-h-screen relative">
      <Background />

      <div className="relative z-10">
        <header className="py-12 px-4">
          <div className="text-center">
            {/* Logo区域 */}
            <div className="mb-6">
              <div className="inline-block relative">
                {/* 发光圆环 */}
                <div className="absolute inset-0 rounded-full opacity-30 blur-2xl
                  bg-gradient-to-r from-[#A0153E] via-[#D4A5A5] to-amber-400 animate-glow-pulse" />

                {/* 主标题 */}
                <h1 className="relative text-5xl md:text-6xl lg:text-7xl font-display
                  text-gradient-gold animate-text-shine
                  drop-shadow-[0_0_30px_rgba(255,215,0,0.3)]
                  leading-tight mb-2 px-4">
                  AuraScent
                </h1>
              </div>
            </div>

            {/* 副标题 */}
            <div className="relative inline-block max-w-3xl mx-auto">
              <p className="text-lg md:text-xl font-light leading-relaxed mb-3
                bg-gradient-to-r from-[#E8B4B8] via-[#E8B4B8] to-amber-200
                bg-clip-text text-transparent px-4">
                解读你的星辰密码，寻找灵魂的香气
              </p>
              <div className="h-px w-40 mx-auto bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-50" />
            </div>

            {/* 价值主张 */}
            <div className="mt-8 max-w-2xl mx-auto px-6">
              <p className="text-sm md:text-base text-[#E8B4B8]/80 leading-relaxed font-light italic">
                每个人都是宇宙中独一无二的存在。<br className="hidden md:block" />
                通过古老的东方智慧与现代 AI 的结合，<br className="hidden md:block" />
                我们为你揭示命运的轨迹，并找到那一缕专属于你的香气。
              </p>
            </div>

            {/* 装饰性图标 */}
            <div className="flex items-center justify-center gap-8 mt-10">
              <div className="text-center">
                <span className="text-3xl animate-float drop-shadow-[0_0_10px_rgba(255,215,0,0.5)]">✨</span>
                <p className="text-xs text-[#D4A5A5]/60 mt-2 tracking-wider">星辰</p>
              </div>
              <div className="text-center">
                <span className="text-3xl animate-float drop-shadow-[0_0_10px_rgba(236,72,153,0.5)]"
                  style={{ animationDelay: '0.5s' }}>💎</span>
                <p className="text-xs text-[#D4A5A5]/60 mt-2 tracking-wider">灵魂</p>
              </div>
              <div className="text-center">
                <span className="text-3xl animate-float drop-shadow-[0_0_10px_rgba(167,139,250,0.5)]"
                  style={{ animationDelay: '1s' }}>🔮</span>
                <p className="text-xs text-[#D4A5A5]/60 mt-2 tracking-wider">香气</p>
              </div>
            </div>

            {/* 神秘感标语 */}
            <p className="mt-8 text-xs tracking-[0.4em] uppercase
              text-[#D4A5A5]/50 font-light">
              Where Ancient Wisdom Meets Modern Soul
            </p>
          </div>
        </header>

        <main className="container mx-auto px-4 py-8">
          {appState === AppState.Input && (
            <Form onSubmit={handleFormSubmit} isLoading={false} />
          )}

          {appState === AppState.Loading && (
            <div className="w-full max-w-lg mx-auto">
              <div className="glass-panel p-12 rounded-3xl mystical-glow hover-lift">
                {/* 旋转光晕 */}
                <div className="relative w-32 h-32 mx-auto mb-8">
                  {/* 外圈光晕 */}
                  <div className="absolute inset-0 rounded-full animate-rotate-glow
                    bg-gradient-to-r from-[#A0153E] via-[#D4A5A5] to-amber-400
                    opacity-30 blur-xl" />
                  {/* 中圈旋转 */}
                  <div className="absolute inset-4 rounded-full animate-rotate-glow
                    bg-gradient-to-br from-[#C88B8B] to-[#D4A5A5] opacity-40"
                    style={{ animationDuration: '15s', animationDirection: 'reverse' }} />
                  {/* 内圈水晶球 */}
                  <div className="absolute inset-6 bg-gradient-to-br from-white/10 to-white/5
                    backdrop-blur-md rounded-full border border-white/20
                    flex items-center justify-center shadow-inner">
                    <span className="text-4xl animate-float">🔮</span>
                  </div>
                </div>

                <h3 className="text-2xl md:text-3xl font-display text-gradient-purple font-bold mb-6">
                  星辰正在为你排列密码
                </h3>

                <div className="space-y-4 text-[#E8B4B8] text-sm">
                  <div className="flex items-center justify-center gap-3 p-2 rounded-lg
                    bg-gradient-to-r from-[#A0153E]/10 to-transparent">
                    <div className="w-2 h-2 bg-gradient-to-r from-amber-400 to-yellow-300
                      rounded-full animate-glow-pulse"></div>
                    <span className="font-light tracking-wide">解析星辰运行轨迹</span>
                  </div>
                  <div className="flex items-center justify-center gap-3 p-2 rounded-lg
                    bg-gradient-to-r from-[#D4A5A5]/10 to-transparent"
                    style={{ animationDelay: '0.3s' }}>
                    <div className="w-2 h-2 bg-gradient-to-r from-[#D4A5A5] to-[#E8B4B8]
                      rounded-full animate-glow-pulse" style={{ animationDelay: '0.3s' }}></div>
                    <span className="font-light tracking-wide">计算生命灵数密码</span>
                  </div>
                  <div className="flex items-center justify-center gap-3 p-2 rounded-lg
                    bg-gradient-to-r from-[#C88B8B]/10 to-transparent">
                    <div className="w-2 h-2 bg-gradient-to-r from-[#C88B8B] to-[#A0153E]
                      rounded-full animate-glow-pulse" style={{ animationDelay: '0.6s' }}></div>
                    <span className="font-light tracking-wide">调配专属灵魂香氛</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {appState === AppState.Result && result && (
            <Result data={result} onReset={handleReset} />
          )}

          {appState === AppState.Error && (
            <div className="w-full max-w-lg mx-auto">
              <div className="glass-panel p-10 rounded-3xl border-red-400/20">
                <div className="text-7xl mb-6 opacity-70">😔</div>
                <h3 className="text-2xl md:text-3xl font-display text-gradient-purple font-bold mb-4">
                  星辰暂时隐匿了踪迹
                </h3>
                <p className="text-[#E8B4B8] mb-8 leading-relaxed">
                  宇宙的能量波动偶尔会干扰信号<br />
                  请稍后再试,你的香气密码依然在等待被解读
                </p>
                <button
                  onClick={handleReset}
                  className="px-8 py-4 bg-gradient-to-r from-[#A0153E] via-[#D4A5A5] to-amber-500
                    hover:from-[#C41E3A] hover:via-[#E8B4B8] hover:to-amber-600
                    text-white font-semibold rounded-full
                    shadow-lg hover:shadow-2xl
                    transition-all duration-300 transform hover:scale-105
                    border border-white/20
                    mystical-glow"
                >
                  重新开始探索
                </button>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}