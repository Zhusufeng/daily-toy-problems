/*
Note: this is a more basic version of Romanize Russian Road Signs. Russian road signs require you to implement special rules for е and ё, Russian passports don't.

Story
You are Ivan, and you just started working at the Russian government.

Currently, when a citizen applies for a passport, a team of specialists transliterate the citizen's Cyrillic name into Latin by hand. Your assignment is to improve this, and make a program that transliterates names from Cyrillic to Latin automatically.

You should follow the rules for Russian passports (2013, ICAO), which can be found on Wikipedia.

Assignment
Make function romanize work right.

Input
A string containing the citizen's Cyrillic name cyrillic. The name will always consist of exactly two parts: a first name and a surname. The first name and the surname always start with a capital letter.

Example input: Иван Иванович

Output
A string containing the name of the citizen in Latin. The first letter of the first name and the surname should be a capital letter. If a capital Cyrillic letter transliterates into more than one Latin letters, only capitalize the first Latin letter. E.g. capital Cyrillic Щ becomes Shch.

Note that the soft sign ь has no transliteration and can thus be ignored.

Example output for example input: Ivan Ivanovich
*/

function romanize(cyrillic) {
  // удачи !
}


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

