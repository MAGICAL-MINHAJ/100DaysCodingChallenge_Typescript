function calculateAverage(scores) {
    if (scores.length === 0) {
        return 0; // Return 0 if no scores are provided
    }
    var total = scores.reduce(function (acc, curr) { return acc + curr; }, 0); // Calculating the total sum of scores
    return total / scores.length; // Calculating the average by dividing the total sum by the number of scores
}
// Example 
var scores = [85, 90, 75, 88, 92];
var averageScore = calculateAverage(scores);
console.log('Average score:', averageScore.toFixed(2));
