import { GoogleGenAI, Type, Schema } from "@google/genai";
import { UserProfile, FortuneResult } from "../types";

// Initialize API client
// API Key is expected to be in process.env.API_KEY
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const fortuneSchema: Schema = {
  type: Type.OBJECT,
  properties: {
    element: { type: Type.STRING, description: "用户的主要元素能量（例如：阴火、阳土、水、木、金等），请使用中文。" },
    archetype: { type: Type.STRING, description: "用户的神秘原型称号，请使用中文。" },
    personalityAnalysis: { type: Type.STRING, description: "基于数字命理学和占星学对用户性格的分析段落，请使用中文。" },
    luckyColor: { type: Type.STRING, description: "为用户带来幸运的特定颜色，请使用中文。" },
    fortune: {
      type: Type.OBJECT,
      properties: {
        overall: { type: Type.STRING, description: "用户的综合运势分析，请使用中文。" },
        career: { type: Type.STRING, description: "用户的事业运势分析，请使用中文。" },
        love: { type: Type.STRING, description: "用户的感情运势分析，请使用中文。" },
        health: { type: Type.STRING, description: "用户的健康运势分析，请使用中文。" },
        wealth: { type: Type.STRING, description: "用户的财富运势分析，请使用中文。" },
        luckyNumber: { type: Type.NUMBER, description: "用户的幸运数字，请提供1-99之间的数字。" },
        luckyDirection: { type: Type.STRING, description: "用户的幸运方位（例如：东南、西北等），请使用中文。" }
      },
      required: ["overall", "career", "love", "health", "wealth", "luckyNumber", "luckyDirection"]
    },
    perfumeName: { type: Type.STRING, description: "为用户专属香氛取的创意、神秘名称，请使用中文。" },
    perfumeTagline: { type: Type.STRING, description: "香水的一句诗意标签，请使用中文。" },
    fragranceFamily: { type: Type.STRING, description: "香调族系（例如：花香醛调、木质辛辣调等），请使用中文。" },
    perfumeRecommendation: { type: Type.STRING, description: "推荐的真实香水产品，包括完整的品牌+产品名称（例如：香奈儿N°5、迪奥真我、兰蔻奇迹等），请使用中文。" },
    notes: {
      type: Type.OBJECT,
      properties: {
        top: { type: Type.STRING, description: "香水的前调成分，请使用中文。" },
        heart: { type: Type.STRING, description: "香水的中调成分，请使用中文。" },
        base: { type: Type.STRING, description: "香水的后调成分，请使用中文。" }
      },
      required: ["top", "heart", "base"]
    },
    perfumeDescription: { type: Type.STRING, description: "解释为什么这个香氛适合用户灵魂的描述，请使用中文。" },
    usageAdvice: { type: Type.STRING, description: "何时或如何使用这个香氛以获得最佳效果的建议，请使用中文。" }
  },
  required: [
    "element",
    "archetype",
    "personalityAnalysis",
    "luckyColor",
    "fortune",
    "perfumeName",
    "perfumeTagline",
    "fragranceFamily",
    "perfumeRecommendation",
    "notes",
    "perfumeDescription",
    "usageAdvice"
  ]
};

export const generatePerfumeFortune = async (profile: UserProfile): Promise<FortuneResult> => {
  const model = "gemini-2.5-flash";

  const prompt = `
    请扮演一位精通西方占星学和中国八字命理的神秘大师，同时是一位专业的调香师。

    分析以下用户信息：
    姓名：${profile.name}
    出生日期：${profile.birthDate}
    出生时间：${profile.birthTime || "未知"}
    性别：${profile.gender}

    任务：
    1. 根据用户的出生日期计算其主要元素能量和神秘原型。
    2. 基于数字命理学和占星学分析其性格特征。
    3. 提供详细的运势分析，包括：综合运势、事业运势、感情运势、健康运势、财富运势，以及幸运数字和幸运方位。
    4. 设计一款能够平衡其能量或增强其最佳特质的专属香氛，推荐知名品牌和价格区间。
    5. 严格按照JSON格式返回结果，所有内容都必须使用中文。

    运势分析要求：
    - 基于用户的星座、生肖、八字等传统命理方法
    - 提供具体实用的建议和指导
    - 语调积极正面，即使是劣势也要给出改善建议

    香水推荐要求：
    - 推荐真实的、具体的香水产品（例如：香奈儿N°5、迪奥真我、兰蔻奇迹、古驰花悦、阿玛尼寄情等）
    - 请推荐市面上确实存在的产品，不要创造不存在的香水
    - 提供完整的品牌+产品名称
    - 香调要符合用户的性格特征和能量需求

    语调应该优雅、空灵且富有洞察力。确保所有返回的文本都是地道的中文表达。
  `;

  try {
    const response = await ai.models.generateContent({
      model: model,
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: fortuneSchema,
        temperature: 0.7,
      },
    });

    const text = response.text;
    if (!text) throw new Error("No response from oracle.");

    return JSON.parse(text) as FortuneResult;
  } catch (error) {
    console.error("Oracle Error:", error);
    throw error;
  }
};