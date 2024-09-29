import correctSentence from './correctSentence';

test('returns correct sentence', () => {
  expect(correctSentence("greetings, friends")).toBe("Greetings, friends.")
  expect(correctSentence("Greetings, friends")).toBe("Greetings, friends.")
  expect(correctSentence("Greetings, friends.")).toBe("Greetings, friends.")
  expect(correctSentence(['aaa', '', 'bbb    ', '', 'ccc'])).toBe('Aaa bbb ccc.')
  expect(correctSentence(['Aaa', '', 'bbb    ', '', 'ccc'])).toBe('Aaa bbb ccc.')
  expect(correctSentence(['Aaa', '', 'bbb    ', '', 'ccc.'])).toBe('Aaa bbb ccc.')
})

test('returns false for incorrect type', () => {
  expect(correctSentence(5)).toBe(false); 
  expect(correctSentence({})).toBe(false); 
  expect(correctSentence(null)).toBe(false); 
  expect(correctSentence(undefined)).toBe(false); 
  expect(correctSentence(NaN)).toBe(false); 
  expect(correctSentence(['Aaa', [] , 'bbb    ', '', 'ccc.'])).toBe(false);
  expect(correctSentence(['Aaa', {} , 'bbb    ', '', 'ccc.'])).toBe(false);
  expect(correctSentence(['Aaa', null , 'bbb    ', '', 'ccc.'])).toBe(false);
  expect(correctSentence(['Aaa', undefined , 'bbb    ', '', 'ccc.'])).toBe(false);
  expect(correctSentence(['Aaa', NaN , 'bbb    ', '', 'ccc.'])).toBe(false);
  expect(correctSentence(['Aaa', 5 , 'bbb    ', '', 'ccc.'])).toBe(false);
})
