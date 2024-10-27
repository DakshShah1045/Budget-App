


    
         document.getElementById('signupForm').addEventListener('submit', function (e) {
            e.preventDefault();
             let password = document.getElementById('password').value
             let confirmPassword = document.getElementById('confirmPassword').value

        if (password !== confirmPassword) {
            event.preventDefault();  // Stop form from submitting
            alert('Password Do Not Match!')
            }

        else{

            var formData = new FormData(this);
            var xhr = new XMLHttpRequest();
            
            // Replace with your Web App URL from Apps Script
            var url = 'https://script.google.com/macros/s/AKfycbz6UXoZwoCUACK3_xw6W2ouKeINuosUGGxPfi4FhpzoocdYdKsrru5Uxn__Zq74-D_WqA/exec';
            
            xhr.open('POST', url);
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    console.log('Submitted')
                }
            };
            xhr.send(formData);
            document.getElementById('signupForm').reset();
            alert('Form Submitted ! You will recieve your referral code soon ! Redirecting You To Payments Page')
            window.location.href='payment.html'
        }
        });

         



