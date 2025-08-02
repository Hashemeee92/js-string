// JavaScript implementation of checking if a string contains all vowels

// Given string
let Str = "Abulhashemio";

// Convert the string to lowercase to make the comparison case-insensitive
Str = Str.toLowerCase();

// Check if S contains all vowels using the includes() method and if statement
if (
  Str.includes("a") &&
  Str.includes("e") &&
  Str.includes("i") &&
  Str.includes("o") &&
  Str.includes("u")
) {
  // All vowels are present in the string
  console.log("All vowels are present in the string");
} else {
  // At least one of the vowels is missing in the string
  console.log("at least one vowel missing");
}
