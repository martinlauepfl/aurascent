import React, { useState, useCallback } from 'react';
import { Background } from './components/Background';
import { Form } from './components/Form';
import { Result } from './components/Result';
import { generatePerfumeFortune } from './services/geminiService';
import { AppState, FortuneResult, UserProfile } from './types';

const App: React.FC = () => {
  const [state, setState] = useState<AppState>(AppState.Input);
  const [fortuneData, setFortuneData] = useState<FortuneResult | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleFormSubmit = useCallback(async (profile: UserProfile) => {
    setState(AppState.Loading);
    setErrorMsg(null);
    
    try {
      // Simulate a minimum wait time for the "mystical" effect
      const minWait = new Promise(resolve => setTimeout(resolve, 2000));
      const dataPromise = generatePerfumeFortune(profile);
      
      const [data] = await Promise.all([dataPromise, minWait]);
      
      setFortuneData(data);
      setState(AppState.Result);
    } catch (err) {
      console.error(err);
      setErrorMsg("今日命运之雾浓重，无法洞察您的未来。请重试。");
      setState(AppState.Error);
    }
  }, []);

  const handleReset = () => {
    setFortuneData(null);
    setErrorMsg(null);
    setState(AppState.Input);
  };

  return (
    <main className="min-h-screen w-full relative flex flex-col items-center justify-center p-4 md:p-8">
      <Background />

      <header className={`absolute top-0 left-0 w-full p-6 flex justify-between items-center z-50 transition-opacity duration-500 ${state === AppState.Result ? 'opacity-0 pointer-events-none md:opacity-100 md:pointer-events-auto' : 'opacity-100'}`}>
        <div className="flex items-center gap-2">
           <div className="w-8 h-8 rounded-full border border-pink-400/60 flex items-center justify-center bg-white/20">
              <div className="w-1 h-1 bg-pink-400 rounded-full shadow-[0_0_10px_#f472b6]"></div>
           </div>
           <h1 className="text-xl font-display font-bold tracking-widest text-rose-900">AuraScent</h1>
        </div>
      </header>

      <div className="w-full max-w-6xl z-10 mt-12 md:mt-0">
        {state === AppState.Input && (
          <div className="flex flex-col items-center">
             <Form onSubmit={handleFormSubmit} isLoading={false} />
          </div>
        )}

        {state === AppState.Loading && (
          <div className="flex flex-col items-center justify-center min-h-[400px] animate-pulse">
            <div className="relative w-32 h-32">
               <div className="absolute inset-0 border-t-2 border-pink-400 rounded-full animate-spin"></div>
               <div className="absolute inset-4 border-r-2 border-rose-300 rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '2s' }}></div>
               <div className="absolute inset-8 border-b-2 border-fuchsia-200 rounded-full animate-spin" style={{ animationDuration: '1.5s' }}></div>
               <div className="absolute inset-0 flex items-center justify-center">
                 <span className="text-4xl">💖</span>
               </div>
            </div>
            <p className="mt-8 font-display text-xl text-rose-700 tracking-widest uppercase">星辰占卜中</p>
            <p className="text-rose-600 text-sm mt-2">正在为您定制占星香氛档案...</p>
          </div>
        )}

        {state === AppState.Result && fortuneData && (
          <Result data={fortuneData} onReset={handleReset} />
        )}

        {state === AppState.Error && (
           <div className="max-w-md mx-auto text-center glass-panel p-8 rounded-xl">
              <div className="text-4xl mb-4">💔</div>
              <h3 className="text-xl font-display text-rose-600 mb-2">连接中断</h3>
              <p className="text-rose-500 mb-6">{errorMsg}</p>
              <button
                onClick={handleReset}
                className="px-6 py-2 bg-rose-500 hover:bg-rose-600 text-white rounded-lg transition-colors"
              >
                重新尝试
              </button>
           </div>
        )}
      </div>
      
        </main>
  );
};

export default App;