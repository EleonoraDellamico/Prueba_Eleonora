const hamburger = document.getElementById('hamburger');
const listMenu = document.getElementById('list__menu');

function toggle() {
	listMenu.classList.toggle('show');
}
hamburger.addEventListener('click', toggle);

//validation email
const form = document.getElementById('form');
const inputEmail = document.getElementById('email');

form.addEventListener('submit', (e) => {
	e.preventDefault();
	checkInputs();
});

function checkInputs() {
	const emailValue = inputEmail.value.trim();
	if (emailValue === '') {
		alert('you have to insert your email');
	} else if (!isEmail(emailValue)) {
		alert('The email is not correct');
	} else {
		alert('You did it');
	}
}

function isEmail(email) {
	return /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(
		email
	);
}
