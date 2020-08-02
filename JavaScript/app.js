/**
 * Import mappings
 */
const ol = document.querySelector('ol');
const form = document.querySelector('form');
const button = document.querySelector('button');
var input = document.getElementById("name");

/**
 * Print the value after refreh page
 */
let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

/**
 * Set the values in localStorage
 */
localStorage.setItem('items', JSON.stringify(itemsArray));

/**
 * Get the values from localSroage
 */
const data = JSON.parse(localStorage.getItem('items'));


/**
 * @param {*} text 
 * Print all the values after add
 */
const liMaker = (text) => {
    console.log("text", text);
    const li = document.createElement('li');
    console.log("li", li);
    li.textContent = text;
    ol.appendChild(li);
}


/**
 * AddEventListener
 */
form.addEventListener('submit', name)

/**
 * @param {*} e 
 * Function which will hanadle values after add
 */
function name(e) {
    e.preventDefault();
    itemsArray.push(input.value);
    localStorage.setItem('items', JSON.stringify(itemsArray));
    liMaker(input.value);
    input.value = "";

};

/**
 * 
 * @param {*} input pass input value
 * For add functionality without addeventListener 
 */
function addName(input) {
    itemsArray.push(input);
    localStorage.setItem('items', JSON.stringify(itemsArray));
    liMaker(input);
};

/**
 * It will print value one by one after add
 */
data.forEach(name => {
    liMaker(name);
    // DeleteName(name);
});


/**
 * for clear localStorage
 */
button.addEventListener('click', function (e) {
    localStorage.clear()
    while (ol.firstChild) {
        ol.removeChild(ol.firstChild);
    }
    itemsArray = [];
})


/**
 * Function which will handle elements after remove
 */
function deleteItem() {
    try {

        var removeVal = document.getElementById("del").value

        for (let i = 0; i < itemsArray.length; i++) {
            if (itemsArray[i] === removeVal) {
                var find = itemsArray.indexOf(itemsArray[i])
                itemsArray.splice(find, 1)
                localStorage.setItem('items', JSON.stringify(itemsArray));
                const data1 = JSON.parse(localStorage.getItem('items'));

                /**
                 * Remove each and every element
                 */
                while (ol.firstChild) {
                    ol.removeChild(ol.firstChild);
                }

                /**
                 * Print each and every element
                 */
                data1.forEach(name => {
                    liMaker(name);
                });
            }
        }
    } catch (err) {
        return err;
    }
    document.getElementById("del").value = "";

}

/**
 * function store in a variable
 */
var tempfunc = addName;

/**
 * Add item
 */
function addItem() {
    var aVal = document.getElementById("add").value
    tempfunc(aVal)
    document.getElementById("add").value = "";
}

/**
 * edit item
 */
function editItem() {
    var aVal = document.getElementById("add").value
    tempfunc(aVal)
    document.getElementById("add").value = "";
}


function abrete() {
    $("#dialog").dialog();
}