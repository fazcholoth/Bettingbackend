// Assuming you have two arrays of objects
const storedmatches = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Alice' },
    { id: 3, name: 'Bob' },
  ];
  
  const currentmatches = [
    { id: 1, name: 'John' },
    { id: 3, name: 'Bob' },
    { id: 4, name: 'Charlie' },
  ];
  
  // Find elements in arrayA that are not present in arrayB
  const matchesToAdd = currentmatches.filter((elementA) => !storedmatches.some((elementB) => elementB.id === elementA.id));
  
  // Add the elements to arrayB
  matchesToAdd.forEach((element) => {
    storedmatches.push(element);
  });
  
  console.log();
  