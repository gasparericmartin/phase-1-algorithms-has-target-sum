function hasTargetSum(array, target) {
  let isThere = false
  for (let index = 0; index < array.length ;index++) {
    if (array[index] <= target) {
      let modArray = [...array]
      modArray.splice(index, 1)
      if (modArray.includes(target - array[index])) {
        isThere = true
      }
    }
  }
  return isThere
}

/* 
  Write the Big O time complexity of your function here
  0(nsquared)
*/

/* 
  Add your pseudocode here
  -set a boolean variable to false
  -Use a for loop to iterate over the array
  -on each iteration, if the element is greater than 
  target number, don't compare it.
  -If the element is less than the target number, subtract it
  from the target number and search for the result in the array
    -If the result is found, change the return value to true
  -return the boolean variable

*/

/*
  Add written explanation of your solution here
  -If any two numbers in the array added together equal target number
  the function returns true, if not, it returns false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log('Expecting: true');
  console.log('=>', hasTargetSum([7, 5, 19, 9, 0], 19))

  console.log('')

  console.log('Expecting: true')
  console.log('=>', hasTargetSum([2, 8, 4, 9, 4], 8))

  console.log('')

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
