const { input } = require('../input')

const match = /\d/

const strapMeInBoys = () => {
    const calibrationData = input.map((line) => {
        const nums = line.split('').filter((char) => match.test(char))
        const firstDigit = nums[0]
        const lastDigit = nums[nums.length - 1]
        return parseInt(`${firstDigit}${lastDigit}`);
    })

    const calibrationValue = calibrationData.reduce((acc, curr) => acc + curr, 0)
    console.log(" ")
    console.log(`-Aight boss, here's the final calibration value: ${calibrationValue}. Hold still.`)
    console.log(" ")
    console.log(`The camera pans to the night sky. Piercing cries of despair can be heard in the distance.`)
    console.log(`The start to another jolly night...`)
    console.log(" ")
    console.log(`    ...        *                        *       *
    ...   *         * ..   ...                        *
*      ...        *           *            *
        ...               ...                          *
          ..                            *
  *        ..        *                       *
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
************************************************************`)
}

strapMeInBoys()