/*
 * Необходимо покрыть все возможные
 * и невозможные кейсы. Например,
 * convertBytesToHuman(-1) === false,
 * convertBytesToHuman(-1) !== '1 B',
 * convertBytesToHuman('string') === false
 * convertBytesToHuman(5) === '5 B'
 */

import convertBytesToHuman from './convertBytesToHuman';

test('Возвращает false для неправильного типа данных', () => {
  expect(convertBytesToHuman('string')).toBe(false); 
  expect(convertBytesToHuman([])).toBe(false); 
  expect(convertBytesToHuman({})).toBe(false); 
  expect(convertBytesToHuman(null)).toBe(false); 
  expect(convertBytesToHuman(undefined)).toBe(false); 
});

test('Возвращает корректное значение для чисел', () => {
  expect(convertBytesToHuman(5)).toBe('5 B'); 
  expect(convertBytesToHuman(1024)).toBe('1 KB');
  expect(convertBytesToHuman(123123123)).toBe('117.42 MB'); 
  expect(convertBytesToHuman(0)).toBe('0 B'); 
  expect(convertBytesToHuman(1048578)).toBe('1 MB');
  expect(convertBytesToHuman(1073741824)).toBe('1 GB'); 
  expect(convertBytesToHuman(10737418248902)).toBe('9.77 TB'); 
  expect(convertBytesToHuman(1099511627776)).toBe('1 TB'); 
});

test('Возвращает false для значений меньше 0', () => {
  expect(convertBytesToHuman(-1)).toBe(false);
  expect(convertBytesToHuman(-1024)).toBe(false);
  expect(convertBytesToHuman(-100000)).toBe(false);
});

// другая группа проверок
