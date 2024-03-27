// Function to calculate the average grade
function calculateAverageGrade(grades: number[]): number {
    if (grades.length === 0) {
        return 0; // Return 0 if the list of grades is empty
    }
    
    const total = grades.reduce((acc, curr) => acc + curr, 0); // Calculating the total sum of grades
    return total / grades.length; // Calculating the average by dividing the total sum by the number of grades
}

// Example 
const grades: number[] = [80, 90, 75, 85, 95];
const averageGrade: number = calculateAverageGrade(grades);

console.log("Average grade:", averageGrade);
