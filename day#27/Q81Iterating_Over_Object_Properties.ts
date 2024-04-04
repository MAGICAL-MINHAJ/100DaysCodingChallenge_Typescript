function logObjectProperties(obj: Record<string, any>): void {
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        console.log(`${key}: ${obj[key]}`);
      }
    }
  }
  
  // run test.
  const myCar = {
    make: 'Toyota',
    model: 'Corolla',
    year: 2000,
    color: 'pink'
  };
  
  logObjectProperties(myCar);
  