


function submitOpp() {
    // e.preventDefault();
    const oppName = document.getElementById("opportunityName").value;
    const skillsReq = document.getElementById("skills").value;
    const numHours = document.getElementById("hours").value;
    const description = document.getElementById("description").value;
    const difficulty = document.getElementById("difficulty").value;
    
    let data = {

        'Name': oppName,
        'Organization': localStorage.getItem()
		'Email': email,
		'Password': password,
		'Type': type
        
    }


    fetch('https://sheetdb.io/api/v1/d6omx04jpy6ks', {
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
            console.log(data[0]);
            localStorage.setItem("signedIn", data);
        });
}
