console.log("Hello");
let myName = "Killian Meehan"
console.log(myName);


let myAge = 35
console.log(myAge);


let juliaAge = 32
let ageDiff = myAge - juliaAge;
console.log(ageDiff)


if (myAge < 21) {
    ageCheck = "You are not older than 21";
} else {
    ageCheck = "You are older than 21";
}
console.log(ageCheck);


if (myAge === juliaAge) {
    ageComp = "You are the same age as Julia";
} else if (myAge > juliaAge) {
    ageComp = "You are older than Julia";
} else {
    ageComp = "You are younger than Julia";
}
console.log(ageComp);


const classNames = ["Ottavia", "Jost", "Raúl", "Virginia", "Killian"];
classNames.sort();
console.log(classNames[0]);
console.log(classNames[classNames.length - 1]);


let namesLen = classNames.length;

for (i = 0; i < namesLen; i++) {
    console.log(classNames[i])}


const classAges = [27, 37, 42, 39, 35]
let n = 0;
while (n < classAges.length) {
    if (classAges[n] %2 == 0)
    console.log(classAges[n])
    n++;
}


// Write a function that receives an array as a parameter and prints the lowest number in the array to the console.
//Write a function that receives an array as a parameter and prints the biggest number in the array to the console
function myFunction(myArray) {
    console.log(`Min value: ${Math.min(...myArray)}. Max value: ${Math.max(...myArray)}`);
  }

myFunction(classAges)


//Write a function that receives two parameters, an array, and an index. 
//The function will print the value of the element at the given position (one-based) to the console. 
//For example, given the following array and index, the function will print '6'.
//var array = [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100]; var index = 1

const newArray = [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100]

function secondFunction(newArray, indexPos) {
    console.log(newArray[indexPos]);
  }

secondFunction(newArray, 7)


//Write a function that receives an array and only prints the values that repeat.
//For example, given the previous array, the function will print '6,23,33,100'.
//take an element, compare it to everything after that in array, populate a list if match, continue to end, return the new list.

//function thirdFunction(newArray) {
//    let matchy = []
//    let i = 0
//    let l = newArray.length
//    for (i in newArray)
//        if (newArray[i] in newArray.slice(i+1, l)) {
//            matchy.push(i)
//            i++
//        }
//        else {
//        i++
//    }
//    return console.log(matchy);
//  }
//
// thirdFunction(newArray)

i = 0, hash = {}, duplicates = [];
while(i < newArray.length){
  hash[newArray[i]] = hash[newArray[i]] ? hash[newArray[i]] += 1 : 1;
  if (hash[newArray[i]] === 2) 
    duplicates.push(newArray[i])
  i++;
}

console.log(duplicates)
