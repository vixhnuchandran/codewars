// Create a function that takes a number as an argument and returns a grade based on that number.
// Score 	Grade
// Anything greater than 1 or less than 0.6 	"F"
// 0.9 or greater 	"A"
// 0.8 or greater 	"B"
// 0.7 or greater 	"C"
// 0.6 or greater




//My solution
function grader(score) {
    return (score > 1 ? "F" : (score < 0.9 ? (score < 0.8 ? (score < 0.7 ? (score < 0.6 ? "F" : "D") : "C") : "B") : "A"));

}