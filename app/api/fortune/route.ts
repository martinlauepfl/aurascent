import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

// Initialize Bailian API client (OpenAI compatible)
const client = new OpenAI({
  apiKey: process.env.BAILIAN || "",
  baseURL: "https://dashscope.aliyuncs.com/compatible-mode/v1",
});

// JSON Schema for the fortune result
const fortuneSchemaDescription = `
请严格按照以下 JSON 格式返回结果：
{
  "element": "用户的主要元素能量（例如：阴火、阳土、水、木、金等），请使用中文",
  "archetype": "用户的神秘原型称号，请使用中文",
  "personalityAnalysis": "基于数字命理学和占星学对用户性格的分析段落，请使用中文",
  "luckyColor": "为用户带来幸运的特定颜色，请使用中文",
  "fortune": {
    "overall": "用户的综合运势分析，请使用中文",
    "career": "用户的事业运势分析，请使用中文",
    "love": "用户的感情运势分析，请使用中文",
    "health": "用户的健康运势分析，请使用中文",
    "wealth": "用户的财富运势分析，请使用中文",
    "luckyNumber": 幸运数字（1-99之间的整数）,
    "luckyDirection": "用户的幸运方位（例如：东南、西北等），请使用中文"
  },
  "perfumeName": "为用户专属香氛取的创意、神秘名称，请使用中文",
  "perfumeTagline": "香水的一句诗意标签，请使用中文",
  "fragranceFamily": "香调族系（例如：花香醛调、木质辛辣调等），请使用中文",
  "perfumeRecommendation": "推荐的真实香水产品，包括完整的品牌+产品名称（例如：香奈儿N°5、迪奥真我、兰蔻奇迹等），请使用中文",
  "notes": {
    "top": "香水的前调成分，请使用中文",
    "heart": "香水的中调成分，请使用中文",
    "base": "香水的后调成分，请使用中文"
  },
  "perfumeDescription": "解释为什么这个香氛适合用户灵魂的描述，请使用中文",
  "usageAdvice": "何时或如何使用这个香氛以获得最佳效果的建议，请使用中文"
}
`;

export async function POST(request: NextRequest) {
  try {
    const profile = await request.json();

    // Check if API key is available
    if (!process.env.BAILIAN) {
      console.error("BAILIAN API key is not set");
      return NextResponse.json(
        { error: "API key not configured" },
        { status: 500 }
      );
    }

    console.log("Bailian API Key available, length:", process.env.BAILIAN.length);

    const model = "qwen3-max";

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

${fortuneSchemaDescription}

请只返回 JSON，不要包含任何其他文本。
    `;

    const response = await client.chat.completions.create({
      model: model,
      messages: [
        {
          role: "system",
          content: "你是一位精通占星学、命理学和调香艺术的神秘大师。你将根据用户的出生信息提供详细的运势分析和香氛推荐，并以 JSON 格式返回结果。"
        },
        {
          role: "user",
          content: prompt
        }
      ],
      temperature: 0.2,
      response_format: { type: "json_object" }
    });

    const text = response.choices[0]?.message?.content;
    if (!text) {
      throw new Error("No response from oracle.");
    }

    const result = JSON.parse(text);
    return NextResponse.json(result);

  } catch (error: any) {
    console.error("Oracle Error:", error);
    return NextResponse.json(
      { error: "Failed to generate fortune", details: error.message },
      { status: 500 }
    );
  }
}
