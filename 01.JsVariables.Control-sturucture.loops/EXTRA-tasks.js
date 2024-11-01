// #  0 - 100 arası yalnız sadə ədədləri console'da çap edin

// for (let i = 2; i < 100; i++) { 
//     let isPrime = true; 

//     for (let j = 2; j <= i/2 ; j++) { 
//         if (i % j === 0) {
//             isPrime = false; 
//             break; 
//         }
//     }

//     if (isPrime) {
//         console.log(i); 
//     }
// }



// # product arrayindəki producların qiymətləri cəmini və ortalamasını tapın

// const products = [
//     {
//       id: 1,
//       title: "Smartphone",
//       description: "A high-end smartphone with the latest features.",
//       price: 799.99,
//     },
//     {
//       id: 2,
//       title: "Laptop",
//       description: "Powerful laptop with a large screen and fast processor.",
//       price: 1299.99,
//     },
//     {
//       id: 3,
//       title: "Coffee Maker",
//       description: "An automatic coffee maker with a built-in grinder.",
//       price: 99.99,
//     },
//     {
//       id: 4,
//       title: "Headphones",
//       description: "Wireless over-ear headphones with noise-cancellation.",
//       price: 199.99,
//     },
//     {
//       id: 5,
//       title: "Smart TV",
//       description: "55-inch 4K Smart TV with streaming apps built-in.",
//       price: 699.99,
//     },
//   ];

// let sum=0;
// let average;
// for (let i = 0; i < products.length; i++) {
//     sum+=products[i].price;
//     average= sum/products.length;

// }
// console.log(sum);
// console.log(average);



// # Daxil olunan ədədin array-də olub olmadığını təyin edən proqram tərtib edin.

// let arr=[1,2,3,4,5,6,7,8,9,10];
// let num=+prompt("ededi daxil edin");

// let daxildir = false; 

// for (let i = 0; i < arr.length; i++) {
//     if (num === arr[i]) {
//          daxildir = true; 
//         break;
//     }
// }

// if (daxildir) {
//     console.log("Daxildir");
// } else {
//     console.log("Daxil deyil");
// }


// tələbələr array-ində tələbələrin ortalaması ən yüksək olanı, ortalaması 90-dan yuxarı olanları tapan proqram yazın

// const students = [
//     { name: "Ali", scores: [90, 85, 92] },
//     { name: "Mammal", scores: [75, 80, 85] },
//     { name: "Camil", scores: [90, 95, 85] },
//     { name: "Davud", scores: [100, 100, 100] } ];
  
//   let highestAverage = 0;
//   let highestStudent;
//   let above90 = [];
  
//   for (let student of students) {
//       let total = 0;
  
//       for (let score of student.scores) {
//           total += score;
//       }
  
//       const average = total / student.scores.length;
  
//       if (average > highestAverage) {
//           highestAverage = average;
//           highestStudent = student;
//       }

//       if (average > 90) {
//           above90.push(student);
//       }
//   }
  
  
//   console.log("Ortalaması ən yüksək olan tələbə: ", highestStudent);
//   console.log("Ortalaması 90-dan yuxarı olan tələbələr: ", above90);
  

// Write a JavaScript function to check if a given string is a palindrome (reads the same forwards and backwards).

// let text = "noon";
// let reversed = [];


// for (let i = text.length - 1; i >= 0; i--) {
//     reversed.push(text[i]);
// }

// let reversedStr = reversed.join('');

// if (reversedStr === text) {
//     console.log("palindromdur");
// } else {
//     console.log("palindrom deyil");
// }


