// Assignment 1 | COMP1073 Client-Side JavaScript

/* README

I know this is not the most efficient way of writing a program like this, but I decided to do this because the assigment is about the JavaScript, not about the HTML or CSS. 
A lot of this code could have been present in the HTML and CSS instead, but that would make the project not very scalable, since you would need to hardcode a new button in
every time you wanted to add a new one, and add styling to it. 

I designed this program originally to be as scalable as possible (even if it didn't turn out to be). This is my attempt at making a program as the aforementioned statement. 

I also tried some things that I would like to learn, like using CSS keyframe animations.

*/
document.addEventListener("DOMContentLoaded", function() {
/* Variables
-------------------------------------------------- */
// 2D array (Java or other terms) that contains all the words used to generate a sentence
const btnArr1 = [["The turkey","Mom","Dad","The dog","My teacher", "The elephant","The cat"],
["Sat on","Ate","Danced with","Saw","Doesn't like","Kissed"],
["A funny","A scary","A goofy","A slimy","A barking","A fat"],
["Goat", "Monkey","Fish","Cow","Frog","Bug","Worm"],
["On the moon", "On the chair", "In my spaghetti", "In my soup", "On the grass", "In my shoes"]];

// Text and colours used to add to the buttons
const btnText = ["1", "2", "3", "4", "5"];
const btnColour = ["purple","cyan","green","orange","purple"];

// The array used to add the JS generated buttons
var buttonArr = [];
// The text string that is passed to the function that calls the text-to-speech API
var textToSpeak = "";
// API object
var synth = window.speechSynthesis;
// The only button that is hardcoded into the HTML
var speakButton = document.querySelector('#btnMain');
/* END variables ----------------------------------------------- */

/* BEGIN functions which make the program work ----------------- */
createButtons();
createResetButton();
addEventListenersToBtn();
assignBtnText();
assignBtnColour();
createRandomStoryBtn();
alignButtons();
spaceButtonsApart();
// Learn more about SpeechSynthesis.speak() at https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/speak

customException.prototype = Object.create(Error.prototype);

/* Functions
-------------------------------------------------- */
// Create 5 buttons in the DOM's 'main', and push into array
function customException(message) {
	const error = new Error(message);
	return error;
}
// Generates a valid HTML button, adds to an array, and appends to main section
function createButtons() {
	for (let btnCounter = 0; btnCounter < 5; btnCounter++) {
		let btn = document.createElement("button");
		btn.textContent="Add a phrase";
		btn.setAttribute("id", btnCounter);
		buttonArr.push(btn);
	}
	buttonArr.forEach(button => appendBtnToSection("main", button));
}
// Generate the reset button that will reset the sentence when clicked. Uses regex to ensure that at least 1 letter exists to delete a story
function createResetButton() {
	let i = 0;
	let btn = document.createElement("button");
	btn.textContent = "Reset the story";
	btn.setAttribute("id", "reset");
	btn.onclick = function() {
		if (!(textToSpeak.match("[a-zA-Z]+"))) {
			alert("Please have at least 1 letter to reset");
			return;
		}
		alert("The story has been reset to nothing");
		buttonArr.forEach(button => {
			button.removeAttribute("value");
			button.textContent = btnText[i++];
		});
		textToSpeak = "";
	}
	appendBtnToSection("footer", btn);
}
// Constructs a valid HTML button element for the 'reset' button
function createRandomStoryBtn() {
	let btn = document.createElement("button");
	btn.textContent = "Create a random story";
	btn.setAttribute("id","random");
	btn.onclick = function() {
		randomStory();
	}
	appendBtnToSection("footer", btn);
}
// Aligns the button in the center of the screen
function alignButtons() {
	let documentMain = document.querySelector("#main");
	documentMain.style.textAlign = "center";
}
// Spaces the buttons apart so that they are not bunched up
function spaceButtonsApart() {
	let documentBtns = document.querySelectorAll("button");
	documentBtns.forEach(button => button.style.margin = "10px");
}
// Appends a button to a section
function appendBtnToSection(sect, button) {
	document.getElementById(sect).appendChild(button);
}
// Assign text from an array to each button
function assignBtnText() {
	let i = 0;
	buttonArr.forEach(button => button.textContent = btnText[i++]);
	
}
// Assign a colour for the background of the button by accessing an array
function assignBtnColour() {
	let i = 0;
	buttonArr.forEach(button => button.style.backgroundColor = btnColour[i++]);
}
// Add event listeners to each button, listening for a 'click'
function addEventListenersToBtn() {
	for (let i = 0; i < buttonArr.length; i++) {
		buttonArr[i].addEventListener("click", function() {
			assignPhraseToButton(buttonArr[i], buttonArr[i].id);
		})
	}
}
// When a button is clicked, append a random noun, verb, or adjective to sentence depending on which button was clicked
function assignPhraseToButton(btnNum, btnId) {
	btnNum.value = btnArr1[btnId][Math.floor(Math.random() * btnArr1[btnId].length)];
	textToSpeak += btnNum.value + " ";
	btnNum.textContent = btnNum.value;
}

// Generates a random story to tell when 'random story' button is clicked
function randomStory() {
	textToSpeak = "";
	for (let i = 0; i < buttonArr.length; i++) {
		buttonArr[i].value = (btnArr1[i][Math.floor(Math.random() * btnArr1[i].length)]);
		buttonArr[i].textContent = buttonArr[i].value;
		textToSpeak += buttonArr[i].value + " ";
	}
}
// Create a new speechSynthesis object
function speakNow(str) {
	if (str === "") {
		alert(new customException("Press one of the buttons to add some speech text"));
		return;
	}
	let utterThis = new SpeechSynthesisUtterance(str);
	synth.speak(utterThis);
}
var speakButton = document.querySelector('#btnMain');
/* Event Listeners
-------------------------------------------------- */
speakButton.onclick = function() {
	speakNow(textToSpeak);
}
});