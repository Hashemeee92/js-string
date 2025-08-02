// JavaScript implementation of checking if a string contains all vowels

// Given string
let S = "Abulhashemio";

// Convert the string to lowercase to make the comparison case-insensitive
S = S.toLowerCase();

// Check if S contains all vowels using the includes() method and if statement
if (
  S.includes("a") &&
  S.includes("e") &&
  S.includes("i") &&
  S.includes("o") &&
  S.includes("u")
) {
  // All vowels are present in the string
  console.log("All vowels are present in the string");
} else {
  // At least one of the vowels is missing in the string
  console.log("at least one vowel missing");
}
