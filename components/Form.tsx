'use client';

import React, { useState } from 'react';
import { Gender, UserProfile } from '../types';

interface FormProps {
  onSubmit: (data: UserProfile) => void;
  isLoading: boolean;
}

export const Form: React.FC<FormProps> = ({ onSubmit, isLoading }) => {
  const [name, setName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [birthTime, setBirthTime] = useState('');
  const [gender, setGender] = useState<Gender>(Gender.Female);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ name, birthDate, birthTime, gender });
  };

  return (
    <div className="w-full max-w-lg mx-auto p-6 sm:p-8 md:p-10 glass-panel rounded-2xl sm:rounded-3xl mystical-glow hover-lift animate-fade-in">
      {/* 标题装饰 */}
      <div className="text-center mb-6 sm:mb-8">
        <div className="inline-block relative">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display text-gradient-gold mb-2">
            开启你的星辰之旅
          </h2>
          <div className="h-0.5 sm:h-1 w-20 sm:w-24 mx-auto bg-gradient-to-r from-transparent via-amber-400 to-transparent rounded-full" />
        </div>
        <p className="text-center text-[#E8B4B8] mt-3 sm:mt-4 text-xs sm:text-sm font-light tracking-wide leading-relaxed px-2">
          每个灵魂都有专属的香气密码<br />
          让我们从你诞生的那一刻开始解读
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6 md:space-y-7">
        {/* Name */}
        <div className="space-y-2 sm:space-y-3 group">
          <label className="block text-xs sm:text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] text-amber-300/90 font-semibold
            flex items-center gap-1.5 sm:gap-2">
            <span className="w-0.5 h-0.5 sm:w-1 sm:h-1 rounded-full bg-amber-400"></span>
            你的名字
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full bg-white/90 border-2 border-[#E8B4B8]/40 rounded-lg sm:rounded-xl px-4 sm:px-5 py-3 sm:py-4
              text-gray-800 font-light not-italic text-sm sm:text-base
              focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400/50 focus:bg-white
              outline-none smooth-transition [color-scheme:light]
              shadow-inner hover:border-[#D4A5A5]/60"
          />
        </div>

        {/* Birth Date */}
        <div className="space-y-2 sm:space-y-3 group">
          <label className="block text-xs sm:text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] text-amber-300/90 font-semibold
            flex items-center gap-1.5 sm:gap-2">
            <span className="w-0.5 h-0.5 sm:w-1 sm:h-1 rounded-full bg-amber-400"></span>
            诞生时刻
            <span className="text-[#D4A5A5] text-xs">*</span>
          </label>
          <input
            type="date"
            required
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
            className="w-full bg-white/90 border-2 border-[#E8B4B8]/40 rounded-lg sm:rounded-xl px-4 sm:px-5 py-3 sm:py-4
              text-gray-800 font-light not-italic text-sm sm:text-base
              focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400/50 focus:bg-white
              outline-none smooth-transition [color-scheme:light]
              shadow-inner hover:border-[#D4A5A5]/60
              [&::-webkit-calendar-picker-indicator]:cursor-pointer
              [&::-webkit-calendar-picker-indicator]:opacity-60
              [&::-webkit-calendar-picker-indicator]:hover:opacity-100"
          />
        </div>

        {/* Birth Time */}
        <div className="space-y-2 sm:space-y-3 group">
          <label className="block text-xs sm:text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] text-amber-300/90 font-semibold
            flex items-center gap-1.5 sm:gap-2">
            <span className="w-0.5 h-0.5 sm:w-1 sm:h-1 rounded-full bg-amber-400"></span>
            具体时辰
          </label>
          <input
            type="time"
            value={birthTime}
            onChange={(e) => setBirthTime(e.target.value)}
            className="w-full bg-white/90 border-2 border-[#E8B4B8]/40 rounded-lg sm:rounded-xl px-4 sm:px-5 py-3 sm:py-4
              text-gray-800 font-light not-italic text-sm sm:text-base
              focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400/50 focus:bg-white
              outline-none smooth-transition [color-scheme:light]
              shadow-inner hover:border-[#D4A5A5]/60
              [&::-webkit-calendar-picker-indicator]:cursor-pointer
              [&::-webkit-calendar-picker-indicator]:opacity-60
              [&::-webkit-calendar-picker-indicator]:hover:opacity-100"
          />
        </div>

        {/* Gender */}
        <div className="space-y-2 sm:space-y-3">
          <label className="block text-xs sm:text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] text-amber-300/90 font-semibold
            flex items-center gap-1.5 sm:gap-2">
            <span className="w-0.5 h-0.5 sm:w-1 sm:h-1 rounded-full bg-amber-400"></span>
            性别
          </label>
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {Object.values(Gender).map((g) => (
              <button
                key={g}
                type="button"
                onClick={() => setGender(g)}
                className={`py-3 sm:py-4 px-4 sm:px-6 rounded-lg sm:rounded-xl text-sm sm:text-sm font-medium smooth-transition relative overflow-hidden
                  ${
                    gender === g
                      ? 'bg-gradient-to-r from-[#A0153E] via-[#D4A5A5] to-amber-400 text-white shadow-lg border-2 border-white/30 mystical-glow scale-105'
                      : 'bg-white/40 border-2 border-[#E8B4B8]/40 text-[#D4A5A5] hover:bg-white/60 hover:border-[#D4A5A5]/60 hover:scale-102 active:scale-95'
                  }`}
              >
                {gender === g && (
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
                )}
                <span className="relative z-10">{g}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isLoading}
          className={`w-full mt-6 sm:mt-8 py-4 sm:py-5 rounded-full font-display text-base sm:text-lg font-semibold tracking-wide sm:tracking-wider
            text-white smooth-transition relative overflow-hidden group border-2 border-white/20 min-h-[56px] sm:min-h-[64px]
            ${
              isLoading
                ? 'opacity-70 cursor-not-allowed'
                : 'hover:scale-105 active:scale-95 mystical-glow hover:shadow-2xl'
            }`}
        >
          {/* 渐变背景 */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#C41E3A] via-[#E8B4B8] to-amber-500
            transition-transform duration-500 group-hover:scale-110"></div>

          {/* 闪光效果 */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent
            translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>

          <span className="relative z-10 flex items-center justify-center gap-3">
            {isLoading ? (
              <>
                <svg className="animate-spin h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <span>解读星辰中...</span>
              </>
            ) : (
              <>
                <span>🔮</span>
                <span>探寻我的香气</span>
                <span>✨</span>
              </>
            )}
          </span>
        </button>
      </form>
    </div>
  );
};
