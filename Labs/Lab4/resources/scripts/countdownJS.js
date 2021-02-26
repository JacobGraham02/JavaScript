// STEP 1: Open this page in a browser tab and open up the console
// STEP 2: Build an HTML element of your choice above to contain the value of the var i (the counter inside the loop)
const countDownParagraph = document.querySelector("#countdownParagraph");
var colour = "white";
// STEP 3: Add a condition with an IF statement that checks if countDown is zero - and if it is, output text to the HTML element above that reads, "Blastoff!"
// STEP 4: Change the background color of the page from yellow (from 8-5) , to orange (from 4-1), and finally to red (at 0) using a SWITCH statement
// STEP 5: Upload your completed code to a hosted repository or a web server
// STEP 3
displayCountdown();

function displayCountdown() {
    for (let counter = 10; counter >= 0; counter--) {
        setTimeout(function() {
            countDownParagraph.textContent = counter;

            switch(Number(countDownParagraph.textContent)) {
                case 8:
                case 7:
                case 6:
                case 5:
                    colour = "yellow";
                    break;
                case 4:
                case 3:
                case 2:
                case 1:
                    colour = "orange";
                    break;
                case 0:
                    countDownParagraph.textContent = "Blastoff!";
                    colour = "red";
                    break;
                default:
                    colour = "white";
                    break;
            }
            countDownParagraph.style.backgroundColor = colour;
            
        }, 10000 - (1000 * counter));

        
    }
}
