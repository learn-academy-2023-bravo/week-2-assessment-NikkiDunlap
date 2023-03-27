// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.
    // Pseudocode:
        // Input is a number that will create a function
        // Create a function called divisibleByThree
        // Use conditional statement to see if number is divisible by three or not
        // Function will return string of "is (not) divisble by three" for the 3 numbers given

describe("divisibleByThree", () => {
    it("decides if the number inside it is evenly divisible by three or not", () => {
        // a) Create a test with expect statements for each of the variables provided.
        expect(divisibleByThree1(15)).toEqual("is divisible by three");
        expect(divisibleByThree2(0)).toEqual("is not divisible by three");
        expect(divisibleByThree3(-7)).toEqual("is not divisble by three")
    })
})
            // output:  FAIL  ./jest.test.js
            //   divisibleByThree
            //   ✕ decides if the number inside it is evenly divisible by three or not

            // ● divisibleByThree › decides if the number inside it is evenly divisible by three or not

            //   ReferenceError: divisibleByThree is not defined
    
        
        // b) Create the function that makes the test pass.
        const divisibleByThree = (number) => {
        if(number % 3 === 0) {
            return "is divisible by three"
        } else if(number % 3 !== 0) {
            return "is not divisible by three"
        }
    }
            // output:  PASS  ./jest.test.js
            //   divisibleByThree
            //   ✓ decides if the number inside it is evenly divisible by three or not (1 ms)

            // Test Suites: 1 passed, 1 total
            // Tests:       1 passed, 1 total
            // Snapshots:   0 total
            // Time:        0.106 s, estimated 1 s
            // Ran all test suites.

// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

    // a) Create a test with expect statements for each of the variables provided.

        const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
        // Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
        const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
        // Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]

        //  Pseudocode:
            // Input is an array of strings 
            // Create a function named capitalizedWords
            // Use .map() to create a new array where each word is uppercase
            // Use .toUpperCase() to capitalize every first letter of the strings 
            // Concat the capitalized letters with the words
            // Return a new array with every first letter capitalized

    describe("capitalizedWords", () => {
        it("returns an array with all the words capitalized", () => {
            expect(capitalizedWords(randomNouns1)).toEqual(["streetlamp", "potato", "teeth", "conclusion", "nephew"]);
            expect(capitalizedWords(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango"]);
        })
    })
        //  FAIL  ./jest.test.js
            //   capitalizedWords
            //   ✕ returns an array with all the words capitalized (1 ms)

            // ● capitalizedWords › returns an array with all the words capitalized

            //   ReferenceError: capitalizedWords is not defined

            //     describe("capitalizedWords", () => {
    
    // b) Create the function that makes the test pass.
    const capitalizedWords = (array) => {
        return array.map(word => word.charAt(0).toUpperCase() + word.slice(1))
    } 

    // output:  PASS  ./jest.test.js
        //   capitalizedWords
        //   ✓ returns an array with all the words capitalized (1 ms)

        // Test Suites: 1 passed, 1 total
        // Tests:       1 passed, 1 total
        // Snapshots:   0 total
        // Time:        0.151 s, estimated 1 s
        // Ran all test suites.

// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

    // Pseudocode:
        // Input is a string that will create a function
        // Create a function named firstVowelIndex
        // Create an array of vowels
        // Create "for" loop that uses the .includes() method to check if the current character is a vowel
        // Use conditional statement to return [i] if/when a vowel is found
        // Function will return index of the first vowel in the strings given 

// a) Create a test with expect statements for each of the variables provided.

const vowelTester1 = "learn"
// Expected output: 1
const vowelTester2 = "academy"
// Expected output: 0
const vowelTester3 = "challenges"
// Expected output: 2

describe("firstVowelIndex", () => {
    it("takes a string and logs the index of the first vowel", () => {
        expect(firstVowelIndex(vowelTester1)).toEqual(1)
        expect(firstVowelIndex(vowelTester2)).toEqual(0)
        expect(firstVowelIndex(vowelTester3)).toEqual(2)
    })
})

// output:
    // FAIL  ./jest.test.js
    // firstVowelIndex
    //   ✕ takes a string and logs the index of the first vowel

    // ● firstVowelIndex › takes a string and logs the index of the first vowel

    //   ReferenceError: firstVowelIndex is not defined

// b) Create the function that makes the test pass.

const firstVowelIndex = (string) => {
    const vowels = ["a", "e", "i", "o", "u"];
    for (let i = 0; i < string.length; i++) {
        if (vowels.includes(string[i])) {
            return i
        }
    }

}

// output: 
    // PASS  ./jest.test.js
    //   firstVowelIndex
    //     ✓ takes a string and logs the index of the first vowel (1 ms)

    // Test Suites: 1 passed, 1 total
    // Tests:       1 passed, 1 total
    // Snapshots:   0 total
    // Time:        0.117 s, estimated 1 s
    // Ran all test suites.