// Function to calculate the average grade
function calculateAverageGrade(grades) {
    if (grades.length === 0) {
        return 0; // Return 0 if the list of grades is empty
    }
    var total = grades.reduce(function (acc, curr) { return acc + curr; }, 0); // Calculating the total sum of grades
    return total / grades.length; // Calculating the average by dividing the total sum by the number of grades
}
// Example 
var grades = [80, 90, 75, 85, 95];
var averageGrade = calculateAverageGrade(grades);
console.log("Average grade:", averageGrade);
