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
		title: "Tutor Middle Schoolers",
		hours: "2-4 hours per week",
		description: "Tutor students for education"
	},
	{
		id: "456",
		title: "Make Advertisement Video for UNICEF",
		hours: "1-2 hours",
		description: "Spread awareness"
	},
	{
		id: "789",
		title:"Improve Website for UNICEF",
		hours: "5 hours",
		description: "Spread awareness"
	}

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