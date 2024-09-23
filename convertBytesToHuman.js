/*
 * В этом задании надо разработать функцию
 * `convertBytesToHuman`. Эта функция  должна принимать
 * аргумент `bytes` только числового типа.
 * На выходе функция должна отдать
 * человекопонятную строку, которая будет
 * отражать размер файла. Примеры использования:
 * `convertBytesToHuman(1024) === '1 KB';`
 * `convertBytesToHuman(123123123) === '117.42 MB';`
 * Необходимо предусмотреть защиту от
 * передачи аргументов неправильного типа
 * и класса (например, отрицательные числа)
 */

export default function convertBytesToHuman(bytes) {
  if (typeof bytes !== 'number' || bytes < 0) {
    return false;
  }

  const units = ['B', 'KB', 'MB', 'GB', 'TB'];
  let index = 0;

  let size = bytes;
  while (size >= 1024 && index < units.length - 1) {
    size /= 1024;
    index++;
  }

  return `${size.toFixed(2) % 1 === 0 ? size.toFixed(0) : size.toFixed(2)} ${units[index]}`;
}
