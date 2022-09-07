const removeDuplicates = (listOfElements = []) => {
  // you instantiate a new set in JS using the new Set()
  // sets are similar to arrays that you but are unique in that they do not allow duplicate values to be in them.
  // They also come with special built in methods that you can use on them
  const formattedElements = new Set();
  // Sets are iterable like arrays
  for (const element of listOfElements) {
    // I am checking to see if the set doesn't have the element in it, if that is true, add the element, if not, it continues on with the loop
    // I'm using .add and .has which are methods you can use on sets
    if (!formattedElements.has(element)) formattedElements.add(element);
  }
  return formattedElements;
};

const numbers = [1, 2, 2, 2, 3, 4, 55, 67];
const names = ["Joe", "Joe", "William", "Phil"];
const uniqueNames = ["Joe", "joe", "William", "Phil"];
// like arrays, you can spread the contents of a set using the spread operator and see the actual contents in the console logs below
console.log(...removeDuplicates(numbers));
console.log(...removeDuplicates(names));
// elements have to be exact (strict) matches otherwise they will be treated as unique elements
console.log(...removeDuplicates(uniqueNames));
