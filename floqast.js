console.log(`Starting process...\n`)

console.log(`Building log...`)
const log = [
    {userId: 1, error:'A'},
    {userId: 2, error:'A'},
    {userId: 2, error:'B'},
    {userId: 2, error:'B'},
    {userId: 1, error:'B'},
    {userId: 1, error:'C'},
    {userId: 2, error:'A'},
    {userId: 2, error:'C'}
    ]
console.log(`Built log of type ${typeof log} with items of type ${typeof log[0]} with keys [${Object.keys(log[0])}]\n`)

console.log(`Building user map..`)
const userMap = {}
console.log(`Built user map of type ${typeof userMap}\n`)

console.log(`Building counter...`)
let counter = 0;
console.log(`Built counter of type ${typeof counter} with starting value of ${counter}\n`)

console.log(`Iterating through each object in the log array`)
log.forEach( ({ userId, error }) => {
    counter++;
    console.log(`\nLog item #${counter}`)

    if (userMap[userId]) {
        console.log(`Found user of ID ${userId} in user map`)
        if (userMap[userId].charCodeAt(0) + 1 === error.charCodeAt(0)) {
            console.log(`User ${userId} has advanced to the next error of ${error}`)
            userMap[userId] = error
            if (userMap[userId] === `C`) {
                console.log(`\nHorary we found the ABC error!`)
                console.log(`Exiting process...`)
                process.exit(0)
            }
        } else if (`A` !== userMap[userId]) {
            console.log(`User ${userId} has been removed from the user map`)
            delete userMap[userId]
        }
    } else {
        console.log(`Did not find user ${userId} in user map`)
        if (error === 'A') {
            console.log(`Assigned user ${userId} with error ${error}`)
            userMap[userId] = error
        } else {
            console.log(`User ${userId} did not have error of A and was not assigned in map`)
        }
    }
})

console.log(`\nNo ABC error was found!`)
console.log(`Exiting process...`)
process.exit(0)

/* | Sample Logs |
Starting process...

Building log...
Built log of type object with items of type object with keys [userId,error]

Building user map..
Built user map of type object

Building counter...
Built counter of type number with starting value of 0

Iterating through each object in the log array

Log item #1
Did not find user 1 in user map
Assigned user 1 with error A

Log item #2
Did not find user 2 in user map
Assigned user 2 with error A

Log item #3
Found user of ID 2 in user map
User 2 has advanced to the next error of B

Log item #4
Found user of ID 2 in user map
User 2 has been removed from the user map

Log item #5
Found user of ID 1 in user map
User 1 has advanced to the next error of B

Log item #6
Found user of ID 1 in user map
User 1 has advanced to the next error of C

Horary we found the ABC error!
Exiting process...
*/