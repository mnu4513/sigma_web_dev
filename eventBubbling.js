// whenever we want to fire an event (like- click event ) on a child element, then its parent element will also fire their event. This phenomina is known as event bubbling.
// If we want to stop this then we have to invoke stopPropagation() function of event object.

const box2 = document.getElementById('box2');

document.querySelector('.container').addEventListener('click', () => {
    alert('container was clicked');
});

document.querySelector('.child1').addEventListener('click', () => {
    alert('Child was clicked');
});

document.querySelector('.box1').addEventListener('click', () => {
    alert('box was clicked');
});

box2.addEventListener('click', () => {
    alert('Box2 was clicked');
});

document.querySelector('.child2').addEventListener('click', (e) => {
    e.stopPropagation();
    alert('Child was clicked');
});

document.querySelector('#newBox').addEventListener('click', (e) => {
    e.stopPropagation();
    alert('new box was clicked');
});

// setTimeout and setInterval 
setTimeout(() => {
    box2.innerHTML = "changed due to setTimeout function";
}, 3000);


function getRamdomColor () {
    let val1 = Math.ceil(0 + Math.random() * 255);
    let val2 = Math.ceil(0 + Math.random() * 255);
    let val3 = Math.ceil(0 + Math.random() * 255);
    return `rgb(${val1}, ${val2}, ${val3})`;
};

setInterval(() => {
    box2.style.backgroundColor = getRamdomColor();
}, 300);