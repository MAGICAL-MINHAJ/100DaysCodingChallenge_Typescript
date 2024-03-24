function describeCity(city, country) {
    if (country === void 0) { country = "Pakistan"; }
    console.log("".concat(city, " is in ").concat(country, "."));
}
describeCity("Paris", "France"); // Paris is in France.
describeCity("Toronto", "Canada"); // Toronto is in Canada.
describeCity("Quetta"); // Quetta is in Pakistan (default country).
