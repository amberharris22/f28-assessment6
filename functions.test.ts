const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
   test('return an array', () => expect(shuffleArray).not.toBe('')) 
   test('same length', () => expect(shuffleArray.length).toEqual(1))
})