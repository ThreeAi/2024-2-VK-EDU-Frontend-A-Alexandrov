import TranslateUtils from './index';

console.log('start');

TranslateUtils.translate('Hello', 'en', 'ru')
  .then(res => console.log(res))
  .catch(error => console.error(error));
