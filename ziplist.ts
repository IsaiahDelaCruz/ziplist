function zipList(list: unknown[], list2: unknown[]): unknown[] {
  const result = []; // creates a list to collect the resulting list with alternative elements 
  // for loop which sequences and pushes elements from passed arrays until both arrays empty
  for (let i = 0; i < list.length; i++) {
    result.push(list[i], list2[i]);
  }
  return result;
}

console.log(zipList(['a', 'b', 'c'], [1, 2, 3]));

function zipListTheFunctionWay(list: unknown[], list2: unknown[]): unknown[] {
  const result: unknown[] = [];
  list.forEach((element, index) => {
    result.push(element, list2[index]);
  });
  return result;
}

console.log(zipListTheFunctionWay(['a', 'b', 'c'], [1, 2, 3]));
