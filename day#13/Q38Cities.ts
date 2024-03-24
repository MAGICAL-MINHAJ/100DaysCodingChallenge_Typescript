function describeCity(city: string, country: string = "Pakistan"): void {
    console.log(`${city} is in ${country}.`);
  }
  
  describeCity("Paris", "France");  // Paris is in France.
  describeCity("Toronto", "Canada"); // Toronto is in Canada.
  describeCity("Quetta");           // Quetta is in Pakistan (default country).
  