// Task One =============================================

const input = document.querySelector("#one input");
const button = document.querySelector("#one button");
const text = document.querySelector("#one .text");

button.addEventListener("click", () => {
    text.innerHTML = input.value;
});

// Task Three =============================================

const button3 = document.querySelector("#three button");
const input3 = document.querySelector("#three input");

let isLocked = false;
let lastInput = "";

button3.addEventListener("click", () => {
    if (isLocked) {
        // Showing
        input3.value = lastInput;
        button3.innerHTML = "Hide";
        input3.removeAttribute('readonly');
    } else { 
        // Hiding
        lastInput = input3.value;
        input3.value = "*".repeat(lastInput.length);
        button3.innerHTML = "Show"
        input3.setAttribute("readonly", true);
    }

    isLocked = !isLocked;
});


// Task Five =============================================

const box5 = document.querySelector("#box");

window.addEventListener("click", (event) => {
    const iterator = document.createNodeIterator(
        document.body,
        NodeFilter.SHOW_ALL
    );

    let node = iterator.nextNode();
    let flag = false;

    while (node) {
        if (event.target == node && node.id == "box") {
            alert("You clicked at the green box!");
            flag = true;
            break;
        }
        node = iterator.nextNode();
    }

    if(!flag) console.log("You havent clicked on the green box.....");
});

// Task Seven  =============================================

// const taskSeven = document.querySelector(".task#seven");
// const categoriesList = document.querySelector("ul.categories");

// taskSeven.addEventListener("click", () => {
//     const res = [];

//     categoriesList.children.foreach((x, i) => {
//         if (x.)

//         const item = {

//         };

        

//         res.push(item);
//     })
// })