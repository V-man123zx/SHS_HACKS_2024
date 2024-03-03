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

	


    console.log(data)

	fetch('https://sheetdb.io/api/v1/j704fmwyomm3h/Email/'+JSON.parse(localStorage.getItem("signedIn")).Email, {
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
            // setTimeout(10000);
			document.location.pathname = "/userprofile/profile.html";

		});
		
        
}


const input = document.getElementById("bioform");
console.log(input)


function getUserData() {
	if (!localStorage.getItem("signedIn")) return;

	let userEmail = JSON.parse(localStorage.getItem("signedIn")).Email;
	console.log(userEmail);
	

	fetch('https://sheetdb.io/api/v1/j704fmwyomm3h/search?Email='+userEmail)
	.then((response) => response.json())
	.then((data) => {
	console.log(data); 
	userinfo = data;
	console.log("asdoifh", userinfo[0]);
	document.getElementById("username").innerText = userinfo[0].Name;
	document.getElementById("email").innerText = userinfo[0].Email;
	document.getElementById("hours").innerText = userinfo[0].Hours;
	document.getElementById("aboutme").innerText = userinfo[0].Bio;
});


	
}

getUserData();

function redirect() {
	document.location.pathname = "/home/home.html";

}