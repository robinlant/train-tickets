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

const taskSeven = document.querySelector(".task#seven");
const categoriesList = document.querySelector("ul#categories");

const items = categoriesList.querySelectorAll("li.item");

taskSeven.addEventListener("click", () => {
    console.log(`Number of categories: ${items.length}`);
    items.forEach(item => {
        const title = item.querySelector("h2").textContent;
        const elementsCount = item.querySelectorAll("ul li").length;

        console.log(`Category: ${title}`);
        console.log(`Elements: ${elementsCount}`);
    });
});

// Task Eight =============================================

const form = document.querySelector('.login-form');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const email = form.elements.email.value.trim();
    const password = form.elements.password.value.trim();

    if (!email || !password) {
        alert("You have to fill all fields");
        return;
    }

    const data = {
        email: email,
        password: password
    };

    console.log()
    console.log("Форма з завдання 8: " + data);

    form.reset();
});

// Task Nine =============================================

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}

const changeColorButton = document.querySelector('.change-color');
const colorDisplay = document.querySelector('.color');

changeColorButton.addEventListener('click', () => {
    const randomColor = getRandomHexColor();
    
    document.body.style.backgroundColor = randomColor;
    
    colorDisplay.textContent = randomColor;
});

// Task Ten =============================================

const inputTen = document.querySelector('#controls input[type="number"]');
const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');
const boxesContainer = document.getElementById('boxes');

createButton.addEventListener('click', () => {
  const amount = parseInt(inputTen.value);
  if (amount < 1 || amount > 100) {
    alert('Enter Value between 1 and 100');
    return;
  }

  createBoxes(amount);

  input.value = '';
});

destroyButton.addEventListener('click', 
() => boxesContainer.innerHTML = '');

function createBoxes(amount) {
    boxesContainer.innerHTML = '';

  const elements = [];

  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.cssText = `
    width: 25px;
    height: 25px;
    background-color: ${getRandomHexColor()};
    margin: 5px;`;
    elements.push(box);
  }
  elements.forEach((x, i)=>{
    boxesContainer.appendChild(x);
  });
  
}