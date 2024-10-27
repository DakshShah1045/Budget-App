let loanBtn = document.querySelector('.loan-btn')
let saveBtn = document.querySelector('.save')
loanBtn.addEventListener( 'click' , (e)=>{
	e.preventDefault();
	let carCost = Number(document.querySelector('.loan-cost').value);
	let income = Number(document.querySelector('.income').value);
	let ROI = Number(document.querySelector('.loanRate').value)
	let time = Number(document.querySelector('.loanTime').value)
		let downPayment = Number(document.querySelector('.downPayment').value)
	if(carCost == 0 ){
		alert('Please Enter All Details');
	}
	else if(income == 0){
		alert('Please Enter All Details')
	}
	else if(ROI == 0){
		alert('Please Enter All Details')		
	}
	else if(time == 0){
		alert('Please Enter All Details')		
	}
	else if(downPayment == 0){
		alert('Please Enter All Details')		
	}
	else{
		let minDownPayment = Math.round(0.2*carCost);
		let suggestion;
		let loanTake = Math.round(carCost-downPayment);
		console.log(loanTake)
		let loanAmount = loanTake + (Math.round((loanTake*ROI*time)/100))
		console.log(loanAmount)
		let month = Math.round(loanAmount/(time*12))
		let salPer = Math.round((month/income)*100)
		if(downPayment < minDownPayment){
			suggestion = `Not Suggested. Please gather a minimum down payment of ${minDownPayment}`
		}
		else{
			suggestion = '';
		}
		if(salPer > 10){
			suggestion += ` Loan Not Suggested. The monthly installment is recommanded 10% of Income.`
		}
		if(suggestion == ''){
			suggestion = 'Good Plan To Take A Loan'
		}
		 document.querySelector('.loanDescription').innerHTML = `
		 Minimum Down Payment : ${minDownPayment}<hr>
		 Your Down Payment : ${downPayment}<hr>
		 Loan To Be Taken : ${loanTake}<hr>
		 Cost of monthly Installment : ${month}<hr>
		 Percent Of Salary : ${salPer} % <hr>
		 Suggestions: ${suggestion}

		 `
	}

})
saveBtn.addEventListener('click' , (e)=>{
	e.preventDefault()
	let carSaveCost = Number(document.querySelector('.save-cost').value);

	let monthSave = Number(document.querySelector('.year-save').value)*12
	console.log(monthSave);
	let saveDownPayment = Number(document.querySelector('.save-down').value)
	let monthlySaving = Math.round((carSaveCost - saveDownPayment)/monthSave);
	document.querySelector('.save-des').innerHTML = `
	Monthly Saving : ${monthlySaving} <br>
	Note That Monthly Saving For Car Do Not Exceed More Than 10% of Your Monthly Saving
	`
})

document.getElementById('planForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const goal = document.getElementById('goal').value;
    const monthlyIncome = parseFloat(document.getElementById('monthlyIncome').value);
    const targetAmount = parseFloat(document.getElementById('targetAmount').value);
    const years = parseInt(document.getElementById('years').value);

    // Calculate monthly savings required
    const totalMonths = years * 12;
    const monthlySavings = targetAmount / totalMonths;

    let planMessage = '';

    if (monthlySavings < (monthlyIncome * 0.3)) {
        planMessage = `To achieve your goal of "${goal}", you need to save $${monthlySavings.toFixed(2)} per month over ${years} years. This is within your budget.`;
    } else {
        planMessage = `To achieve your goal of "${goal}", you need to save $${monthlySavings.toFixed(2)} per month, which may be challenging given your income. Consider extending your timeline or increasing your income.`;
    }

    document.getElementById('planOutput').textContent = planMessage;
});
