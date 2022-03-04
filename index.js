// O(n^2) solution
// function hasTargetSum(array, target) {
//     for (let i = 0; i < array.length; i++) {
//       for (let j = i+1; j < array.length; j++) {
//         if (array[i] + array[j] === target) {
//           return true 
//         }
//       }
//     }
//     return false
// }

// O(n) solution
function hasTargetSum(array, target) {
  hasSeen = {} 
  for (nums of array ) {
    const diff = target - nums 
    if (diff in hasSeen) return true 
    hasSeen[nums] = true 
    
  }
  return false 
}



// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
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
