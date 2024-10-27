const freeCodes = ['FREE123', 'FREE456', 'FREE789'];
const basicCodes = ['BASIC123', 'BASIC456', 'BASIC789'];
const advancedCodes = ['ADV123', 'ADV456', 'ADV789'];

document.getElementById('submitReferral').addEventListener('click' , (e)=>{
	e.preventDefault();
	checkReferralCode();


      
})

  function checkReferralCode() {
            const code = document.getElementById('referralCode').value;
            

            if (freeCodes.includes(code)) {
                console.log('Free')
            } else if (basicCodes.includes(code)) {
                console.log('Basic')
            } else if (advancedCodes.includes(code)) {
                console.log('Advanced')
                window.location.href = `main.html`
            } else {
                	alert('Invalid Code!')
                            }
        }