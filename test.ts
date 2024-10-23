import {
  getRandomPerumpamaan,
  getPerumpamaanWithKeyword,
  getRandomPerumpamaanExcludingKeyword
} from './index.js';

console.log('Testing getRandomPerumpamaan...');
const randomQuote = getRandomPerumpamaan();
console.log(randomQuote);

// Test getPerumpamaanWithKeyword
console.log('Testing getPerumpamaanWithKeyword for "pagar"...');
const quotesWithKeyword = getPerumpamaanWithKeyword('pagar');
console.log(quotesWithKeyword);

// Test getRandomPerumpamaanExcludingKeyword
console.log('Testing getRandomPerumpamaanExcludingKeyword...');
const excludedQuotes = 'lama';
const randomQuoteExcluding =
  getRandomPerumpamaanExcludingKeyword(excludedQuotes);
console.log(randomQuoteExcluding);

// Final output
console.log('All tests executed.');
