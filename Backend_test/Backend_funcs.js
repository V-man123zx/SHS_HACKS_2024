

function readsheet() {

    fetch('https://sheetdb.io/api/v1/d6omx04jpy6ks')

        .then((response) => response.json())
        .then((data) => console.log(data));

}

function sheetsdb_signin() {
    let name = "name";
    let email = "email@gmail.com";
    let password = "TEST";
    let type = "ORG";
    
    fetch('https://sheetdb.io/api/v1/d6omx04jpy6ks', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            data: [
                {
                    'id': "INCREMENT",
                    'Name': name,
                    'Email': email,
                    'Password': password,
                    'Type': type
                }
            ]
        })
    })
        .then((response) => response.json())
        .then((data) => console.log(data));

}

function searchname(name) {

    fetch(`https://sheetdb.io/api/v1/d6omx04jpy6ks/search?Name=${name}`)
    .then((response) => response.json())
    .then((data) => console.log(data));



}

function searchemail(email) {

    fetch(`https://sheetdb.io/api/v1/d6omx04jpy6ks/search?Email=${email}`)
    .then((response) => response.json())
    .then((data) => console.log(data));



}

