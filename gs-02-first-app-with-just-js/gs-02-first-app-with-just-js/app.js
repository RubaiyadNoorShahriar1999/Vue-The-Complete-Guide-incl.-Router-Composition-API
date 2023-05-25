// This is an imperative approach
const buttonEl = document.querySelector("button");
const inputEl = document.querySelector("input");
const listEl = document.querySelector("ul");

function addGoal() {
  // taking the value that user wrote in the input field
  const enteredValue = inputEl.value;
  //   Creating a li element in the DOM
  const listItemEl = document.createElement("li");
  //   Adding the entered value to the li element between the starting and ending tag that we created

  //  Adding the li element to the ul element
  listEl.appendChild(listItemEl);
  //   After every submit the input field will be empty
  inputEl.value = "";
}
//  Adding a click event listener to the Add goal button. Here we are pointing the addGoal function ,not invoking it using addGoal(). Because we want to execute the function when the button is clicked.
buttonEl.addEventListener("click", addGoal);
