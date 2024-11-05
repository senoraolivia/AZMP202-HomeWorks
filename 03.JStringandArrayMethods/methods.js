// STRING METHODS

// # Verilən bir cümlənin bütün hərflərini böyük hərflərə çevirən bir funksiya yazın.

// let convertToUpper=(sentence) => {
//     return sentence.toUpperCase();
//   }
  
//   let result = convertToUpper("qarabag azerbaycandir");
//   console.log(result); 
  

// # Daxil edilən cümlədə ən uzun sozu return edən funksiya yazın

// function Str(sentence) {
//        let words=sentence.split(" ");
//        let max=words[0].length; 
//             for (let index = 0; index < sentence.length; index++) {        
//           if (max<words[index].length) {
//              max=words[index];
//                 return max;
     
  
          
//        }
  
//      }
//   }
  
//     console.log(Str("Baki Azerbaycanin paytaxt seheridir"));


//  Verilən bir cümlədəki sözləri tərs sıraya düzmək üçün funksiya yazın.

// function reverseWords(sentence) {
//   return sentence.split(' ').reverse().join(' ');
// }


// let result = reverseWords("Lorem impsum dolor");
// console.log(result);  


// # Cümlədəki bir hərfi başqası ilə əvəzləyən və lowerCase edilmiş şəkildə qaytaran bir funksiya yazın.

// let replace=(text, oldOne, newOne)=> {

//   let replacedText = text.replace(oldOne, newOne);

//   return replacedText.toLowerCase();
// }

// let result = replace("America", "a", "e");
// console.log(result);  




// ARRAY METHODS

// #add 'Meat' in the beginning of your shopping cart if it has not been already added

// const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

// if (!shoppingCart.includes('Meat')) {
//   shoppingCart.unshift('Meat');
// }

// console.log(shoppingCart);


// #add Sugar at the end of you shopping cart if it has not been already added 

// const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

// if (!shoppingCart.includes('Sugar')) {
//   shoppingCart.push('Sugar');
// }

// console.log(shoppingCart);


// #remove 'Honey' if you are allergic to honey
// const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

// for (let i = 0; i < shoppingCart.length; i++) {
//   if (shoppingCart[i] === 'Honey') {
//     shoppingCart.splice(i, 1);
//     break; 
//   }
// }
// console.log(shoppingCart);


// #modify Tea to 'Green Tea'
// const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

// if (shoppingCart.includes('Tea')) {
//   const teaIndex = shoppingCart.indexOf('Tea');
//   shoppingCart[teaIndex] = 'Green Tea';
// }

// console.log(shoppingCart);





// 2)
// #Reverse countries array using reverse() method
// const countries = [
//   'Albania',
//   'Bolivia',
//   'Canada',
//   'Denmark',
//   'Ethiopia',
//   'Finland',
//   'Germany',
//   'Hungary',
//   'Ireland',
//   'Japan',
//   'Kenya'
// ];

// countries.reverse();

// console.log(countries);


// #remove "Canada" and "Denmark", and add "Azerbaijan 
// const countries = [
//   'Albania',
//   'Bolivia',
//   'Canada',
//   'Denmark',
//   'Ethiopia',
//   'Finland',
//   'Germany',
//   'Hungary',
//   'Ireland',
//   'Japan',
//   'Kenya'
// ];

// countries.splice(countries.indexOf('Canada'), 1); 
// countries.splice(countries.indexOf('Denmark'), 1); 
// countries.push('Azerbaijan');

// console.log(countries);




// 3) #Concatenate the following two variables and store it in a fullStack variable.
// const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
// const backEnd = ['Node.js', 'Express', 'MongoDB']; 

// const fullStack = frontEnd.concat(backEnd);

// console.log(fullStack);






// 4) #Slice out the first 3 companies from the array
// const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
// const firstThreeCompanies = itCompanies.slice(0, 3);

// console.log(firstThreeCompanies);


// #Slice out the last 3 companies from the array
// const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

// const last3 = itCompanies.slice(-3);

// console.log(last3);


// #Slice out the middle IT company or companies from the array
// const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

// const middleIndex = itCompanies.length / 2;

// const middleCompanies = itCompanies.length % 2 === 1
//   ? [itCompanies[Math.floor(middleIndex)]] 
//   : itCompanies.slice(middleIndex - 1, middleIndex + 1); 

// console.log(middleCompanies);

// #Sort companies array using sort() method
// const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
// itCompanies.sort();

// console.log(itCompanies);


// Hər bir şirkət adını böyük hərflərə çeviririk və çap edirik
// const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']

// itCompanies.forEach(function(company) {
//   console.log(company.toUpperCase());
// });


// Check if a "Google" company exists in the itCompanies array. If it exist return the company else return a company is not found
// const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
// let Exists;

// if (itCompanies.includes('Google')) {
//   Exists = 'Google company exists';
// } else {
//   Exists = 'Company is not found';
// }

// console.log(Exists);


// #Filter out companies which have more than one 'o' without the filter method
// const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
// const companiesWithTwoOs = [];

// for (let i = 0; i < itCompanies.length; i++) {
//   const company = itCompanies[i];

//   const oCount = company.toLowerCase().split('o').length - 1;

//   if (oCount > 1) {
//     companiesWithTwoOs.push(company);
//   }
// }

// console.log(companiesWithTwoOs);



// 5) Bir function yazın, parametr olaraq 2 array qebul edir və bir char qebul edir.gonderilmish char-a esasen hemin iki array-i ve elementlerini birleshdirib bir string olaraq return etmelidir. Meselen -> [1,2] [3,4] '*' gonderilerse output -> 1*2*3*4 string-i olmalidir.
// function concatArrays(arr1, arr2, char) {
//   const mergedArray = arr1.concat(arr2);
  
//   return mergedArray.join(char);
// }

// const result = concatArrays([77, 88], [99, 111], '/');
// console.log(result)











