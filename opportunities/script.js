const opportunitiesList = document.getElementById("opportunities-list")
const searchElement = document.getElementById("search-opportunities");

searchElement.addEventListener("keydown", (e) => {
	console.log("test", e)
})

const submitForm = () => {
}

const fetchData = () => {
	fetch('https://sheetdb.io/api/v1/pixujfe3e8d9d?sheet=Opportunities')
		.then((response) => response.json())
		.then((data) => myFunc(data));
}
// fetchData(); // UNCOMMENT BEFORE RELEASE

const myFunc = (data) => {
	allOpps = data;

	let op_list = allOpps;

	console.log("test log", op_list);

	op_list.forEach((op, index) => {
		console.log(op.Organization);
		opportunitiesList.innerHTML += `
		<a class="opp" href="../volunteer_info/info.html">
			<div id="op-${index}" class="opportunity fade-in" >
				<h1>${op.Organization}</h1>
				<h2>Name: ${op.Name} hours</h2>
				<h2>Hours: ${op.Hours} hours</h2>
				<p>Difficulty Level: ${op.Difficulty}</p>
				<p>Required Skills: ${op.Skills}</p>
				<a class="btn" href="/opportunities/index.html?id=${op.id}">Sign Up</a>
			</div>
		</a>
		`;

		document.getElementById(`op-${index}`).style.animationDelay = `${index * 100}ms`;

		// Add event listener to each opportunity container to display message on hover
		document.getElementById(`op-${index}`).addEventListener('mouseover', () => {
			document.getElementById(`op-${index}`).classList.add('hovered');
		});
	
		document.getElementById(`op-${index}`).addEventListener('mouseout', () => {
			document.getElementById(`op-${index}`).classList.remove('hovered');
		});
	});
}



// [
// 	{
// 		id: "1",
// 		title: "Tutor Middle Schoolers",
// 		hours: "2-4 hours per week",
// 		description: "Tutor students for education"
// 	},
// 	{
// 		id: "2",
// 		title: "Make Advertisement Video for UNICEF",
// 		hours: "1-2 hours",
// 		description: "Spread awareness"
// 	},
// 	{
// 		id: "3",
// 		title: "Improve Website for ANGAZA Center",
// 		hours: "5 hours",
// 		description: "Spread awareness"
// 	},
// 	{
// 		id: "4",
// 		title: "Draw an Improved Logo for SALT",
// 		hours: "2 hours",
// 		description: "Spread awareness"
// 	}
//]; // get this somehow from the user or something





//scroll button
// WE ARE NOT DOING A SCROLL BUTT
window.onscroll = function () {
	scrollFunction();
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