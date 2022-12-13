/**
 * PROBLEM
 * I will need to make a function that takes in 2 parameteres one being a array, the other being the group size
 * If there is some people who are left over I will need to randomize what group they are assigned to.
 */

/**
 * Pseudocode
 * I will need to make an array of people
 *
 * I will also need to make a varaible that will hold the amount of groups that we need
 *
 * I will need to loop through the array and push to a new array. (so that array that I am pushing to will be a multi dimensional array) [[john, paul, will], [isaac, titus, justin]]
 *
 * I also need to take into account how many groups I am receiving so I need to make sure that the array length is not longer than the group size.
 *
 * With the left overs I will need to push them into another array and then randomize that array to pushed into the multi dimensional array.
 */

const pplArr = [
  "Said",
  "Randy",
  "Leonard",
  "Nickolas",
  "Chris",
  "Johnny",
  "Jason",
  "Robert",
  "Jiabin",
  "Kenneth",
  "Songju",
  "Kailian",
  "Aharown",
  "Hung",
  "Horace",
  "Luke",
  "Jona",
  "Alexia",
  "Mike",
  "Fernando",
  "Will",
  "Jeffrey",
  "Titus",
  "Lonnie",
  "Andre",
  "Reginald",
  "Ricardo",
  "Joe",
];
let amountOfGroupsNeeded = 5;

/**
 *
 * @param {*} arr the array we are randomizing
 * @returns the array that is randomized
 */

function randomizeArray(arr) {
  return arr.sort(() => Math.random() - 0.5);
}
/**
 *
 * @param {*} names list of names
 * @param {*} numGroups number of groups needed
 * @returns the groups that have been split up
 */
function createGroups(names, numGroups) {
  // Calculate the size of each group
  const groupSize = Math.ceil(names.length / numGroups);

  // Split the names into groups of the calculated size
  const groups = [];
  for (let i = 0; i < names.length; i += groupSize) {
    groups.push(names.slice(i, i + groupSize));
  }

  return groups;
}

const randomized = randomizeArray(pplArr);
const calculateGroups = createGroups(randomized, amountOfGroupsNeeded);
console.log(calculateGroups);
