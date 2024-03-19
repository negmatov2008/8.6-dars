// for (let index = 1; index <= 10; index++) {
//   if (index % 2) {
//   } else {
//     console.log(index);
//   }
// }

// //13
// let a = prompt("son kiriting");

// if (a <= 100) {
//   prompt("100 dan katta son kirit");
// } else {
//   alert("raxmat");
// }

// 14
// function tublar(n) {
//   tashqi: for (let i = 2; i <= n; i++) {
//     for (let z = 2; z < i; z++) {
//       if (i % z == 0) continue tashqi;
//     }
//     console.log(i);
//   }
// }
// tublar(20);

//easy1
// function findFirstRepeatedNumber(gifts) {
//   const idMap = new Map();

//   for (let i = 0; i < gifts.length; i++) {
//     if (idMap.has(gifts[i])) {
//       return gifts[i];
//     } else {
//       idMap.set(gifts[i], i);
//     }
//   }

//   return -1;
// }

// // Example toy identification numbers
// const gifts = [1, 3, 5, 2, 3, 4, 6, 2];

// const firstRepeatedNumber = findFirstRepeatedNumber(gifts);
// console.log(firstRepeatedNumber);

//easy2
// function makeGifts(gifts, materials) {
//   const giftsCanBeMade = [];

//   for (let i = 0; i < gifts.length; i++) {
//       const giftMaterials = gifts[i].split('');
//       let canMakeGift = true;

//       // Check if all materials needed for the gift are available
//       for (let j = 0; j < giftMaterials.length; j++) {
//           if (!materials.includes(giftMaterials[j])) {
//               canMakeGift = false;
//               break;
//           }
//       }

//       // Add the gift to the list if all materials are available
//       if (canMakeGift) {
//           giftsCanBeMade.push(gifts[i]);
//       }
//   }

//   return giftsCanBeMade;
// }

// // Example gifts and available materials
// const gifts = ['book', 'doll', 'car', 'socks'];
// const materials = ['b', 'o', 'd', 'l', 'c', 'a', 'r', 's'];

// const giftsCanBeMade = makeGifts(gifts, materials);
// console.log(giftsCanBeMade);

//easy3
// function findNaughtyStep(original, modified) {
//   let shorterLength = Math.min(original.length, modified.length);
//   const orgArr = original.split("");
//   const modArr = modified.split("");

//   if (original.length < modified.length) {
//     for (let i = 0; i < shorterLength; i++) {
//       if (original[i] !== modified[i]) {
//         return modified[i];
//       }
//     }
//   } else if (original.length > modified.length) {
//     for (let i = 0; i < shorterLength; i++) {
//       if (modified[i] !== original[i]) {
//         return original[i];
//       }
//     }
//   } else if (modified.length == original.length) {
//     return "";
//   }

//   if (original.length > modified.length) {
//     if (orgArr[orgArr.length - 1] !== modArr[modArr.length - 1]) {
//       return orgArr[orgArr.length - 1];
//     }
//   } else {
//     if (modArr[modArr.length - 1] !== orgArr[orgArr.length - 1]) {
//       return modArr[modArr.length - 1];
//     }
//   }

//   return "";
// }

// // Examples
// const original1 = "abcd";
// const modified1 = "abcde";
// console.log(findNaughtyStep(original1, modified1)); // Output: 'e'

// const original2 = "stepfor";
// const modified2 = "stepor";
// console.log(findNaughtyStep(original2, modified2)); // Output: 'f'

// const original3 = "abcde";
// const modified3 = "abcde";
// console.log(findNaughtyStep(original3, modified3)); // Output: ''

//medeium 1
// function decode(message) {
//   let regex = /\(([^()]*)\)/; // Regex to match the innermost parentheses

//   // Continue replacing innermost parentheses until none are left
//   while (regex.test(message)) {
//       message = message.replace(regex, function(match, group) {
//           return group.split('').reverse().join('');
//       });
//   }
  
//   return message;
// }

// // Example usage
// let christmasMessage = 'sa(u(cla)atn)s'; // Input Christmas message
// let formattedMessage = decode(christmasMessage);
// console.log(formattedMessage); // Output: "Hello World Hey"
