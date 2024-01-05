const { input } = require('../input')

const NUMBERS = {
    "1": 1,
    "2": 2,
    "3": 3,
    "4": 4,
    "5": 5,
    "6": 6,
    "7": 7,
    "8": 8,
    "9": 9,
    "one": 1,
    "two": 2,
    "three": 3,
    "four": 4,
    "five": 5,
    "six": 6,
    "seven": 7,
    "eight": 8,
    "nine": 9
}

const TEST = ["two1nine",
    "eightwothree",
    "abcone2threexyz",
    "xtwone3four",
    "4nineeightseven2",
    "zoneight234",
    "7pqrstsixteen"]

const getEmBoys = (strings, toFindRecord) => {
    let gotten = []

    for (let l = 0; l < strings.length; l++) {
        let string = strings[l]

        let a = 0
        let b = 0

        af: for (let i = 0; i < string.length; i++) {
            let slice = string.slice(i)
            for (let word in toFindRecord) {
                if (slice.startsWith(word)) {
                    a = toFindRecord[word]
                    break af
                }
            }
        }

        bf: for (let i = string.length - 1; i >= 0; i--) {
            // Get char and string char to check
            let slice = string.slice(i)
            for (let word in toFindRecord) {
                if (slice.startsWith(word)) {
                    b = toFindRecord[word]
                    break bf
                }
            }
        }
        gotten.push(parseInt(`${a}${b}`))
    }
    return gotten
}


const fixedCalibration = getEmBoys(input, NUMBERS).reduce((acc, curr) => acc + curr, 0)
console.log(" ")
console.log(`-Uh, Johnson, do you think he'll be alright? Someone passed the wrong value. It was ${fixedCalibration} for aiming.`)
console.log(`-He'll be alright... He'll be alright.`)
console.log(" ")
console.log(`The camera pans to the moon. A man crosses the night sky, flying between screams of help.`)
console.log(`The end of another jolly night...`)
console.log(" ")
console.log(`    ...        *                        *       *
    ...   *         * ..   ...                        *
*      ...        *           *            *
        ...               ...     	\\(°O°)/                     *
          ..                              |_|*
  *        ..        *                  _/  /   *
         __##____              *                      *
*    *  /  ##  ****                   *
       /        ****               *         *  X   *
 *    /        ******     *                    XXX      *
     /___________*****          *             XXXXX
      |            ***               *       XXXXXXX   X
  *   | ___        |                    *   XXXXXXXX  XXX
*     | | |   ___  | *       *             XXXXXXXXXXXXXXX
      | |_|   | |  ****             *           X   XXXXXXX   
  *********** | | *******      *                X      X
************************************************************ `)