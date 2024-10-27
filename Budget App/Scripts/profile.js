  let profile = JSON.parse(localStorage.getItem('profile'))||
[
  ]
console.log(profile)
localStorage.removeItem('profile')

let imgSrc=''
let chooseFile = document.getElementById('profile-pic')
chooseFile.addEventListener('change' , ()=>{
		const files = chooseFile.files[0];
       if (files) {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(files);
      fileReader.addEventListener("load", function () {
      //imgPreview.style.display = "block";
      //imgPreview.style.backgroundColor = "white";
      //imgPreview.innerHTML = '<img src="' + this.result + '" class="img-result" />';
      imgSrc = this.result
     // console.log(imgSrc)

})
  }
  })





    document.getElementById('submit-btn').addEventListener('click' , (e)=>{
	e.preventDefault();

	let name = document.getElementById('name').value
	let email = document.getElementById('email').value
	if(name==''||email=='' || imgSrc==''){
		alert('Please Fill All The Details')
	}
	else{
		console.log('successful')
		localStorage.removeItem('profile')
		profile=[]
		profile.push({
			userName:name,
			userEmail:email,
			userPic:imgSrc
		})
		
		localStorage.setItem('profile' , JSON.stringify(profile))
		console.log(profile)
		window.location.href=`main.html`
		
	}

})