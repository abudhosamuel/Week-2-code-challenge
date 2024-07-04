// Array to store shopping list items
let shoppingItems = [];

// DOM elements
const itemInput = document.getElementById('itemInput');
const addItemBtn = document.getElementById('addItemBtn');
const shoppingList = document.getElementById('shoppingList');
const clearListBtn = document.getElementById('clearListBtn');

// Function to add item to the list
function addItem() {
    const newItemText = itemInput.value.trim();
    if (newItemText === '') return;

    const newItem = {
        text: newItemText,
        purchased: false
    };

    shoppingItems.push(newItem);
    renderShoppingList();
    itemInput.value = '';
}

// Function to render the shopping list
function renderShoppingList() {
    shoppingList.innerHTML = '';
    shoppingItems.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = item.text;
        
        if (item.purchased) {
            li.style.textDecoration = 'line-through';
        }

        li.addEventListener('click', () => {
            item.purchased = !item.purchased;
            renderShoppingList();
        });

        shoppingList.appendChild(li);
    });
}

// Event listeners
addItemBtn.addEventListener('click', addItem);

clearListBtn.addEventListener('click', () => {
    shoppingItems = [];
    renderShoppingList();
});

// Initial rendering
renderShoppingList();
