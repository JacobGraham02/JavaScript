// STEP 1: Initialize game variables
      // STEP 1a: Pick random number
      var colours = ["Brown","Aqua","BlueViolet","Chocolate","Crimson"];
      var ranNum = Math.floor(Math.random() * 50) + 1;
      // STEP 1b: Create variables to represent the three paragraphs above that will contain user feedback
      var guesses = document.querySelector("#guesses");
      var lastResult = document.querySelector("#lastResult");
      var lowOrHigh = document.querySelector("#lowOrHi");

      // STEP 1c: Create variables to represent the guessing form
      var guessField = document.querySelector("#guessField");
      var guessSubmit = document.querySelector("button")

      // STEP 1d: Create variables to initialize counter for number of guesses
      var guessCount = 1;
      // STEP 1e: Create a variable to represent the game reset button
      var resetButton;

      // STEP 2: Put focus on the field that allows user to type in guesses
      guessField.focus();

      // STEP 3: Build a function to check the user's guess
      function checkGuess() {
        // STEP 3a: Create a variable to contain what number the user entered
        var userGuess = Number(guessField.value);
        console.log("The user guessed: ".concat(userGuess));
        // STEP 3b: If this is the first guess, add some text to the screen as a label for listing previous guesses for reference
        if (guessCount === 1) {
          guesses.textContent="Previous guesses: ";
        }
        
        
        // STEP 3c: Add the user's current guess to that list, plus a space
        guesses.textContent += userGuess + " ";
        
        // STEP 3d: Conditional - the user guessed correctly
        if (userGuess === ranNum) {
          lastResult.textContent="You guessed the number!";
          lastResult.style.backgroundColor = "green";
          lowOrHigh.textContent="Congratulations!";
          //setGameOver();
        
          // Output a success message, then end the game
          
          
          
          
        // STEP 3e: Conditional - the user is all out of guesses
        } else if (guessCount === 7) {
          lastResult.textContent="You are out of guesses";
          lastResult.style.backgroundColor="red";
          //setGameOver();
        } 

        
          // Output an appropriate message, then end the game
          
          
        

        // STEP 3f: Conditional - the user's guess is incorrect
        else {
          // Output an appropriate message
          lastResult.textContent="Wrong!";
          lastResult.style.backgroundColor="yellow";
          // After 2 seconds, set the lowOrHigh paragraph background to be a random colour from an arraylist
          
          
    
          lowOrHigh.style.backgroundColor="blue";
          
          // If the guess is too low, let the user know
          if (userGuess < ranNum) {
            lowOrHigh.textContent="Your guess is too low";
            setRandomWidth_BorderRadius();
          } else if (userGuess > ranNum) {
            lowOrHigh.textContent="Your guess is too high";
            setRandomBackgroundColour();
          }
          
          // Else if the guess is too high, let the user know
          
          
          
        };
      
        // STEP 3g: Increment the guess count, move focus to the guess field for the next guess, and clear out the old input
        guessCount++;
        guessField.value="";
        guessField.focus();
        
        
        // STEP 3h: Proceed to the bottom of this file, just before we close out the SCRIPT element
      };

      // STEP 4: Build a function to end the game
      
        // STEP 4a: Disable the guessing field and submit button
        
        
        // STEP 4b: Build a new button to start a new game
        
        
        
        // STEP 4c: Add a click event to the new button that calls resetGame function
        
      

      // STEP 5: Build a function to start a new game
      
        // STEP 5a: Restore the guessCount variable to 1
        
        // STEP 5b: Clear out all the old messages in the paragraphs below the guessing form - this will need a loop
        
        
        
        
        // STEP 5c: Remove the reset button
        
        // STEP 5d: Re-enable the guessing form, clear out any old input, then put focus on the field
        
        
        
        
        // STEP 5e: Change background color of lastResult paragraph back to white
        
        // STEP 5f: Generate a new random number
        
      
      // STEP 3i: Add an event listener for the guess form button that calls the checkGuess function
      guessSubmit.addEventListener("click", checkGuess);

      function setRandomBackgroundColour() {
        setTimeout(function() {
          // Math.ceil rounds it up to nearest integer that is greater than number gotten
          lowOrHigh.style.backgroundColor = colours[Math.ceil(Math.random() * colours.length)];
          lowOrHigh.style.transition = "all 2s";
        }, 2000)
      }
      function setRandomWidth_BorderRadius() {
        setTimeout(function() {
          lowOrHigh.style.fontWeight="900";
          lowOrHigh.style.fontSize="72px";
          lowOrHigh.style.transition="all 2s";
        }, 2000)
      }