function cityCountry(city: string, country: string): string {
    return `${city}, ${country}`;
  }
  
  let formattedString1 = cityCountry("Karachi", "Pakistan");
  console.log(formattedString1);  // Output: "Karachi, Pakistan"
  
  let formattedString2 = cityCountry("Tokyo", "Japan");
  console.log(formattedString2);  // Output: "Tokyo, Japan"
  
  let formattedString3 = cityCountry("New York", "USA");
  console.log(formattedString3);  // Output: "New York, USA"
  