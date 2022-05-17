let keys = ['a', 's', 'd', 'f', 'g', 'h', 'j','w','e','t','y','u'];

document.addEventListener("keydown", (event) => {
    if (keys.includes(event.key)) {
        new Audio('audio/' + event.key.toUpperCase() + '.mp3').play();
        document.querySelectorAll('kbd')[keys.indexOf(event.key)].style.boxShadow = '2px 2px grey';
    }
});

document.addEventListener("keyup", (event) => {
    if (keys.includes(event.key)) {
        document.querySelectorAll('kbd')[keys.indexOf(event.key)].style.boxShadow = '';
    }
});