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
        <header className="py-8 px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display bg-gradient-to-br from-rose-600 via-pink-500 to-purple-600 bg-clip-text text-transparent leading-tight mb-4">
              AuraScent
            </h1>
            <p className="text-lg md:text-xl text-rose-700 font-light max-w-2xl mx-auto leading-relaxed">
              AI算命神谕 · 专属香氛推荐
            </p>
            <div className="flex items-center justify-center gap-4 mt-4">
              <span className="text-2xl animate-float">✨</span>
              <span className="text-2xl animate-float" style={{ animationDelay: '0.5s' }}>💎</span>
              <span className="text-2xl animate-float" style={{ animationDelay: '1s' }}>🔮</span>
            </div>
          </div>
        </header>

        <main className="container mx-auto px-4 py-8">
          {appState === AppState.Input && (
            <Form onSubmit={handleFormSubmit} isLoading={false} />
          )}

          {appState === AppState.Loading && (
            <div className="w-full max-w-md mx-auto">
              <div className="glass-panel p-12 rounded-2xl shadow-2xl text-center">
                <div className="relative w-24 h-24 mx-auto mb-6">
                  <div className="absolute inset-0 bg-gradient-to-r from-rose-400 to-pink-400 rounded-full animate-pulse"></div>
                  <div className="absolute inset-2 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <span className="text-3xl animate-spin">🔮</span>
                  </div>
                </div>
                <h3 className="text-2xl font-display bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent font-bold mb-3">
                  AI神谕正在解读您的命运密码...
                </h3>
                <div className="space-y-2 text-rose-600 text-sm">
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-2 h-2 bg-rose-400 rounded-full animate-pulse"></div>
                    <span>分析星辰运行轨迹</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                    <span>计算生命灵数密码</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                    <span>调配专属灵魂香氛</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {appState === AppState.Result && result && (
            <Result data={result} onReset={handleReset} />
          )}

          {appState === AppState.Error && (
            <div className="w-full max-w-md mx-auto">
              <div className="glass-panel p-8 rounded-2xl shadow-2xl text-center">
                <div className="text-6xl mb-4">😔</div>
                <h3 className="text-2xl font-display text-rose-800 font-bold mb-4">
                  神谕暂时无法连接
                </h3>
                <p className="text-rose-600 mb-6">{error}</p>
                <button
                  onClick={handleReset}
                  className="px-6 py-3 bg-gradient-to-r from-rose-400 to-pink-400 hover:from-rose-500 hover:to-pink-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  重新咨询
                </button>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}