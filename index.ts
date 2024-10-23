import { dictionary, Quote } from './perumpamaan.js';

export const getRandomPerumpamaan = (): Quote => {
  const randomIndex = Math.floor(Math.random() * dictionary.length);
  return dictionary[randomIndex];
};

export const getPerumpamaanWithKeyword = (keyword: string): Quote[] => {
  return dictionary.filter(
    (quote) => quote.quote.includes(keyword) || quote.meaning.includes(keyword)
  );
};

export const getRandomPerumpamaanExcludingKeyword = (
  excludedQuotes: string
): Quote => {
  const filteredQuotes = dictionary.filter(
    (quote) =>
      !excludedQuotes.includes(quote.quote) ||
      !excludedQuotes.includes(quote.meaning)
  );

  const randomIndex = Math.floor(Math.random() * filteredQuotes.length);
  return filteredQuotes[randomIndex];
};
