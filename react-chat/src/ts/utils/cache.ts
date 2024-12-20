const cache: Map<string, string> = new Map();

function generateCacheKey(query: string, fromLanguage: string, toLanguage: string): string {
  return `${fromLanguage}->${toLanguage}:${query}`;
}

export function getCachedTranslation(query: string, fromLanguage: string, toLanguage: string): string | undefined {
  const key = generateCacheKey(query, fromLanguage, toLanguage);
  return cache.get(key);
}

export function cacheTranslation(query: string, fromLanguage: string, toLanguage: string, translation: string): void {
  const key = generateCacheKey(query, fromLanguage, toLanguage);
  cache.set(key, translation);
}
