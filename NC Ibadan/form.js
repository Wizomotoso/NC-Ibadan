const form = document.querySelector("[data-multipart-form]");
const formSections = Array.from(form.querySelectorAll("[data-form-section]"));
const prevButton = document.querySelector("#prev-btn");
const nextButton = document.querySelector("#next-btn");
const formNumberTrack = document.querySelector("#number-track");
const numberOfFormSections = formSections.length;

let currentFormSection = form.querySelector(".active");
let currentFormSectionNumber = 0;

formNumberTrack.innerHTML = (currentFormSectionNumber + 1) + "/" + numberOfFormSections;

prevButton.addEventListener("click", () => {
	if (currentFormSectionNumber === formSections.length - 1) {
		nextButton.classList.remove("disabled");
	}

	if (currentFormSectionNumber != 0) {
		currentFormSectionNumber--;
		currentFormSection.classList.remove("active");
		currentFormSection = formSections[currentFormSectionNumber];
		currentFormSection.classList.add("active");
	}

	if (currentFormSectionNumber === 0) {
		prevButton.classList.add("disabled");
	}

	formNumberTrack.innerHTML = (currentFormSectionNumber + 1) + "/" + numberOfFormSections;
});

nextButton.addEventListener("click", () => {
	if (currentFormSectionNumber === 0) {
		prevButton.classList.remove("disabled");
	}

	if (currentFormSectionNumber < formSections.length) {
		currentFormSectionNumber++;
		currentFormSection.classList.remove("active");
		currentFormSection = formSections[currentFormSectionNumber];
		currentFormSection.classList.add("active");
	}

	if (currentFormSectionNumber === formSections.length - 1) {
		nextButton.classList.add("disabled");
	}

	formNumberTrack.innerHTML = (currentFormSectionNumber + 1) + "/" + numberOfFormSections;
});

// Example POST method implementation:
async function makePostAPICall(url = "", data = {}) {
	const response = await fetch(url, {
		method: "POST", // *GET, POST, PUT, DELETE, etc.
		mode: "cors", // no-cors, *cors, same-origin
		credentials: "same-origin", // include, *same-origin, omit
		headers: {
			"Content-Type": "application/json"
			// 'Content-Type': 'application/x-www-form-urlencoded',
		},
		body: JSON.stringify(data) // body data type must match "Content-Type" header
	});
	return response.json(); // parses JSON response into native JavaScript objects
}

form.addEventListener('submit', async (e) => {
	e.preventDefault();

	const dataToSubmit = {
		firstName: document.getElementById("firstName").value,
		lastName: document.getElementById("lastName").value,
		email: document.getElementById("email").value,
		dob: document.getElementById("dob").value,
		gender: document.getElementById("gender").value,
		localCom: document.getElementById("localCom").value,
		yearJoined: document.getElementById("yearJoined").value,
		title: document.getElementById("title").value,
		social: document.getElementById("social").value,
		allergies: document.getElementById("allergies").value,
		treatment: document.getElementById("treatments").value,
		sameSexRoomie: document.getElementById("sameSexRoomie").value === "YES" ? true : false,
		emergencyPhone: document.getElementById("emergencyPhone").value,
		emergencyRelation: document.getElementById("emergencyRelation")
			.value,
		aob: document.getElementById("aob").value
	};

	// check for submitData
	console.log(dataToSubmit);

  try {
	  await makePostAPICall("https://nc-ibadan.fly.dev/register", dataToSubmit);
    
    // redirect them to the congratulations page
    window.location.href = 'https://congratulations-ibadan.netlify.app/';
  } catch (error) {
    window.location.href = '../error.html';
    // handle error message here...show the user any error that occurs on the website
    console.log(error);
  }
});