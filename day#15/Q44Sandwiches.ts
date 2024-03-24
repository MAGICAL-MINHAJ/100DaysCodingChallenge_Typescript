function describeSandwich(...sandwichItems: string[]): void {
    // Checking if any items were provided
    if (sandwichItems.length === 0) {
      console.log("You forgot to order a sandwich!");
      return;
    }
  
    //  creating the summary message
    let summary = "You ordered a sandwich with ";
    if (sandwichItems.length === 1) {
      summary += sandwichItems[0];
    } else {
      
      for (let i = 0; i < sandwichItems.length - 1; i++) {
        summary += `${sandwichItems[i]}, `;
      }
      summary += `and ${sandwichItems[sandwichItems.length - 1]}`;
    }
    console.log(summary);
  }
  
  // Calling the function with different numbers of arguments
  describeSandwich("bread");
  describeSandwich("bread", "cheese", "turkey");
  describeSandwich("bread", "peanut butter", "jelly");
  