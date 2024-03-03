function submitOpp(e) {
	e.preventDefault();
	const oppName = document.getElementById("opportunityName").value;
	const skillsReq = document.getElementById("skills").value;
	const numHours = document.getElementById("hours").value;
	const description = document.getElementById("description").value;
	const difficulty = document.getElementById("difficulty").value;

	if (JSON.parse(localStorage.getItem("signedIn")).ORG) {


	}

	let data = {

		'Name': oppName,
		'Organization': JSON.parse(localStorage.getItem("signedIn")).Name,
		'Skills': skillsReq,
		'Hours': password,
		'Type': type

	}
	console.log(data)

	fetch('https://sheetdb.io/api/v1/pixujfe3e8d9d', {
		method: 'POST',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			data: [
				data
			]
		})
	})
		.then((response) => response.json())
		.then((data) => {
			console.log(data);
		});
}
