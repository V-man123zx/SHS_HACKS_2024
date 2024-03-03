const url = new URL(document.location.href);

const oppIdToFetch = url.searchParams.get("id");



function submitLink() {
    const linkname = document.getElementById("submission").value;

    let data = {

		
		"Submission": linkname

	}

    console.log(data)

	fetch('https://sheetdb.io/api/v1/j704fmwyomm3h/id/'+oppIdToFetch, {
		method: 'PATCH',
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
            document.location.pathname = "/volunteer_info/info.html"

		});
        
}



const fetchData = () => {
    
	fetch(`https://sheetdb.io/api/v1/j704fmwyomm3h/search?sheet=Opportunities&id=${oppIdToFetch}`)
		.then((response) => response.json())
		.then((data) => {
        console.log("testasfdsfsadf", data)
        const oppDetails = document.getElementById("oppDes");
        oppDetails.innerHTML = "";
      
        let currOpp = data;
        console.log(currOpp);

        oppDetails.innerHTML = `

        <h1>${currOpp[0].Name}</h1>
        <p><strong>Organization:</strong>${currOpp[0].Organization}</p>
        
		<p><strong>Hours:</strong>${currOpp[0].Hours}</p>
        <p><strong>Skills:</strong>${currOpp[0].Skills}</p>
		<p><strong>Difficulty:</strong>${currOpp[0].Difficulty}</p>
		<p><strong>Description:</strong>${currOpp[0].Description}</p>
        <a href="${currOpp[0].Submission}"><strong>Submission:</strong></a>
        
      `;
      
    });

    
}




// fetchData(); // UNCOMMENT BEFORE RELEASE

