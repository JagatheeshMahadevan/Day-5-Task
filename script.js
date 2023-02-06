//* 1. print odd number in an array

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let oddNums = arr.filter(function(num) {
return num % 2 !== 0;
});
console.log("Odd numbers in the array are: " + oddNums);


// Output:
//[Odd numbers in the array are: 1,3,5,7,9]

//Using IIFE

(function() {
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let oddNums = arr.filter(num => num % 2 !== 0);
    console.log("Odd numbers in the array are: " + oddNums);
    })

//----------------------------------------

//* 2. Convert all the strings to title caps in a string array:

(function () {
    const arr = ['hello', 'world', 'javascript'];
    const result = arr.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
    console.log(result);
  })();

// Output:
//[ 'Hello', 'World', 'Javascript' ]

//---------------------------------------------------------

//* 3. Sum of all number in an array:

const array = [1, 2, 3, 4, 5];
const sum = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log("Sum of all numbers in the array:", sum);

//Output:
//Sum of all numbers in the array: 15+
//----------------------------------------

//* 4. Return all the prime numbers in an array:

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const primeNumbers = arr.filter(num => {
  if (num === 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
});

console.log(primeNumbers);


// Output:
//[ 2, 3, 5, 7 ]

//---------------------------------------------------------

//*5. Return all the palindromes in an array:
function findPalindromes(array) {
    return array.filter(function(word) {
      return word.split('').reverse().join('') === word;
    });
  }
  
  var words = ['level', 'hello', 'world', 'racecar'];
  console.log(findPalindromes(words));

// Output:
//[ 'level', 'racecar' ]

//---------------------------------------------------------

//* 6. Return median of two sorted arrays of the same size.
var m = function(a,b){
    var con = a.concat(b)
     con = con.sort()
    var length= con.length;
    if(length%2 ==1){
      return con[(length/2)-.5] 
      }else{
        return (con[length/2]+con[(length/2)-1])/2
        }
    }
    var a = [1,2,3,4,5];
    var b = [1,3,6,8,7];
    console.log(m(a,b))

//! Output:
//  3.5

//.....................................................................

//7. Return all the palindromes in an array:

function removeDuplicates(arr) {
  let uniqueArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (uniqueArray.indexOf(arr[i]) === -1) {
      uniqueArray.push(arr[i]);
    }
  }
  return uniqueArray;
}

let arrayWithDuplicates = [1, 2, 3, 1, 2, 3];
let arrayWithoutDuplicates = removeDuplicates(arrayWithDuplicates);

console.log("Array with duplicates: ", arrayWithDuplicates);
console.log("Array without duplicates: ", arrayWithoutDuplicates);

// Output:
// Array with duplicates:  (6) [1, 2, 3, 1, 2, 3]
// Array without duplicates:  (3) [1, 2, 3]

//---------------------------------------------------------

//* 8. Rotate an array by k times
const rotateArray = (array, k) => {
    while (k > 0) {
      let lastElement = array.pop();
      array.unshift(lastElement);
      k--;
    }
    return array;
  }
  
  console.log(rotateArray([1, 2, 3, 4, 5], 2));
  
// Output:
//  [4, 5, 1, 2, 3]

//--------------------------------------------------------

//Arrow Function :
//1. Print odd numbers in an array

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const oddNumbers = arr => arr.filter(num => num % 2 !== 0);
console.log(oddNumbers(arr));

// Output:
// [ 1, 3, 5, 7, 9 ]

//--------------------------------------------------------
//2. Convert all the strings to title caps in a string array

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const oddNumbers = arr => arr.filter(num => num % 2 !== 0);
console.log(oddNumbers(arr));

// Output:
// [ 1, 3, 5, 7, 9 ]

//--------------------------------------------------------
//3. Convert all the strings to title caps in a string array

const stringArray = ['hello', 'world', 'javascript'];
const result = stringArray.map(str => str.charAt(0).toUpperCase() + str.slice(1));
console.log(result);

// Output:
// [ 'Hello', 'World', 'Javascript' ]

//--------------------------------------------------------
//4. Sum of all numbers in an array

const arr = [1, 2, 3, 4, 5];
const sum = arr.reduce((acc, val) => acc + val, 0);
console.log("Sum:", sum);

//Output :
//Sum: 15

//--------------------------------------------------------
//5.Return all the prime numbers in an array

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const primeNumbers = arr.filter(num => {

  if (num <= 1) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
});

console.log(primeNumbers);

//Output :
//[ 2, 3, 5, 7 ]

//--------------------------------------------------------
//6.Return all the palindromes in an array
const palindromes = (arr) => {
    return arr.filter(word => {
      let revWord = word.split('').reverse().join('');
      return word === revWord;
    });
  }
  
  let words = ['level', 'deified', 'hello', 'world'];
  console.log(palindromes(words));

//Output :
//[ 'level', 'deified' ]

//___________________________________________________________________________