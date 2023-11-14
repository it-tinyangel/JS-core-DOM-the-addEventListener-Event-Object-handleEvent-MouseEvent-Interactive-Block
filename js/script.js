const box = document.getElementById('box');
const colors = ['crimson', 'khaki', 'seagreen'];
let colorIndex = 0;

// Event handler to responding the mouse hover
box.addEventListener('mouseover', handleMouseOver);

// Event handler to the exit of the mouse
box.addEventListener('mouseout', handleMouseOut);

// Function to change the background color element
function changeBackgroundColor(element, color) {
	element.style.backgroundColor = color;
}

// Function to event handler 'mouseover'
function handleMouseOver() {
	changeBackgroundColor(box, colors[colorIndex]);
	colorIndex = (colorIndex + 1) % colors.length;
}

// Function to event handler 'mouseout'
function handleMouseOut() {
	changeBackgroundColor(box, '');
}
