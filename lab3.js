console.log("Lab 3");

function Address(street, city, zip) {
  this.street = street;
  this.city = city;
  this.zip = zip;

  this.showAddress = function() {
    console.log(`${this.street}, ${this.city}, ${this.zip}`);
  };
  this.areEqual = function(otherAddress) {
    return (
      this.street === otherAddress.street &&
      this.zip === otherAddress.zip &&
      this.city === otherAddress.city
    );
  };
  this.areSame = function(otherAddress) {
    return this === otherAddress;
  };
}

const realAddress = new Address("Linkoln ave.", "Miami", "02232");
const cloneAddress = realAddress;
const anotherAddress = new Address("Linkoln ave.", "Miami", "02232");
realAddress.showAddress();
console.log("Equals", realAddress.areEqual(anotherAddress));
console.log("Same", realAddress.areSame(anotherAddress));
console.log("Same", realAddress.areSame(cloneAddress));

const blogPost = {
  title: "Test",
  body: "Some test",
  author: "S.B.",
  views: 20,
  comments: [
    {
      author: "S.T",
      body: "Cool!"
    },
    {
      author: "S.A",
      body: "Cool stuff!"
    }
  ],
  isActive: false
};
console.log(blogPost);
// split / join
const title = "Some article tile on my board";
const urlPart = title.split(" ").join("-");
console.log(urlPart);
// every / some
console.log([1, 2, -3].every(element => element >= 0));
console.log([1, 2, -3].some(element => element >= 0));
//reduce
const arrForReduce = [1, 2, 3, 4, 10];
const reduceTotal = {
  total: arrForReduce.reduce((accumulator, value) => accumulator + value)
};
console.log(reduceTotal);
// task 1
function arrayFromRange(min, max) {
  const result = [];
  for (let i = min; i <= max; i++) result.push(i);
  return result;
}
console.log(arrayFromRange(-3, -1));
//task 2
function myIncludes(array, searchElement) {
  for (let element of array) if (element === searchElement) return true;
  return false;
}
console.log("Includes", myIncludes([1, 2, 3, 4, 5], 10));
//task 3
function except(array, excludeArray) {
  const result = [];
  for (let item of array) {
    if (!excludeArray.includes(item)) result.push(item);
  }
  return result;
}
console.log("Exclude result", except([1, 2, 3, 4, 5, 5, 5], [1, 4, 5]));
// task 4
function countOccurances(array, searchElement) {
  return array.reduce((accumulator, value) => {
    return accumulator + (value === searchElement ? 1 : 0);
  }, 0);
}
console.log("Occurances", countOccurances([1, 2, 2, 3, 4, 5], 10));
//task 5
const movies = [
  { title: "a", year: 2018, rating: 4.5 },
  { title: "b", year: 2018, rating: 4.7 },
  { title: "c", year: 2018, rating: 3 },
  { title: "d", year: 2017, rating: 4.5 }
];
console.log(
  "Movies",
  movies
    .filter(x => x.year === 2018 && x.rating > 4)
    .sort((a, b) => a.rating - b.rating)
    .reverse()
    .map(x => x.title)
);
