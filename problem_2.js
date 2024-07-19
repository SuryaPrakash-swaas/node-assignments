// Calculate Cutoff for Given Marks
// Check Whether he/she is eligible to apply the course

/* Input */
const studentMarks = {
    "maths": 78,
    "physics": 85,
    "chemistry": 62,
    "biology": 90
};
/* Input */


/* Logic Implementation Function */
let cutoff = 0
function calculateCutoff(marksJson) {
    
    for(const key in marksJson){
        console.log(marksJson[key]);
        cutoff=cutoff+marksJson[key]/4;
        

        }
    
    /* Write your logic here --- Start */

    /* Write your logic here --- End */
    console.log('The cutoff is:'+ cutoff);
}
/* Logic Implementation Function */


/* Logic Implementation Function */
const eligibilityCutOff = 75
function checkEligibility(mark){
    /* Write your logic here --- Start */
    if (mark>=75)
    {
        console.log("You are Eligible")
    }
    else
    {
        console.log("You are not Eligible")
    }

    // this function should return message like "You are Eligible" or "You are not Eligible"

    /* Write your logic here --- End */
}
/* Logic Implementation Function */


/* Function Call */
calculateCutoff(studentMarks);
checkEligibility(cutoff);
/* Function Call */

/* Expected Output */

// The cutoff is: 77.80
// You are Eligible

/* Expected Output */
