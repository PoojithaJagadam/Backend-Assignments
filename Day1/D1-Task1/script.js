//Question: delayedPrint() 
// - Write a function delayedPrint() that prints "Hello after 5 seconds" after waiting 5 seconds. 

function delayedPrint() {
    setTimeout(function () {
        console.log("Hello after 5 seconds");
    }, 5000);
}

delayedPrint(); 

//after 5 seconds the below message will be displayed
//output: Hello after 5 seconds