// Function - 1 Array Slice
var foods = ['pizza', 'burger', 'fingerChips', 'donuts', 'springRoll']
var modifiedFood = foods.slice(1,4)
console.log(modifiedFood)


// --------------------------------------------------------------------------------------------
// Function - 2  
var foods = ['pizza', 'burger', 'fingerShips', 'donuts', 'springRoll']
// // Expected output: [pizza, burger, noodles, icecream, fingerShips, donuts, springRoll];

function add(array,index,to_be_added)
{
    array.splice(index,0,to_be_added)
}
add(foods,2,"noodles")
add(foods,3,"icecream")
console.log(foods)


// --------------------------------------------------------------------------------------------
// Function - 3 
const numberArray = [12, 324, 213, 4, 2, 3, 45, 4234];
var isEven = numberArray.filter(number => number % 2 == 0)
console.log(isEven)




// --------------------------------------------------------------------------------------------
// Function - 4
function nonprime(numberArray)
{
    arr1 = []
    for (let i of numberArray)
    {
        dividedby = 0
        for (let j = 1; j <= i; j++)
        {
            if (i % j === 0)
            {
                dividedby += 1
            }
        }
        if (dividedby > 2)
        {
            arr1.push(i)
        }
    }
    // console.log(arr1)
    return arr1
}
let nonPrime = nonprime(numberArray)
console.log(nonPrime)


// --------------------------------------------------------------------------------------------
// Function - 5
var isEven = numberArray.filter(number => number % 2 === 0)
console.log(isEven)



// --------------------------------------------------------------------------------------------
// Function - 6
const myArray = [11, 34, 20, 5, 53, 16];
var findSquareOfNumbers = myArray.map(number => number * number)
console.log(findSquareOfNumbers)


// --------------------------------------------------------------------------------------------
// Function - 7
let array = [2, 3, 5, 10]
const multiply = array.reduce((a,b) => a*b)
console.log(multiply)

// --------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------