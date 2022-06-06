// Password Generator script 

let tooltip = document.getElementById('tooltip');
let length_field = document.getElementById('first-field');
let password_field = document.getElementById('second-field');
let radio_button = document.getElementById('special');
radio_button.checked = true;
password_field.disabled = true;
length_field.value = 12;

function ShowToolTip() {
	tooltip.style.opacity = '1';

}

function HideToolTip() {
	tooltip.style.opacity = '0';
}

function CopyToClipBoard() {
	let copy = document.getElementById('second-field');
	if (copy.value != '') {
		ShowToolTip();
		copy.select();
		navigator.clipboard.writeText(copy.value);
		setTimeout(HideToolTip, 2000);
	}
}

function Generate() {
	let length = length_field.value;
	let counter = 0;
	var array = [];
	let random_number = 0;
	var min_range = 0,
		max_range = 0;
	password_field.value = '';
	password_field.style.fontSize = '17px';
	if (length_field.value <= 64) {
		if (document.getElementById('special').checked) {
			min_range = 32;
			max_range = 127;
		} else if (document.getElementById('lowercase').checked) {
			min_range = 96;
			max_range = 123;
		} else if (document.getElementById('uppercase').checked) {
			min_range = 64;
			max_range = 91;
		} else {
			min_range = 47;
			max_range = 58;
		}

		for (var i = 0; i < length; i++) {
			random_number = Math.round(Math.random() * max_range);
			if (random_number > min_range && random_number < max_range) {
				array[i] = random_number;
				counter += 1;
				password_field.value += String.fromCharCode(array[i]);
			} else {
				i = counter - 1;
			}
		}
	} else if (isNaN(length_field.value)) {
		alert('Invalid Input!');
	} else {
		alert('Input limit is from 1-64!');
	}
}
