// document.getElementById('date').innerHTML = new Date().toDateString();
const ul = document.querySelector('ul');
const form = document.querySelector('form');
const button = document.querySelector('button');
var input = document.getElementById("name");
let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];
console.log("let array", itemsArray);

localStorage.setItem('items', JSON.stringify(itemsArray));
const data = JSON.parse(localStorage.getItem('items'));


const liMaker = (text) => {
    const li = document.createElement('li');
    li.textContent = text;
    ul.appendChild(li);
}

form.addEventListener('submit', function (e) {
    e.preventDefault();

    itemsArray.push(input.value);

    localStorage.setItem('items', JSON.stringify(itemsArray));
    liMaker(input.value);
    input.value = "";

    // console.log("data",data);

});

data.forEach(name => {
    console.log("name", name);
    liMaker(name);
});

button.addEventListener('click', function (e) {
    localStorage.clear()
    while (ul.firstChild) {
        ul.removeChild(ul.firstChild);
    }
    itemsArray = [];
})

