import 'jest'
import FizzBuzz from './FizzBuzz'

describe('FizzBuzz', () => {
   it('prints "" when input is 0', () => {
      expect(FizzBuzz.print(0)).toBe('')
   })

   it('prints "FizzBuzz" when input is multiple of 3 and 5', () => {
      expect(FizzBuzz.print(15)).toBe('FizzBuzz')
   })

   it('prints "FizzBuzz" when input has a 3 and a 5 in it', () => {
      expect(FizzBuzz.print(35)).toBe('FizzBuzz')
   })

   it('prints "Fizz" when input is 3', () => {
      expect(FizzBuzz.print(3)).toBe('Fizz')
   })

   it('prints "Fizz" when input is multiple of 3', () => {
      expect(FizzBuzz.print(6)).toBe('Fizz')
   })

   it('prints "Fizz" when input has a 3 in it', () => {
      expect(FizzBuzz.print(13)).toBe('Fizz')
   })

   it('prints "Buzz" when input is 5', () => {
      expect(FizzBuzz.print(5)).toBe('Buzz')
   })

   it('prints "Buzz" when input is multiple of 5', () => {
      expect(FizzBuzz.print(10)).toBe('Buzz')
   })

   it('prints "Buzz" when input has a 5 in it', () => {
      expect(FizzBuzz.print(52)).toBe('Buzz')
   })

   it('prints the number when input is any other number', () => {
      expect(FizzBuzz.print(1)).toBe('1')
      expect(FizzBuzz.print(2)).toBe('2')
      expect(FizzBuzz.print(4)).toBe('4')
   })
})