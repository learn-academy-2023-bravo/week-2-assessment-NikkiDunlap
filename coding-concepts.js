// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

const cohort = "Bravo 2023"
// console.log(cohort.split(""))

// a) Your answer: ['B', 'r', 'a', 'v', 'o', ' ', '2', '0', '2', '3']
// b) Verify and explain: It returns all letters from the string into an array of separate letters (substrings). This happens because of the "split" method. 

// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
// console.log(greeter("LEARN Student"))

// a) Your answer: undefined
// b) Verify and explain: The following function logs as undefined because it is missing 'return.' In order to log the expected answer, it would need to be ran as 
  // const greeter = (name) => {
    // return `Hello, ${name}!`;
  // }
  // console.log(greeter("LEARN Student")) 

// --------------------3) What will this log?

const multipliedByTwo = [4, 5, 6, 7, 8].map((number) => number * 2)
// console.log(multipliedByTwo)

// a) Your answer: [8, 10, 12, 14, 16]
// b) Verify and explain: This function logs the following because it creates a new array multiplying all of the values in the original array by 2; however, it does not affect the original array.

// --------------------4) What will this log?

const onlyOdds = [11, 12, 13, 14, 15].filter((number) => number % 2 !== 0)
// console.log(onlyOdds)

// a) Your answer: [11, 13, 15]
// b) Verify and explain: The following array of numbers is logged because the .filter() method creates a new array of all values from the original array only returning the odd numbers.

// --------------------5) What will this log?

const myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
// console.log(myCodingSkills.languages[0])

// a) Your answer: Javascript
// b) Verify and explain: The following code returns Javascript because it has an argument of (myCodingSkills.languages[0]), meaning that it is only looking for the string at the index = 0, which is "Javascript" in the "languages" object.

// --------------------STRETCH: What will this log?

class Learn {
  constructor(name) {
    this.student = name
    this.cohort = "Bravo"
    this.year = 2023
  }
}
const learnStudent = new Learn("George")
// console.log(learnStudent)

// a) Your answer: Learn { student: 'George', cohort: 'Bravo', year: 2023 }
// b) Verify and explain: It created a new of the Learn class. The name argument passed to the constructor is "George", so the student property of the learnStudent object is set to "George."