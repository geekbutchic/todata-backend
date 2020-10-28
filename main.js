/********************
 * HELPER FUNCTIONS *
 ********************/

const getTodoName = function (element) {
  return element.text 
}

const getPriority = function (element) {
  return element.priority
}

const isComplete = function (element) {
  return element.complete === true
}

const notComplete = function (element) {
  return element.complete === false
}

const isHighPriority = function (element) {
  return element.priority > 1
}

const namePlusPriority = function (element) {
  let newPriority = '';

  element.priority === 2 ? newPriority = 'High' : newPriority = 'Low'

  return element.text + ' - ' + newPriority
}

// or 
// return element.text + ' - ' + (element.priority === 2 ? 'High' : 'Low');
// PEMDAS - parentheses, exponents, multiplication, division, addition, subtraction
// return `${element.text} - ${todo.priority === 2 ? 'High' : 'Low'}`;

/***********************
 * ITERATION FUNCTIONS *
 ***********************/

// const names = function (arr) {
//   const newNames = [];

//   for (const element of arr) {
//     newNames.push(getTodoName(element));
//   }
//   return newNames;
// }

const names = function(element) {
  return element.map(getTodoName)
}

// const priorities = function (arr) {
//   const newPriorities = [];

//   for (const element of arr) {
//     newPriorities.push(getPriority(element));
//   }

//   return newPriorities;
// }

const priorities = function(element) {
  return element.map(getPriority)
}

// const namesAndPriorities = function (arr) {
//   const newList = [];    

//   for (const element of arr) {
//     newList.push(namePlusPriority(element));
//   }

//   return newList;
// }

const namesAndPriorities = function(element) {
  return element.map(namePlusPriority)
}

// const justComplete = function (arr) {
//   const notComplete = [];

//   for (const element of arr) {
//     if (isComplete(element)) {
//       notComplete.push(element)
//     }
//   }
//   return notComplete;
// }

const justComplete = function(element) {
  return element.filter(isComplete)
} 


const priority2Only = function (arr) {
  const highPriority = [];

  for (const element of arr) {
    if (isHighPriority(element)) {
      highPriority.push(element)
    }
  }
  return highPriority;
}



const priority1Only = function (arr) {
  const lowPriority = [];

  for (const element of arr) {
    if (!isHighPriority(element)) {
      lowPriority.push(element)
    }
  }
  return lowPriority;
}

const justNotComplete = function (arr) {
  const notCompleted = [];

  for (const element of arr) {
    if (!isComplete(element)) {
      notCompleted.push(element)
    }
  }

    return notCompleted;
}

// Our code below

if (typeof getTodoName === 'undefined') {
  getTodoName = undefined;
}

if (typeof getPriority === 'undefined') {
  getPriority = undefined;
}

if (typeof isComplete === 'undefined') {
  isComplete = undefined;
}

if (typeof isHighPriority === 'undefined') {
  isHighPriority = undefined;
}

if (typeof names === 'undefined') {
  names = undefined;
}

if (typeof priorities === 'undefined') {
  priorities = undefined;
}

if (typeof namesAndPriorities === 'undefined') {
  namesAndPriorities = undefined;
}

if (typeof justComplete === 'undefined') {
  justComplete = undefined;
}

if (typeof priority2Only === 'undefined') {
  priority2Only = undefined;
}

if (typeof priority1Only === 'undefined') {
  priority1Only = undefined;
}

if (typeof justNotComplete === 'undefined') {
  justNotComplete = undefined;
}



module.exports = {
  getTodoName,
  getPriority,
  isComplete,
  isHighPriority,
  names,
  priorities,
  namesAndPriorities,
  justComplete,
  priority2Only,
  priority1Only,
  justNotComplete,
}
