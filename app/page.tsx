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
                  bg-gradient-to-r from-purple-500 via-pink-500 to-amber-400 animate-glow-pulse" />

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
            <div className="relative inline-block">
              <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto leading-relaxed mb-4
                bg-gradient-to-r from-purple-200 via-pink-200 to-amber-200
                bg-clip-text text-transparent">
                AI 神谕占卜 · 专属香氛灵魂
              </p>
              <div className="h-px w-32 mx-auto bg-gradient-to-r from-transparent via-gold-400 to-transparent opacity-50" />
            </div>

            {/* 装饰性图标 */}
            <div className="flex items-center justify-center gap-6 mt-8">
              <span className="text-3xl animate-float drop-shadow-[0_0_10px_rgba(255,215,0,0.5)]">✨</span>
              <span className="text-3xl animate-float drop-shadow-[0_0_10px_rgba(236,72,153,0.5)]"
                style={{ animationDelay: '0.5s' }}>💎</span>
              <span className="text-3xl animate-float drop-shadow-[0_0_10px_rgba(167,139,250,0.5)]"
                style={{ animationDelay: '1s' }}>🔮</span>
            </div>

            {/* 神秘感标语 */}
            <p className="mt-6 text-sm tracking-[0.3em] uppercase
              text-purple-300/70 font-light">
              揭示命运之谜 · 寻找灵魂之香
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
                    bg-gradient-to-r from-purple-500 via-pink-500 to-amber-400
                    opacity-30 blur-xl" />
                  {/* 中圈旋转 */}
                  <div className="absolute inset-4 rounded-full animate-rotate-glow
                    bg-gradient-to-br from-violet-400 to-fuchsia-400 opacity-40"
                    style={{ animationDuration: '15s', animationDirection: 'reverse' }} />
                  {/* 内圈水晶球 */}
                  <div className="absolute inset-6 bg-gradient-to-br from-white/10 to-white/5
                    backdrop-blur-md rounded-full border border-white/20
                    flex items-center justify-center shadow-inner">
                    <span className="text-4xl animate-float">🔮</span>
                  </div>
                </div>

                <h3 className="text-2xl md:text-3xl font-display text-gradient-purple font-bold mb-6">
                  AI 神谕正在解读命运密码
                </h3>

                <div className="space-y-4 text-purple-200 text-sm">
                  <div className="flex items-center justify-center gap-3 p-2 rounded-lg
                    bg-gradient-to-r from-purple-500/10 to-transparent">
                    <div className="w-2 h-2 bg-gradient-to-r from-amber-400 to-yellow-300
                      rounded-full animate-glow-pulse"></div>
                    <span className="font-light tracking-wide">解析星辰运行轨迹</span>
                  </div>
                  <div className="flex items-center justify-center gap-3 p-2 rounded-lg
                    bg-gradient-to-r from-pink-500/10 to-transparent"
                    style={{ animationDelay: '0.3s' }}>
                    <div className="w-2 h-2 bg-gradient-to-r from-pink-400 to-rose-300
                      rounded-full animate-glow-pulse" style={{ animationDelay: '0.3s' }}></div>
                    <span className="font-light tracking-wide">计算生命灵数密码</span>
                  </div>
                  <div className="flex items-center justify-center gap-3 p-2 rounded-lg
                    bg-gradient-to-r from-violet-500/10 to-transparent">
                    <div className="w-2 h-2 bg-gradient-to-r from-violet-400 to-purple-300
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
                  神谕暂时无法连接
                </h3>
                <p className="text-purple-200 mb-8 leading-relaxed">{error}</p>
                <button
                  onClick={handleReset}
                  className="px-8 py-4 bg-gradient-to-r from-purple-500 via-pink-500 to-amber-500
                    hover:from-purple-600 hover:via-pink-600 hover:to-amber-600
                    text-white font-semibold rounded-full
                    shadow-lg hover:shadow-2xl
                    transition-all duration-300 transform hover:scale-105
                    border border-white/20
                    mystical-glow"
                >
                  重新咨询神谕
                </button>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}