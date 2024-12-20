export interface IApiResponse {
    responseData: {
      translatedText: string;
    };
    responseStatus: number;
  }
  
  export interface ITranslateParams {
    query: string;
    fromLanguage: string;
    toLanguage: string;
  }
  