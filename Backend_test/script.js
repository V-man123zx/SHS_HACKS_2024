

const readsheet=()=>{

    // Sort results by id in descending order, take two
    // and return the age as an integer.
    console.log("hey");

    
    fetch('https://sheetdb.io/api/v1/1lksjr56ch09p')

    .then((response) => response.json())
    .then((data) => console.log(data));

}