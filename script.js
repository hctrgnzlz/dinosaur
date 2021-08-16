const dino = document.getElementById('dino')
const rock = document.getElementById('rock')
const score = document.getElementById('score')

function jump() {
    //add animation class to div
    dino.classList.add('jump-animation');
    setTimeout(() => {
        dino.classList.remove('jump-animation');    
    }, 250);
    //remove animation after 250 s
}

document.addEventListener('keypress', () => {
    jump();
    //bind function to key
})