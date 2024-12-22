import * as T from './types';
import { buildApiUrl, checkApiResponse } from './helpers';
import { getCachedTranslation, cacheTranslation } from './cache';

export async function translate(
  text: string,
  fromLanguage: string,
  toLanguage: string
): Promise<string> {
  const cached = getCachedTranslation(text, fromLanguage, toLanguage);
  if (cached) {
    console.log('Кешированный результат:', cached)
    return cached;
  }

  try {
    const apiUrl = buildApiUrl({ query: text, fromLanguage, toLanguage });
    const response = await fetch(apiUrl);

    checkApiResponse(response);

    const data: T.IApiResponse = await response.json();
    const translatedText = data.responseData.translatedText;
    
    cacheTranslation(text, fromLanguage, toLanguage, translatedText);

    return translatedText;
  } catch (error) {
    console.error('Ошибка при переводе:', error);
    throw new Error('Произошла ошибка при обращении к API');
  }
}
