import * as T from './types';

export function buildApiUrl({ query, fromLanguage, toLanguage }: T.ITranslateParams): string {
  return `https://api.mymemory.translated.net/get?q=${encodeURIComponent(query)}&langpair=${fromLanguage}|${toLanguage}`;
}

export function checkApiResponse(response: Response): void {
  if (!response.ok) {
    throw new Error(`API Error: ${response.status} ${response.statusText}`);
  }
}
