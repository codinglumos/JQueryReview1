//1. Use jQuery by including a script tag in your html and using this as your CDN source: "https://code.jquery.com/jquery-3.3.1.min.js"

//2. Select the element with id "mainHeading" and log its text to console. 
var myHeading = $("#mainHeading").text();
console.log(myHeading)
//3. Select the element with class "first-section" and log its text to console.
var mySection = $(".first-section").text();
console.log(mySection)
//4. Select elements with the html tag h3 and log their text to console.
var headingThree = $("h3").text();
console.log(headingThree)
//5. Select the second item in the list (using the class "list-item") and log its text to console (https://api.jquery.com/nth-child-selector/)
var secondListItem = $(".list-item:nth-child(2)").text();
console.log(secondListItem);