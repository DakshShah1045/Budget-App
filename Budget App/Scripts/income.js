const months = [
    'January', 'February', 'March', 'April', 'May',
    'June', 'July', 'August', 'September', 'October', 'November', 'December'
];
let n;
const amount = JSON.parse(localStorage.getItem('income'))||
 [];
 console.log(amount)
 if(amount.length === 0){
     n = 0;
    
 }
 else{
     n = amount[amount.length -1]['serialNo']
    
 }
 
console.log(n)
startTable()
function startTable() {
     document.querySelector('#income-table tbody').innerHTML = ``
    const tableBody = document.querySelector('#income-table tbody');
    amount.forEach((sec)=>{
    let startRow = document.createElement('tr')
    startRow.innerHTML = `
        <td>${sec.month}</td>
        <td>${sec.totalIncome}</td>
        <td>${sec.otherIncome}</td>
        <td><button class="delete-btn" onclick="deleteRow(this,${sec.serialNo})">Delete</button></td>
    `
    tableBody.appendChild(startRow);
})

}


function addIncome() {
    n += 1;
    const totalIncome = document.getElementById('total-income').value;
    const otherIncome = document.getElementById('other-income').value;
    const incomeType = document.getElementById('income-type').value;
    saveAmount(totalIncome , otherIncome, incomeType,n);
    startTable()
    const tableBody = document.querySelector('#income-table tbody');

    // Adding monthly income rows for all months if income is monthly
   /* if (incomeType === 'monthly') {
        months.forEach(month => {
            const newRow = createTableRow(month, totalIncome, otherIncome,n);
            tableBody.appendChild(newRow);
        });
    } else {
        // For one-time income, just add a single row
        const newRow = createTableRow(incomeType, totalIncome, otherIncome , n);
        tableBody.appendChild(newRow);
    }*/

    // Clear the input fields
    document.getElementById('total-income').value = '';
    document.getElementById('other-income').value = '';
}

function createTableRow(month, totalIncome, otherIncome, n) {
    console.log(n)
    const newRow = document.createElement('tr');
    
    newRow.innerHTML = `
        <td>${month}</td>
        <td>${totalIncome}</td>
        <td>${otherIncome}</td>
        <td><button class="delete-btn" >Delete</button></td>
    `;

      const deleteButton = newRow.querySelector('.delete-btn');
    deleteButton.addEventListener('click', function() {
        deleteRow(this, n);
    });

    return newRow;
}

function saveAmount(totalIncome , otherIncome,month){
    let grandTotal = Number(totalIncome)+Number(otherIncome);
    amount.push({
        month:month,
        totalIncome:totalIncome,
        otherIncome:otherIncome,
        grandTotal:grandTotal,
        serialNo:n
    })
    console.log(amount)
    setLocalStorage();
}

function deleteRow(button,n) {
    const row = button.parentElement.parentElement;
    row.remove();
    console.log(button.parentElement)
    console.log(n)
    let index = amount.findIndex(item => item.serialNo === n);
    console.log(index)
    amount.splice(index , 1)
    setLocalStorage()
    
}

function setLocalStorage(){
    localStorage.removeItem('income')
    localStorage.setItem('income' , JSON.stringify(amount))
}
