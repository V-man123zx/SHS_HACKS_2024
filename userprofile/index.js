const input = document.getElementById("bio");
console.log(input)
bio.value = ""

function getUserData() {
	if (!localStorage.getItem("signedIn")) return;

	let userinfo = JSON.parse(localStorage.getItem("signedIn"));
	document.getElementById("username").innerText = userinfo.Name;
	document.getElementById("email").innerText = userinfo.Email;
	document.getElementById("hours").innerText = userinfo.Hours;
}

getUserData()