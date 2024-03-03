const opportunitiesList = document.getElementById("opportunities-list")
const searchElement = document.getElementById("search-opportunities");
let searchTerm = "something";

let globalOps;

searchElement.addEventListener("keydown", (e) => {
	searchTerm = searchElement.value;

	const filteredData1 = globalOps.filter(item => item.Organization.includes(searchTerm));
	const filteredData2 = globalOps.filter(item => item.Name.includes(searchTerm));
	const filteredData3 = globalOps.filter(item => item.Skills.includes(searchTerm));
	const filteredData4 = globalOps.filter(item => item.Hours.includes(searchTerm));
	const filteredData5 = globalOps.filter(item => item.Difficulty.includes(searchTerm));
	const totalData = [...filteredData1, ...filteredData2, ...filteredData3, ...filteredData4,...filteredData5];

	const uniqueArray = totalData.filter((item, index, arr) => {
    return arr.findIndex(obj => obj.id === item.id) === index;
	});
	console.log(uniqueArray)

	opportunitiesList.innerHTML =	""

	uniqueArray.forEach((op, index) => {
		console.log(op.Organization);
		opportunitiesList.innerHTML += `
		<a href="/volunteer_info/info.html?id=${op.id}">
			<div id="op-${index}" class="opportunity fade-in">
				<h1>${op.Organization}</h1>
				<h2>Name: ${op.Name} hours</h2>
				<h2>Hours: ${op.Hours} hours</h2>
				<p>Difficulty Level: ${op.Difficulty}</p>
				<p>Required Skills: ${op.Skills}</p>
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
})

const submitForm = () => {
}

const fetchData = () => {
	console.log("test")
	fetch('https://sheetdb.io/api/v1/np6bcxlf3zgdq?sheet=Opportunities')
		.then((response) => response.json())
		.then((data) => myFunc(data));
}
fetchData(); // UNCOMMENT BEFORE RELEASE

const myFunc = (data) => {
	allOpps = data;

	let op_list = allOpps;
	globalOps = op_list;

	console.log("test log", op_list);


	op_list.forEach((op, index) => {
		console.log(op.Organization);

		opportunitiesList.innerHTML += `
		<a href="/volunteer_info/info.html?id=${op.id}">
			<div id="op-${index}" class="opportunity fade-in">
				<h1>${op.Organization}</h1>
				<h2>Name: ${op.Name} hours</h2>
				<h2>Hours: ${op.Hours} hours</h2>
				<p>Difficulty Level: ${op.Difficulty}</p>
				<p>Required Skills: ${op.Skills}</p>
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

// const openOpp = (op) => {
// 	console.log("openopp", op)

// 	document.location.pathname = `/volunteer_info/info.html?id=${op.id}`
// }



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