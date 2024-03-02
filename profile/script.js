const opportunitiesList = document.getElementById("opportunities-list")
const searchElement = document.getElementById("search-opportunities");

searchElement.addEventListener("keydown", (e) => {
	console.log("test", e)
})

const submitForm = () => {
		
}

let op_list = [
	{
		id: "123",
		title: "Tutor Middle Schools",
		hours: "like 2-4 hours per week",
		description: "here you can tutor people or something"
	},
	{
		id: "456",
		title: "Pick up trash from beach",
		hours: "1-2 hours",
		description: "help clean up trash"
	},
]; // get this somehow from the user or something

op_list.forEach(op => {
	opportunitiesList.innerHTML += `
	<a class="opportunity" href="/opportunities/index.html?id=${op.id}">
	<h1>${op.title}</h1>
	<h2>Hours: ${op.hours}</h2>
	<p>${op.description}</p>
	</a>
	`	
});