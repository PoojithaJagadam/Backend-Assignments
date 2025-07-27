/* asyncPrint() - Write an async function that prints:
. "First" immediately
.  "Second" after 2 seconds
 .  "Third" after another 2 second  */

 function asyncPrint() {
    console.log("First")

    setTimeout(function () {
        console.log("Second");
        
        setTimeout(function () {
            console.log("Third");
        },2000);
    },2000);

 }

 asyncPrint();
 
 