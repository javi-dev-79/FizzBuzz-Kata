class FizzBuzz {
   public static print(number: number): string {
      if (number === 0) {
         return ''
      }

      if (
         (number % 3 === 0 && number % 5 === 0) ||
         (number.toString().includes('3') && number.toString().includes('5'))
      ) {
         return 'FizzBuzz'
      }

      if (number % 3 === 0 || number.toString().includes('3')) {
         return 'Fizz'
      }

      if (number % 5 === 0 || number.toString().includes('5')) {
         return 'Buzz'
      }

      return `${number}`
   }
}

export default FizzBuzz
