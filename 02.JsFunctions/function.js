// 1. Göndərilmiş 2 ədəddən 1-cisini 2-cisinin qüvvətinə yüksəldən function. 

// function kvadrat(num1,num2) {
//     return num1**num2
// }

// let number1=+prompt("reqemi daxil et");
// let number2=+prompt("reqemi daxil et");

// summary=kvadrat(number1,number2);
// alert(summary);


// 2.Bir funksiya yazın , 3 parametr qəbul etsin.Birincisi array olsun ikinci və rəqəm arraydəki elementin hal-hazırda olduğu mövqeni, 3cü isə hansı mövqeyə hərəkət etdirməli olduğunuzu göstərsin.Beləliklə arrayın elementlərini bir yerdən başqa yerə hərəkət etdirin.
// function move(arr, from, to) {
//     const newArray = [];
    
//     for (let i = 0; i < arr.length; i++) {

//         if (i === from) {
//             continue; 
//         }
        
//         if (i >= to) {
//             yeniArray[i - 1] = arr[i]; 
//         } else {
//             yeniArray[i] = arr[i]; 
//         }
//     }
    
//     Array.splice(to, 0, arr[from]);
    
//     return yeniArray;
// }

// console.log(move([10, 20, 30, 40, 50], 0, 2));


// // Daxil edilən arraydə təkrarlanan elementi silən və yeni array qaytaran funksiya yazın.

// function deleteRepeate(arr) {
//     const newArr = [];

//     for (const element of arr) {
//         let exists = false;
//         for (const uniqueElement of newArr) {
//             if (element === uniqueElement) {
//                 exists = true; 
//                 break;
//             }
//         }
//         if (!exists) {
//             newArr.push(element);
//         }
//     }

//     return newArr;
// }

// console.log(deleteRepeate([1, 2, 2, 3, 4, 4, 5])); 


//4.Daxil edilən cümlənin bütün sözlərinin ilk hərfini böyük edərək qaytaran funksiya yazın.

// yaza bilmedim


// 5. Daxil edilən iki arrayi birləşdirən funksiya yazın.

// function Array(arr1, arr2) {
//     const generalArray = [];
    

//     for (let i = 0; i < arr1.length; i++) {
//         generalArray.push(arr1[i]);
//     }

//     for (let j = 0; j < arr2.length; j++) {
//         generalArray.push(arr2[j]);
//     }

//     return generalArray;
// }

// console.log(Array([1, 2, 3, 4, 5], [6, 7, 8, 9,10])); 


// 6. Daxil edilən cümlədə necə söz olduğun tapan funksiya yazın.

// function countWords(sentence) {
//     let count = 0;
//     let inWord = false;

//     for (let index = 0; index < sentence.length; index++) {
//         const word = sentence[index];

//         if (word !== ' ') {
//             if (!inWord) {
//                 inWord = true; 
//                 count++; 
//             }
//         } else {
//             inWord = false; 
//         }
//     }

//     return count;
// }

// console.log(countWords("Baki Azerbaycanin incisidir")); 


// 7. Function yazın. Parametr qəbul etsin və bu parametr bir array (ədədlərdən ibraət array) olsun. Funksiya həmin arrayin medianını tapsın.

// let findMedian = (arr) => {
//     const length = arr.length;

//     for (let i = 0; i < length; i++) {
//         for (let j = 0; j < length - 1; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//             }
//         }
//     }

//     let middle = length / 2;

//     if (length % 2 !== 0) {
//         return arr[(length - 1) / 2]; 
//     } 

//     else {
//         return (arr[length / 2 - 1] + arr[length / 2]) / 2; 
//     }
// }

// console.log(findMedian([3, 1, 2, 8, 5, 4])); 


// 8. Write a method that returns a duplicate-free array.

// let  deleteDuplicate=(arr) => {
//     const uniqueArray = [];
    
//     for (const item of arr) {
//         let exists = false;
//         for (const uniqueItem of uniqueArray) {
//             if (item === uniqueItem) {
//                 exists = true;
//                 break;
//             }
//         }
//         if (!exists) {
//             uniqueArray.push(item);
//         }
//     }

//     return uniqueArray;
// }
// console.log(deleteDuplicate([33,35,67,78,98,33,27,35]));


// 9- Bir string ve bir char qebul eden bir function yazın.Əgər daxil olunmuş char string-də varsa char-ın yerləşdiyi indekslərin cəmini yoxdursa -1 return etsin.

// let sumOfCharIndex=(str, char) => {
//     let sum = 0;
//     let found = false;

//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === char) {
//             sum += i;
//             found = true;
//         }
//     }

//     return found ? sum : -1; 
// }

// console.log(sumOfCharIndex("america", 'a'));


// 10-countries arrayindəki ölkələrin ilk 3 hərfini (hər bir hərf böyük olmalıdır) yeni arrayda yığın

// const getFirstThreeLetters = (countries) => {
//     const firstThreeLetters = [];
    
//     for (let i = 0; i < countries.length; i++) {
//         const country = countries[i];
//         let letters = '';

//         for (let j = 0; j < 3; j++) {
//             if (j < country.length) { 
//                 letters += country[j].toUpperCase(); 
//             }
//         }

//         firstThreeLetters.push(letters); 
//     }

//     return firstThreeLetters; }

// const countries = ["Finland", "Denmark", "Sweden", "Norway", "Iceland"];
// console.log(getFirstThreeLetters(countries));


// 11. Write a JavaScript program(function) that accepts a string as input and swaps the case of each character.

// const convert = (str) => {
//     let newOne = '';

//     for (let i = 0; i < str.length; i++) {
//         const char = str[i];
//         // Check if the character is uppercase or lowercase and swap accordingly
//         if (char === char.toUpperCase()) {
//             newOne += char.toLowerCase();
//         } else {
//             newOne += char.toUpperCase();
//         }
//     }

//     return newOne;
// }

// console.log(convert('SaLaM Azerbaycan')); 


// 12-Write a function that compares two arrays and returns true if they are identical.

// const equalChecking = (arr1, arr2) => {
//     if (arr1.length !== arr2.length) {
//         return false;
//     }
//     for (let i = 0; i < arr1.length; i++) {
//         if (arr1[i] !== arr2[i]) {
//             return false; 
//         }
//     }

//     return true;
// }

// console.log(equalChecking([23,4,5,67,87,34], [1, 2, 3, 4])); 














