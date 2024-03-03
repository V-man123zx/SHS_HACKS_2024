if (localStorage.getItem("signedIn") == null) {

	alert("Please sign up or login to account.");
	redirect();
}

function logout() {
	localStorage.removeItem("signedIn")
	redirect();
}


function submitbio() {
  const abtmeval = document.getElementById("bioform").value;

	let data = {
		"Bio": abtmeval
	}
  
	let currlocal = JSON.parse(localStorage.getItem("signedIn"));
	currlocal.Bio = abtmeval;
	localStorage.setItem("signedIn", JSON.stringify(currlocal));


	fetch('https://sheetdb.io/api/v1/np6bcxlf3zgdq/Email/'+JSON.parse(localStorage.getItem("signedIn")).Email, {
		method: 'PATCH',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			data: [
				data
			],
			sheet: "Questify Users"
		})
	})
		.then((response) => response.json())
		.then((data) => {
			
			console.log("asdfasd", data);
			
			 getUserData();
			

		});
}



function getUserData() {
	if (!localStorage.getItem("signedIn")) return;

	let userinfo = JSON.parse(localStorage.getItem("signedIn"));
	document.getElementById("username").innerText = userinfo.Name;
	document.getElementById("email").innerText = userinfo.Email;
	document.getElementById("hours").innerText = userinfo.Hours;
	document.getElementById("aboutme").innerText = userinfo.Bio;

	// let userEmail = JSON.parse(localStorage.getItem("signedIn")).Email;
	// console.log(userEmail);
	

	// fetch('https://sheetdb.io/api/v1/np6bcxlf3zgdq/search?Email='+userEmail)
	// .then((response) => response.json())
	// .then((data) => {
	// console.log(data); 
	// userinfo = data;
	// console.log("asdoifh", userinfo[0]);
	// document.getElementById("username").innerText = userinfo[0].Name;
	// document.getElementById("email").innerText = userinfo[0].Email;
	// document.getElementById("hours").innerText = userinfo[0].Hours;
	// document.getElementById("aboutme").innerText = userinfo[0].Bio;
};


getUserData();

function redirect() {
	document.location.pathname = "/home/home.html";
}