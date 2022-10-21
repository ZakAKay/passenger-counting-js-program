//document.getElementById("count").innerText = 5;
//the code line above modifies the h2 tag in our HTML page

//Time to think ahead, what do we need to fill the passenger counter app?
//we need a way to store the count. We'll use/create variables to store the data in.

// let count = 0;
// //count is the variable, it is set to 0
// console.log(count);
// //console.log(count) in the console will show the count, which is set to 0.

//-----------------------------------------------------------------------------------------------------------------------------
//CHALLENGE
//------------------------------------------------------------------------------------------------------------------------------
// //1. create a variable, myAge, and set its value to your age.
// let myAge = 29;
// //2. Log the myAge variable to the console
// console.log("my age = " + myAge);
//the "+" is concatenating the myAge variable with "my age =", that way in the console it comes back as my age = 29, rather than just displaying 29 with no context.

// let count = 5 + 7;
// console.log("passenger counter " + count);
//console would return as 12 due to the 5+7, you can use any mathematical operation in place of the "+"

// let firstBatch = 5;
// let count = firstBatch;
// console.log("passenger counter = " + count);
//will return as 5

// let firstBatch = 5;
// let secondBatch = 7;
// let count = firstBatch + secondBatch;
// console.log("passenger counter = " + count);
// will return as 12.

//-----------------------------------------------------------------------------------------------------------------------------------
//CHALLENGE
//------------------------------------------------------------------------------------------------------------------------------------
//1.create 2 variables, myAge and humanDogRatio
//2.multiply the two together and store the results in myDogAge
//3.log myDogAge to the console.

// let myAge = 29;
// let humanDogRatio = 7;
// let myDogAge = myAge * humanDogRatio;
// console.log("my age in dog years is " + myDogAge);
// //will return as 203

//-----------------------------------------------------------------------------------------------------------------------------------------
//How to make the passenger counter incrementally increase.
//---------------------------------------------------------------------------------------------------------------------------------------------
// let count = 5
// count=count+1
// console.log(count)

//-------------------------------------------------------------------------------------------------------------------------------------------
//CHALLENGE
//----------------------------------------------------------------------------------------------------------------------------------------------
// Create a variable, bonusPoints. Initialize it as 50. Increase it to 100.
// Decrease it down to 25, and then finally increase it to 70
// let bonusPoints = 50;
// console.log(bonusPoints);
// bonusPoints = bonusPoints + 50;
// console.log(bonusPoints);
// bonusPoints = bonusPoints - 75;
// console.log(bonusPoints);
// bonusPoints = bonusPoints + 45;
// console.log(bonusPoints);
//will return as 50, 100, 25, and 70
//===============================================================================================================================================================
// CHALLENGE
//===============================================================================================================================================================
// Create an INCREMENT button with the id="increment-btn" -->
//TIPS BELOW!!!!!
// initialize the count as ---------------------------------------let count = 0;
// listen for clicks on the increment button----------------------onclick""
// increment the count variable when the button is clicked--------count = count+1
// change the count-el in the HTML to reflect the new count

// function increment() {
//   body of the code goes here which is called every time we see the word increment.
//   console.log("the button was clicked");
//   alert("THE BUTTON WAS PUSHED");
// }
//=====================================================================================================================
//NOTE
//=======================================================================================================================
//As you can tell when we run this program every time we click on the button we get an alert and in out console we get a number of how many times the button was clicked.

//====================================================================================================================================
//CHALLENGE
//=====================================================================================================================================
// let count = 5
// count = count + 1
// console.log(count)
// initialize the count as 0----------------------------------------------------let count = 0
// listen for clicks on the increment button------------------------------------console.log("clicked")
// increment the count variable when the button is clicked----------------------count=count+1

// let count = 0
// function increment() {
//     count=count+1
//     console.log(count)
// }
//will start at 1 but every time you click on the button the number in the console log will increase.

//==========================================================================================================================================
//CHALLENGE
//==========================================================================================================================================
// change the count-el in the HTML to reflect the new count -->
{
  /* <button id="increment-btn" onclick="increment()">INCREMENT</button> */
}

let countEl = document.getElementById("count-el"); //getElementById("count-el") is telling JS to get me the HTML element that has the id of "count-el"
console.log(countEl); //
let count = 0;
function increment() {
  count = count + 1;
  countEl.innerText = count; //is telling the program that we want the innertext inside of the tags in the html document(looks like this,<h2 id="count-el">0</h2> ) to be the count
  console.log(count); //0//
}
//when the button is pushed the number shown will increase every time the button has been clicked on.

//==================================================================================================================================
//NOTE
//==================================================================================================================================
// document.getElementById("count-el").innerText = 5
// code above break down
// document.getElementById("count-el")
// the line above is asking for the HTML element
//.innerText = 5
//The line above is modifying the HTML element
//let countEl=document.getElementById("count-el")
//"count-el" is passing an argument inside a function, which means were giving the function data to work with

//==========================================================================================================================================
//CHALLENGE --WORKING WITH THE DOM
//===========================================================================================================================================
//DOM-DOCUMENT OBJECT MODEL. - AKA HOW YOU USE JS TO MODIFY A WEBSITE
//BREAKDOWN OF DOM
//DOCUMENT-- IS THE HTML DOCUMENT THAT YOU ARE INTERACTING WITH
//OBJECT-- DATA TYPE OBJECT IN THE HTML DOCUMENT
//MODEL--  REPRESENTATION, OF THE ELEMENT IN JS
//========================================================================================================================================
// 1. Create a function, save(), which logs out the count when it's called
// function save() {
//   console.log(count);
// }
// save();
//==========================================================================================================================================
//CHALLENGE--writing your first string and combining them with other strings.
//==========================================================================================================================================
// Create a variable, message, that stores the string: "You have tree new notifications"\
// let username = "Zak, ";
// let message = "You have three new notifications";
// console.log(username + message);
//will return as: Zak, You have three new notifications

//or-------------------------------------------------------------------------------------------------------------------------------
// Create a variable, message, that stores the string: "You have tree new notifications"

// let username = "per";
// let message = "You have tree new notifications";
// console.log(message + ", " + username + "!");
//will return as "per, You have tree new notifications!"
//==========================================================================================================================================
//CHALLENGE
//===========================================================================================================================================
// Create a variable, messageToUser, that contains the message we have logged
// let messageToUser = message + ", " + username + "!"
// console.log(messageToUser)
//=============================================================================================================================================
//CHALLENGE
//=============================================================================================================================================
// Create two variables, name and greeting. The name variable should store your name,
// and the greeting should store e.g. "Hi, my name is "

// Create a third variable, myGreeting, that concatenates the two strings
// Log myGreeting to the console
// let name="Zak"
// let greeting="Hi, my name is "
// let myGreeting=greeting + name
// console.log(myGreeting)
//=================================================================================================================================================
//CHALLENGE - render a welcome message
//=================================================================================================================================================
// Grab the welcome-el paragraph and store it in a variable called welcomeEl
// let welcomeEl = document.getElementById("welcome-el")

// let name = "Zachary Kay"
// let greeting = "Welcome back "

// welcomeEl.innerText = greeting + name

// // Add an emoji to the end! 👋
// // WRITE YOUR CODE BELOW HERE
// // HINT: count = count + 1

// welcomeEl.innerText = welcomeEl.innerText + "👋"

//====================================================================================================================================================
//whats another way to write the code above?
//====================================================================================================================================================
// let welcomeEl = document.getElementById("welcome-el")

// let name = "Per Harald Borgen"
// let greeting = "Welcome back "

// welcomeEl.innerText = greeting + name

// // Add an emoji to the end! 👋
// // WRITE YOUR CODE BELOW HERE
// // HINT: count = count + 1

// welcomeEl.innerText += "👋"

//============================================================================================================================================================
//CHALLENGE -- USE += FOR COUNT
//============================================================================================================================================================
// let countEl = document.getElementById("count-el")
// let count = 0

// function increment() {
//     // Change this to use the plus equal technique you've learned
//     count += 1
//     countEl.innerText = count
// }

// function save() {
//     console.log(count)
// }
//============================================================================================================================================================
//CHALLENGE -- create the save feature
//============================================================================================================================================================
// 1. Grab the save-el paragrah and store it in a variable called saveEl
// let countEl = document.getElementById("count-el")
// let count = 0

// function increment() {
//     count += 1
//     countEl.innerText = count
// }

// let saveEl=document.getElementById("save-el")
// function save() {
// let countDash= "-"

//     // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
//     saveEl.innerText += countDash;
//     // 3. Render the variable in the saveEl using innerText
//     // NB: Make sure to not delete the existing content of the paragraph
//     console.log(count)
// }
//============================================================================================================================================================
//CHALLENGE -- use a different method to create a save feature
//============================================================================================================================================================
// let saveEl = document.getElementById("save-el")
// let countEl = document.getElementById("count-el")
// let count = 0

// function increment() {
//     count += 1
//     countEl.textContent = count
// }

// function save() {
//     let countStr = count + " - "
//     saveEl.textContent += countStr
// }
//============================================================================================================================================================
//CHALLENGE -- create a reset feature on the save button to return the count back to 0
//============================================================================================================================================================
let saveEl = document.getElementById("save-el")
// let countEl = document.getElementById("count-el")
// let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}
