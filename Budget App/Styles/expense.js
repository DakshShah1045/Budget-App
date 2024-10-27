// Arrays to hold recurring and monthly expenses
let recurringExpenses = [];
let monthlyExpenses = [];

// Load saved expenses from local storage on page load
window.onload = function() {
    loadExpensesFromLocalStorage();
};

// Function to add recurring expenses
document.getElementById('addRecurring').addEventListener('click', function() {
    const description = document.getElementById('recurringDescription').value;
    const amount = document.getElementById('recurringAmount').value;

    if (description && amount) {
        const expense = { description, amount };
        recurringExpenses.push(expense); // Add to the array

        saveRecurringToLocalStorage(); // Save to local storage
        displayRecurringExpenses(); // Display the updated list

        // Clear input fields
        document.getElementById('recurringDescription').value = '';
        document.getElementById('recurringAmount').value = '';
    } else {
        alert('Please enter a description and amount.');
    }
});

// Function to add monthly expenses
document.getElementById('addMonthly').addEventListener('click', function() {
    const month = document.getElementById('month').value;
    const amount = document.getElementById('monthlyAmount').value;

    if (amount) {
        const expense = { month, amount };
        monthlyExpenses.push(expense); // Add to the array

        saveMonthlyToLocalStorage(); // Save to local storage
        displayMonthlyExpenses(); // Display the updated list

        // Clear input fields
        document.getElementById('monthlyAmount').value = '';
    } else {
        alert('Please enter an amount.');
    }
});

// Function to display recurring expenses
function displayRecurringExpenses() {
    const recurringList = document.getElementById('recurringList');
    recurringList.innerHTML = ''; // Clear the list

    recurringExpenses.forEach((expense, index) => {
        const li = document.createElement('li');
        li.innerHTML = `${expense.description}: $${expense.amount} <button class="deleteBtn" onclick="deleteRecurring(${index})">Delete</button>`;
        recurringList.appendChild(li);
    });
}

// Function to display monthly expenses
function displayMonthlyExpenses() {
    const monthlyList = document.getElementById('monthlyList');
    monthlyList.innerHTML = ''; // Clear the list

    monthlyExpenses.forEach((expense, index) => {
        const li = document.createElement('li');
        li.innerHTML = `${expense.month}: $${expense.amount} <button class="deleteBtn" onclick="deleteMonthly(${index})">Delete</button>`;
        monthlyList.appendChild(li);
    });
}

// Function to delete a recurring expense
function deleteRecurring(index) {
    recurringExpenses.splice(index, 1); // Remove from the array
    saveRecurringToLocalStorage(); // Update local storage
    displayRecurringExpenses(); // Update the displayed list
}

// Function to delete a monthly expense
function deleteMonthly(index) {
    monthlyExpenses.splice(index, 1); // Remove from the array
    saveMonthlyToLocalStorage(); // Update local storage
    displayMonthlyExpenses(); // Update the displayed list
}

// Save recurring expenses to local storage
function saveRecurringToLocalStorage() {
    localStorage.setItem('recurringExpenses', JSON.stringify(recurringExpenses));
}

// Save monthly expenses to local storage
function saveMonthlyToLocalStorage() {
    localStorage.setItem('monthlyExpenses', JSON.stringify(monthlyExpenses));
}

// Load expenses from local storage and display them
function loadExpensesFromLocalStorage() {
    const savedRecurring = localStorage.getItem('recurringExpenses');
    const savedMonthly = localStorage.getItem('monthlyExpenses');

    if (savedRecurring) {
        recurringExpenses = JSON.parse(savedRecurring);
        displayRecurringExpenses();
    }

    if (savedMonthly) {
        monthlyExpenses = JSON.parse(savedMonthly);
        displayMonthlyExpenses();
    }
}
