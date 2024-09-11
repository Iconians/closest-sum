export function closest(numbers: number[], target: number): number {
   // sort array so it will be in order lowest number to highest
   numbers.sort((a, b) => a - b)
   // assign a initial value of the 1st 3 elements in array
   let closestSum = numbers[0] + numbers[1] + numbers[2]
   //  the numbers.length -2 is so we will always have 2 elements to check and not go out of bounds of the array 
   for (let i = 0; i < numbers.length - 2; i++) {
      // create pointers so I can check all 3 values one to check from beginning of array and one from the end of array
      let left = i + 1
      let right = numbers.length - 1
      //  while left is less then the right the while loop runs
      while(left < right) { 
         // the current sum to check against the closestSum above
         const currentSum = numbers[i] + numbers[left] + numbers[right]
         // checking if currentSum minus the target is less then closestSum minus the target number if it is we update closestSum
         if (Math.abs(currentSum - target) < Math.abs(closestSum - target)) {
            closestSum = currentSum
         }
         // we have an if/else block checking if currentSum is less then the target number which means we need a higher sum
         // and the opposite is true if the current sum is greater then the target number we need a lower sum
         //  or if the currentSum exactly equals the target then we return the current sum as we cant get closer 
         if (currentSum < target) {
            left++
         } else if (currentSum > target) {
            right--
         }else {
            return currentSum
         }
      }
   }
   // returns closestSum as the answer 
   return closestSum;
}

module.exports = { closest }

// improvements 
// some for clarity do closestSum do const [num1, num2, num3] = numbers.slice(0, 3)
// maybe do const currentDifference = Math.abs(currentSum - target); so not doing both at the same time in the if statement
// something I would like to try is to see if I could get it down to one loop instead of 2 but with checking 3 values I 
// don't know if I can do that 
