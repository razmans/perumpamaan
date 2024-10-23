import { dictionary } from './perumpamaan.js';
/**
 * @module getRandomPerumpamaan
 * @description Mengambil perumpamaan secara rawak dari senarai perumpamaan
 * @returns {Quote} Random perumpamaan
 * @example
 * ```const perumpamaan = getRandomPerumpamaan()```;
 */
export const getRandomPerumpamaan = () => {
    const randomIndex = Math.floor(Math.random() * dictionary.length);
    return dictionary[randomIndex];
};
/**
 * @module getPerumpamaanWithKeyword
 * @description Mengambil perumpamaan yang mengandungi kata kunci
 * @param keyword
 * @returns {Quote[]} Perumpamaan yang mengandungi kata kunci
 * @example
 * ```const perumpamaan = getPerumpamaanWithKeyword('pagar')```;
 */
export const getPerumpamaanWithKeyword = (keyword) => {
    return dictionary.filter((quote) => quote.quote.includes(keyword) || quote.meaning.includes(keyword));
};
/**
 * @module getRandomPerumpamaanExcludingKeyword
 * @description Mengambil perumpamaan secara rawak dari senarai perumpamaan, kecuali perumpamaan yang dinyatakan
 * @param excludedQuotes
 * @returns {Quote}
 * @example
 * ```const perumpamaan = getRandomPerumpamaanExcludingKeyword('mengikut')```;
 */
export const getRandomPerumpamaanExcludingKeyword = (excludedQuotes) => {
    const filteredQuotes = dictionary.filter((quote) => !excludedQuotes.includes(quote.quote) ||
        !excludedQuotes.includes(quote.meaning));
    const randomIndex = Math.floor(Math.random() * filteredQuotes.length);
    return filteredQuotes[randomIndex];
};
