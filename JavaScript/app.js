// document.getElementById('date').innerHTML = new Date().toDateString();
const ul = document.querySelector('ul');
const form = document.querySelector('form');
const button = document.querySelector('button');
var input = document.getElementById("name");
let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];
console.log("let array", itemsArray);


form.addEventListener('submit', function (e) {
    e.preventDefault();

    itemsArray.push(input.value);

    const liMaker = (text) => {
        const li = document.createElement('li');
        li.textContent = text;
        ul.appendChild(li);
    }

    localStorage.setItem('items', JSON.stringify(itemsArray));
    liMaker(input.value);
    input.value = "";

    // const data = JSON.parse(localStorage.getItem('items')) || itemsArray;
    // console.log("data",data);

    // itemsArray.forEach(name => {
    //     console.log("name", name);
    //     liMaker(name);
    // });

});

button.addEventListener('click', function (e) {
    localStorage.clear()
    while (ul.firstChild) {
        ul.removeChild(ul.firstChild);
    }
    itemsArray = [];
})

