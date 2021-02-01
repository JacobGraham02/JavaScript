			const output = document.querySelector('body p:nth-of-type(2)');
			console.log(output);
			/* STEP 1: Creating an array
			When declaring and initializing an array, you can include strings, numbers, booleans, and even other arrays */
			let myArray = ["string", true, 100, [1,2,3,5]];
			output.textContent = myArray;
		
			/* STEP 2: Reading and changing array elements
			You can refer to a particular element in an array with it's index number */
			output.textContent = myArray[2];
			console.log(myArray[3][0]);

			// You can also change a particular element
			myArray[1] = false;

			// An array within an array is called a multidimensional array - it can be accessed by specifying the index of the first array, then the item within it
			output.textContent = myArray[3][0];

			/* STEP 3: Determining array length
			Being able to figure out how many elements are contained in an array is a critical feature of JavaScript programming */
			output.textContent = `myArray contains ${myArray.length} elements.`;

			// In particular, looping through arrays
			// monthDivs.forEach(month_box => document.getElementById("monthDayBoxes").appendChild(month_box));
			myArray.forEach(element => output.textContent += element);

			/* STEP 4: Convert a string to an array
			If there is a common character that can act as a delimiter in a string, we can use this character to create an array */
			let originalSix = "Toronto Maple Leafs, Chicago Black Hawks, Detroit Red Wings, Boston Bruins, Montreal Canadians, New York Rangers";
			let originalSixArray = originalSix.split(", ");

			// Output one of the array items
			output.textContent = originalSixArray[2];
			// Output the last element of the array
			output.textContent = originalSixArray[originalSixArray.length-1];
			/* STEP 5: Convert an array back to a string
			Use join() and toString() - note that join() allows you to choose and insert a delimiter, while toString() does not */
			// let originalSixString = originalSixArray.toString();
			let originalSixString = originalSixArray.join(" - ");
			output.textContent = originalSixString;
			/* STEP 6: Adding and removing items from an array
			Without the ability to edit the contents of an array, this type of variable would have limited use - but adding and removing array items is pretty straightforward */


			// Adding one or more items to an array with push()
			originalSixArray.push("Pittsburg Penguins");
			
			// If you would like to capture how many elements are in the array after you have edited it, then…
			originalSixLength = originalSixArray.push("Buffalo Sabres");

			// Removing an item from an array with pop()
			originalSixArray.pop();
			
			// pop() returns the item that was removed, rather than the length of the updated array, so…
			itemRemoved = originalSixArray.pop();
			output.textContent = itemRemoved;
			// To do the same thing, that is, to add and remove an item from the beginning of the array, use shift() and unshift()
			originalSixLength = originalSixArray.unshift("St. Louis Blues");
			itemRemoved = originalSixArray.shift();
			output.textContent = itemRemoved;
			
			output.textContent = originalSixLength;
			// We can also modify the array contents by deleting or substituting elements, or inserting one or more elements at a certain place with splice()
			// let newOriginalSixArray = originalSixArray.splice(2, 1, "Vancouver Canucks");
			// output.textContent = newOriginalSixArray;
			itemRemoved = originalSixArray.splice(2, 1, "Vancouver Canucks");
			output.textContent = itemRemoved;
			itemRemoved = originalSixArray.splice(3);

			/* That's it for the basics of working with arrays! With these tools at your disposal, a whole new world of possibilities with JavaScript are at your command */