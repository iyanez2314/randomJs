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


const pplArr = ['isaac', 'justin', 'monic', 'cason', 'rory', 'christian', 'jason', 'martin', 'spanky', 'tasha', 'david', 'kenneth', ];
let groupAmount = 5; 

/**
 * 
 * @param {arr} arr the array we are randomizing 
 * @returns the array that is randomized
 */

function randomizeArray(arr){
    return arr.sort(() => Math.random() - 0.5);
};


/**
 * 
 * @param {arr} arr the array that is going to be spit up 
 * @param {numOfGroups} numOfGroups the number of groups we want 
 * @returns a multi dimensional array that are grouped up
 */

function createAMultiDimensional(arr, numOfGroups){
    const multiArray = [];

    for(let i = 0; i < arr.length; i += numOfGroups){
        /**
         * when we push we are slicing and creating a copy of the array and we are starting at 0 and then we are doing i + numOfGroups (on the first iteration it should be 0 + 5)
         * on the second iteration i is now 5 since we are doing i += numOfGroups 
         * in the meat of potatoes of the for loop we will get starting at 5 since we are pointing at i and then we are doing (i + numOfGroups and that 5 + 5)
         */
        multiArray.push(arr.slice(i, i + numOfGroups))
    }
    return multiArray;
}

// This variable will hold a COPY of the ppl arr
const randomized = randomizeArray(pplArr.slice());
// This variable will hold the multi dimensional array we creating
const multiArray = createAMultiDimensional(pplArr, groupAmount);
console.log(multiArray);


