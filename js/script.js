const box = document.getElementById('box');
// Array of colors to change
const colors = ['crimson', 'khaki', 'seagreen'];

let i = 0;
box.addEventListener('mouseover', function () {
changeBackgroundColor(box, colors[i]);
i = (i + 1) % colors.length;
});

box.addEventListener('mouseout', function () {
changeBackgroundColor(box, '');
});

// Function to change the background color of the element
function changeBackgroundColor(element, color) {
element.style.backgroundColor = color;
}