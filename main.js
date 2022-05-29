// reference to display dom element
let display = document.querySelector("#display");

// references for the buttons
let buttons = document.querySelectorAll('.button')
let clear = document.querySelector("#C")
let equals = document.querySelector("#equals")
let decimal = document.querySelector("#decimal")

let result = ''
// event listener to display button in calcualtor display and decimal functionality
for (let button of buttons) {
    button.addEventListener("click", function (event) {
        console.log(event.target.textContent);
        let newElement = document.createElement('p');
        newElement.innerText = event.target.textContent;
            display.appendChild(newElement);
    })
}

// decimal functionality - NEEDS WORK
    // if (button === decimal && display.innerText === "") {
    //     display.textContent = "0.";
    //     console.log("0.");
    // } else if (button === decimal && display != "") { 
    //     display.appendChild(newElement);
    // } else {
    //     display.appendChild(newElement);

// clear button functionality
clear.addEventListener("click", function (event) {
    console.log(event.currentTarget);
    display.innerText = "";
});

// MATH!!!

// equals button functionality

// other features?

