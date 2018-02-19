/*
  Prompt: http://www.codewars.com/kata/romanize-russian-passports
*/

// function romanize(cyrillic) {
//   let string = '';

//   const hash = {
//     А: 'a',
//     а: 'a',
//     Б: 'b',
//     б: 'b',
//     В: 'v',
//     в: 'v',
//     Г: 'g',
//     г: 'g',
//     Д: 'd',
//     д: 'd',
//     Е: 'e',
//     е: 'e',
//     Ё: 'e',
//     ё: 'e',
//     Ж: 'zh',
//     ж: 'zh',
//     З: 'z',
//     з: 'z',
//     И: 'i',
//     и: 'i',
//     Й: 'i',
//     й: 'i',
//     К: 'k',
//     к: 'k',
//     Л: 'l',
//     л: 'l',
//     М: 'm',
//     м: 'm',
//     Н: 'n',
//     н: 'n',
//     О: 'o',
//     о: 'o',
//     П: 'p',
//     п: 'p',
//     Р: 'r',
//     р: 'r',
//     С: 's',
//     с: 's',
//     Т: 't',
//     т: 't',
//     У: 'u',
//     у: 'u',
//     Ф: 'f',
//     ф: 'f',
//     Х: 'kh',
//     х: 'kh',
//     Ц: 'ts',
//     ц: 'ts',
//     Ч: 'ch',
//     ч: 'ch',
//     Ш: 'sh',
//     ш: 'sh',
//     Щ: 'shch',
//     щ: 'shch',
//     Ъ: 'ie',
//     ъ: 'ie',
//     Ы: 'y',
//     ы: 'y',
//     Ь: null,
//     ь: null,
//     Э: 'e',
//     э: 'e',
//     Ю: 'iu',
//     ю: 'iu',
//     Я: 'ia',
//     я: 'ia',
//     ' ': ' '
//   };

//   for (let i = 0; i < cyrillic.length; i++) {
//     if (hash[cyrillic[i]]) {
//       string += hash[cyrillic[i]];
//     }
//   }

//   const fullName = string.split('');
//   fullName[0] = fullName[0].toUpperCase();

//   const spaceIndex = fullName.indexOf(' ');
//   if (spaceIndex) {
//     fullName[spaceIndex + 1] = fullName[spaceIndex + 1].toUpperCase();
//   }

//   return fullName.join('');
// }

var hash = {'а':'a','А':'A','б':'b','Б':'B','в':'v','В':'V','г':'g','Г':'G','д':'d','Д':'D','е':'e','Е':'E','ё':'e','Ё':'E','ж':'zh','Ж':'Zh','з':'z','З':'Z','и':'i','И':'I','й':'i','Й':'I','к':'k','К':'K','л':'l','Л':'L','м':'m','М':'M','н':'n','Н':'N','о':'o','О':'O','п':'p','П':'P','р':'r','Р':'R','с':'s','С':'S','т':'t','Т':'T','у':'u','У':'U','ф':'f','Ф':'F','х':'kh','Х':'Kh','ц':'ts','Ц':'Ts','ч':'ch','Ч':'Ch','ш':'sh','Ш':'Sh','щ':'shch','Щ':'Shch','ы':'y','Ы':'Y','ъ':'ie','Ъ':'Ie','э':'e','Э':'E','ю':'iu','Ю':'Iu','я':'ia','Я':'Ia',' ':' '};

function romanize(cyr) {
  return cyr.split('')
    .map( el => hash[el])
    .join('');
}

console.log(romanize('Иван Иван'));
console.log(romanize('Анастасия Иванов')); // Anastasiia Ivanov
console.log(romanize('Настя Попов')); // Nastia Popov
console.log(romanize('Никита Смирнов')); // Nikita Smirnov
console.log(romanize('Влад Соколов')); // Vlad Sokolov
console.log(romanize('Ольга Кузнецова')); // Olga Kuznetsova
console.log(romanize('Александр Васильев')); // Aleksandr Vasilev
console.log(romanize('Цветочек Михайлов')); // Tsvetochek Mikhailov
console.log(romanize('Дима Петров')); // Dima Petrov


// Strategy
// Iterate through cyrillic string and translate it to lowercase latin alphabet (spaces push to spaces)
// Concat each character to str, split on the ' ', and capitalize 1st char of each element, return it joined by the ' '

// Big-O
// Linear

// Inputs & Outputs
const input1 = 'Иван Иван';
const output1 = 'Ivan Ivan';

// Steps
// Given 'Иван Иван'
// Iterate through it 
// 'i'
// 'iv'
// 'iva'
// ...
// 'ivan ivan'
// Split on the ' '
// ['ivan', 'ivan']
// Capitalize arr[0][0] and arr[1][0]
// ['Ivan', 'Ivan']
// Join it by ' '
// 'Ivan Ivan'

// Constraints
// You should follow the rules for Russian passports (2013, ICAO), which can be found on Wikipedia
// If a capital Cyrillic letter transliterates into more than one Latin letters, only capitalize the first Latin letter. E.g. capital Cyrillic Щ becomes Shch.

// Function with comments
// function romanize(cyrillic) {
//   let string = '';
//   // Create hash of cyrillic alphabet to lowercase latin counterparts
//   // Iterate through cyrillic
//     // Concat the latin counterpart to string
//   // Split the string on ' '
//   // Capitalize arr[0][0] and arr[1][0]
//   // Return string joined
// }