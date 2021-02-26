/* Declare and initialize global variables
		-------------------------------------------------- */
		var pageBg = document.querySelector('html');
		var sliders = document.getElementsByTagName('input');
		var rgb = [0, 0, 0];

		/* Event handlers for range sliders
		-------------------------------------------------- */
		for (var i = 0; i < sliders.length; i++) {
			// Loop through the three range inputs and for each one, add an onchange event listener
			sliders[i].onchange = function() {
				// If an input range slider is moved, grab it’s id attribute value
				var whichSlider = this.getAttribute('id');
				// …also, grab the numerical value that it is set to
				var sliderValue = this.value;
				// Declare a new variable to hold the new RGB value that calls a function that updates the global rgb variable, passing in what slider was moved (whichSlider), and its value (sliderValue)
				newRgb = changeRgb(whichSlider, sliderValue);
				// Call a function that builds a new CSS background-color property (as a string), passing it the updated RGB array (newRgb)
				var newCSS = writeCss(rgb);
				// Directly change the background-color of the page using the new CSS rgb value
				pageBg.style.backgroundColor = newCSS;
			}
		}

		/* Functions
		-------------------------------------------------- */
		// STEP 1: Write a function called changeRgb that accepts two parameters, channel and value
		function changeRgb(channel, value) {
			// STEP 2: Build a switch based on the value of the channel parameter (red, green, or blue) (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch)
            switch (channel) {
                case "red":
                    rgb[0] = value;
                    break;
                case "green":
                    rgb[1] = value;
                    break;
                case "blue":
                    rgb[2] = value;
                    break;
            }
        }
		
		// STEP 5: Write a new function called writeCSS that accepts one parameter, the updated rgb array (Step 6 - 11 deleted because I found a much more efficient ) 
		function writeCss(newRgb) {
            // Begin background colour string with the correct CSS syntax
			let newColour = 'rgb('
                // Join each array element from the array passed into function, and build a new string from the returned values
                newRgbElements = newRgb.join(",");
                // Once the string is built, append an ending parenthesis onto the end of the rgb string
                newColour += newRgbElements + ')'
            // Return the new background colour string 
			return newColour;
        }
		// STEP 12: Enjoy the application in your browser!
		// This page inspired by https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Return_values