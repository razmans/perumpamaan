# Perumpamaan

This module provides functions to retrieve traditional Malay sayings (perumpamaan) from a predefined dictionary. You can get random sayings, find sayings based on keywords, and get random sayings excluding specific ones.

## Installation

To use this module, ensure you have TypeScript installed and set up in your project. You can include this module in your TypeScript project as follows:

Deno:
```bash
deno add jsr:@razmans/perumpamaan
```

NPM:
```bash
npx jsr add @razmans/perumpamaan
```

PNPM:
```bash
pnpm dlx jsr add @razmans/perumpamaan
```

Bun:
```bash
bunx jsr add @razmans/perumpamaan
```

## Usage

First, import the functions from the module:

```typescript
import { getRandomPerumpamaan, getPerumpamaanWithKeyword, getRandomPerumpamaanExcludingKeyword } from './perumpamaan.js';
```

### Functions

#### 1. `getRandomPerumpamaan()`

This function returns a random Malay saying from the dictionary.

**Returns**: `Quote` - A random quote object with `quote` and `meaning` properties.

**Example**:

```typescript
const randomSaying = getRandomPerumpamaan();
console.log(randomSaying);
```

#### 2. `getPerumpamaanWithKeyword(keyword: string)`

This function retrieves all sayings that include the specified keyword in either the `quote` or `meaning`.

**Parameters**:
- `keyword`: A string representing the keyword to search for.

**Returns**: `Quote[]` - An array of quote objects that match the keyword.

**Example**:

```typescript
const sayingsWithKeyword = getPerumpamaanWithKeyword('pagar');
console.log(sayingsWithKeyword);
```

#### 3. `getRandomPerumpamaanExcludingKeyword(excludedQuotes: string)`

This function returns a random Malay saying that does not match any of the excluded quotes provided.

**Parameters**:
- `excludedQuotes`: A string or array of strings representing the quotes to exclude from the random selection.

**Returns**: `Quote` - A random quote object that is not in the excluded list.

**Example**:

```typescript
const excludedWord = 'gajah';
const randomQuote = getRandomPerumpamaanExcludingKeyword(excludedWord);
console.log(randomQuote);
```

## Data Structure

Each quote object in the dictionary is structured as follows:

```typescript
interface Quote {
  quote: string;  // The saying itself
  meaning: string; // The meaning of the saying
}
```

## License

This module is licensed under the MIT License.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue to discuss improvements.

## Acknowledgements

Thanks to all the contributors and the rich cultural heritage of Malay sayings that inspire this module.