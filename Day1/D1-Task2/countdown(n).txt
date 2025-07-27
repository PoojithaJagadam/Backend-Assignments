// countdown(n) 
// - Write a function countdown(n) that prints numbers from n to 1, one every 1 second.   

function countdown(n) {
    for(let i=n;i>0;i--) {
        setTimeout(function () {
            console.log(i);
        },(n-i+1)*1000);
    }
}
countdown(5);

/*output: after every one second the output will be displayed
5
4
3
2
1
*/
