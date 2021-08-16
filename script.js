const dino = document.getElementById('dino')
const rock = document.getElementById('rock')
const score = document.getElementById('score')

function jump() {
    //add animation class to div
    dino.classList.add('jump-animation');
    setTimeout(() => {
        dino.classList.remove('jump-animation');    
    }, 500);
    //remove animation after 250 s
}

document.addEventListener('keypress', () => {
    //prevents user from pressing keys while dino in mid air
    if (!dino.classList.contains('jump-animation')){
    jump();
    //bind function to key
    }
});

setInterval(() => {
    const dinoTop = parseInt(window.getComputedStyle(dino)
      .getPropertyValue('top'));

    const rockLeft = parseInt(window.getComputedStyle(rock)
      .getPropertyValue('left'));
    //shows position of rock while moving across screen
    if (rockLeft < 0) {
        rock.style.display = 'none';
    //if position 0 or negative make rock disapper 
    } else {
        rock.style.display = '';
    //makes rock reapear- loops again
    }
   

}, 50);