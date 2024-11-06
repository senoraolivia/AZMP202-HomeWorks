
let arr = [
    {
      name: "test",
      key: 1,
    },
    {
      name: "task",
      key: 2,
    },
    {
      name: "tanqo",
      key: 3,
    },
    {
      name: "like",
      key: 4,
    },
    {
      name: "task",
      key: 5,
    },
    {
      name: "trust",
      key: 6,
    },
    {
      name: "test",
      key: 7,
    },
    {
      name: "last",
      key: 8,
    },
    {
      name: "tanqo",
      key: 9,
    },
    {
      name: "elephant",
      key: 10,
    },
    {
      name: "love",
      key: 11,
    },
    {
      name: "small",
      key: 12,
    },
    {
      name: "little",
      key: 13,
    },
  ];

// 1) "name"-i "t" herfi ile bashlayan obyektleri yeni arraya yigin (filter)
//   function Filtered(arr) {
//     return arr.filter(item => item.name.toLowerCase().startsWith('t'));
//   }
  
//   let result = Filtered(arr);
//   console.log(result);
  

// 2) "name"-i "t" herfi ile bashlayib "t" herfi ile biten obyektlerin sayini tapin (forEach)
// function Say(arr) {
//     let count = 0;   
//     arr.forEach(item => {
//       if (item.name.toLowerCase().startsWith('t') && item.name.toLowerCase().endsWith('t')) {
//         count++;
//       }
//     });
    
//     return count;
//   }
  
//   let result = Say(arr);
//   console.log(result);
  

// 3) "name"-i "t" herfi ile bashlayib "t" herfi ile biten obyektlerin "key"- lerinin cemini tapin
// function sumKeys(arr) {
//     let sum = 0;    
//     arr.forEach(item => {
//       if (item.name.toLowerCase().startsWith('t') && item.name.toLowerCase().endsWith('t')) {
//         sum += item.key;
//       }
//     });
    
//     return sum;
//   }
  
//   let result = sumKeys(arr);
//   console.log(result);


// 4) "name"-i "e" herfi ile biten obyeklerdeki name-in deyerini "SuperDev" sozu ile evezleyin.

// function Replace(arr) {
//     arr.forEach(item => {
//       if (item.name.toLowerCase().endsWith('e')) {
//         item.name = 'SuperDev';
//       }
//     });
//   }
  
//   Replace(arr);
//   console.log(arr);


// 5) "name"-i en uzun olan obyekti tapin
// function LongestName(arr) {
//     return arr.reduce((longest, current) => {
//       if (current.name.length > longest.name.length) {
//         return current;
//       }
//       return longest;
//     }, arr[0]); 
//   }
  
//   let longestNameObject = LongestName(arr);
//   console.log(longestNameObject);


//6) "name"-i en uzun olan obyektin key'ni tapin

// function findKey(arr) {
//     const longestObject = arr.reduce((longest, current) => {
//       return current.name.length > longest.name.length
//        ? current 
//        : longest;
//     });
  
//     return longestObject.key;
//   }
  
//   let keyOfLongestNameObject = findKey(arr);
//   console.log(keyOfLongestNameObject);


// 7)  "name"-i en uzun olan obyektin indexin kvadratini hesablayin
// function findSquare(arr) {

//     const longestObjectIndex = arr.reduce((longestIndex, current, index) => {
//       if (current.name.length > arr[longestIndex].name.length) {
//         return index; 
//       }
//       return longestIndex; 
//     }, 0); 
  
//     return Math.pow(longestObjectIndex, 2); 
//   }
  
//   let indexSquare = findSquare(arr);
//   console.log(indexSquare);

  

// 8) "name"-inin uzunlugu 4 olan obyektlerden ibaret yeni array yaradin. (filter)
// function selectObjects(arr) {
//     return arr.filter(item => item.name.length === 4);
//   }
  
//   let newArr = selectObjects(arr);
//   console.log(newArr);


//  9)  en boyuk "key" - i olan obyektin "name"-i ni tapin
// function findName(arr) {
//     const largestKeyObj = arr.reduce((maxKeyObj, currentObj) => {
//       return currentObj.key > maxKeyObj.key ? currentObj : maxKeyObj;
//     });
  
//     return largestKeyObj.name;
//   }
  
//   let nameOfLargestKeyObj = findName(arr);
//   console.log(nameOfLargestKeyObj);
  


// 10) terkibinde 2 'l' (el) herfi olan obyekt(ler)i tapin.-----

// 11) terkibinde ən az 2 't' herfi olan obyekt(ler)i tapın.-----


// 12) key'leri 10'dan boyuk ve "name"-i 'l' herfi ile bashlayan obyektleri tapaq
// function findObj(arr) {
//     return arr.filter(item => item.key > 10 && item.name.toLowerCase().startsWith('l'));
//   }
  
//   let newArr = findObj(arr);
//   console.log(newArr);
  


  
  
