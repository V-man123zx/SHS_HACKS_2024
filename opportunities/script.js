const opportunitiesList = document.getElementById("opportunities-list")
const searchElement = document.getElementById("search-opportunities");

searchElement.addEventListener("keydown", (e) => {
	console.log("test", e)
})

const submitForm = () => {
		
}

let op_list = [
	{
		id: "1",
		title: "Tutor Middle Schoolers",
		hours: "2-4 hours per week",
		description: "Tutor students for education"
	},
	{
		id: "2",
		title: "Make Advertisement Video for UNICEF",
		hours: "1-2 hours",
		description: "Spread awareness"
	},
	{
		id: "3",
		title:"Improve Website for ANGAZA Center",
		hours: "5 hours",
		description: "Spread awareness"
	},
	{
		id:"4",
		title:"Draw an Improved Logo for SALT",
		hours: "2 hours",
		description: "Spread awareness"
	}


]; // get this somehow from the user or something

op_list.forEach((op, index) => {
	opportunitiesList.innerHTML += `

	<a class="opp" href="../volunteer_info/info.html">
	<div id="op-${index}" class="opportunity fade-in" >
	<h1>${op.title}</h1>
	<h2>Hours: ${op.hours}</h2>
	<p>${op.description}</p>
	<a class="btn" href="/opportunities/index.html?id=${op.id}">Sign Up</a>
	</div>
	<a>
	`

	document.getElementById(`op-${index}`).style.animationDelay = `${index * 100}ms`
});

//scroll button
// WE ARE NOT DOING A SCROLL BUTT
window.onscroll = function() {
	// scrollFunction();
};

function scrollFunction() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		document.getElementById("myBtn").style.display = "block";
	} else {
		document.getElementById("myBtn").style.display = "none";
	}
}

// Scroll to the top of the document when button is clicked
function topFunction() {
	document.body.scrollTop = 0; // For Safari
	document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
}