const btn = document.getElementById('btn');

btn.addEventListener('click', function () {
    // alert('btn is clicked');
    // document.querySelector('.box').innerHTML = "button is clicked";
});


btn.addEventListener('dblclick', function () {
    document.querySelector('.box').innerHTML = "double clickd";
});

btn.addEventListener('contextmenu', function () {
    alert('right click will not work due to security reasons');
});

document.addEventListener('keydown', function (e) {
    alert(e.key + ' pressed' + ' and key code is ' + e.keyCode);
});