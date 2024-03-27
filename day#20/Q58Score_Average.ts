function calculateAverage(scores: number[]): number {
    if (scores.length === 0) {
        return 0; // Return 0 if no scores are provided
    }
    const total = scores.reduce((acc, curr) => acc + curr, 0); // Calculating the total sum of scores
    return total / scores.length; // Calculating the average by dividing the total sum by the number of scores
}

// Example 
const scores: number[] = [85, 90, 75, 88, 92];
const averageScore = calculateAverage(scores);
console.log('Average score:', averageScore.toFixed(2));
