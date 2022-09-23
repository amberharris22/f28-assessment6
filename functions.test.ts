const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
   test('return an array', () => expect(shuffleArray).not.toBe('')) 
   
   test('same length', () => {
      let arr = [1, 2, 3, 4, 5];
      let shuffleA = shuffleArray(arr);
      expect(shuffleA.length).toEqual(arr.length)
   })
})