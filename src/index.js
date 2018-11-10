import Anagram from "./anagram";

const anagram = new Anagram("baboon");

const ltrs1 = ["a", "b", "b", "o", "o", "n"];
const ltrs2 = ["a", "b", "c", "n", "r", "s"];

console.log(anagram.isAnagram(ltrs1));
console.log(anagram.isAnagram(ltrs2));
