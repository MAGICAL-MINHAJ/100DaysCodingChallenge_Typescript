interface FlexibleList<T> {
    [key: string]: T;
  }
  
  // Example
  const myList: FlexibleList<number> = {
    section1: 10,
    section2: 20,
  };
  
  // Changing the section names dynamically
  const dynamicList: FlexibleList<number> = {};
  dynamicList['dynamicSection1'] = 30;
  dynamicList['dynamicSection2'] = 40;
  
  console.log(myList);
  console.log(dynamicList);
  