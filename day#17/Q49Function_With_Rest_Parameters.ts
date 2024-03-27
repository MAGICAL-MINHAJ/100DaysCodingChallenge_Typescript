function loveHobbies(...listOfHobbies: string[]): void {
    if (listOfHobbies.length === 0) {
        console.log("You don't have any hobbies.");
    } else {
        console.log("You enjoy the following hobbies:");
        listOfHobbies.forEach(hobby => {
            console.log(`- ${hobby}`);
        });
    }
}

// Example 
loveHobbies("Reading", "Sleeping", "Coding");
