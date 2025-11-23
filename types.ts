export enum Gender {
  Female = '女性',
  Male = '男性'
}

export interface UserProfile {
  name: string;
  birthDate: string; // YYYY-MM-DD
  birthTime?: string; // HH:MM
  gender: Gender;
}

export interface PerfumeNote {
  type: 'Top' | 'Middle' | 'Base';
  description: string;
}

export interface FortuneResult {
  element: string; // e.g., Water, Fire, Earth
  archetype: string; // e.g., The Wandering Sage
  personalityAnalysis: string;
  luckyColor: string;

  // 运势信息
  fortune: {
    overall: string; // 综合运势
    career: string; // 事业运势
    love: string; // 感情运势
    health: string; // 健康运势
    wealth: string; // 财富运势
    luckyNumber: number; // 幸运数字
    luckyDirection: string; // 幸运方位
  };

  perfumeName: string;
  perfumeTagline: string;
  fragranceFamily: string; // e.g., Woody Oriental
  perfumeRecommendation: string; // 推荐的真实香水产品
  notes: {
    top: string;
    heart: string;
    base: string;
  };
  perfumeDescription: string;
  usageAdvice: string;
}

export enum AppState {
  Input = 'INPUT',
  Loading = 'LOADING',
  Result = 'RESULT',
  Error = 'ERROR'
}