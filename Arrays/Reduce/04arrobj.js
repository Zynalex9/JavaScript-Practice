const data = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
    { id: 3, name: 'Doe' }
  ];
  
  const transformedObject = data.reduce((accumulator, currentValue) => {
    accumulator[currentValue.id] = currentValue.name;
    return accumulator;
  }, {});
  
  console.log(transformedObject);