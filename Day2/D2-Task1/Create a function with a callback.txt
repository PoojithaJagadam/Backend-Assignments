// Create a function with a callback that prints "Step 1" and
//  then after 1 second, prints "Step 2" using setTimeout.

function Step(callback) {
    console.log("Step 1");
    setTimeout(callback,1000);
}
function step2() {
    console.log("Step 2");
}
Step(step2)


// output: Step 1
// (wait 1 sec)
// Step 2