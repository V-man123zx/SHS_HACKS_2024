console.log(localStorage.getItem("signedIn"))

if (localStorage.getItem("signedIn") == null || JSON.parse(localStorage.getItem("signedIn")).Type != "ORG") {
	alert("Please sign up or login to organization account.");

	redirect();
}

function logout() {
	localStorage.removeItem("signedIn")
	redirect();
}
function submitOpp(e) {
	e.preventDefault();


	if (localStorage.getItem("signedIn") == null || JSON.parse(localStorage.getItem("signedIn")).Type != "ORG") {
		alert("Please sign into organization account.");
		return;
	}


	const oppName = document.getElementById("opportunityName").value;
	const skillsReq = document.getElementById("skills").value;
	const numHours = document.getElementById("hours").value;
	const description = document.getElementById("description").value;
	const difficulty = document.getElementById("difficulty").value;


	let data = {
		"id": "INCREMENT",
		'Name': oppName,
		'Organization': JSON.parse(localStorage.getItem("signedIn")).Name,
		'Skills': skillsReq,
		'Hours': numHours,
		'Description': description,
		"Difficulty": difficulty
	}

	console.log(data)

	fetch('https://sheetdb.io/api/v1/np6bcxlf3zgdq', {
		method: 'POST',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			data: [
				data
			],
			sheet: "Opportunities"
		})
	})
		.then((response) => response.json())
		.then((data) => {
			console.log(data);
			redirect();
		});
}

function redirect() {
	document.location.pathname = "/home/home.html"
}
