score = 0;
cross = true;
document.onkeydown = function (e) {
    // let key = Event.key;
    console.log(e.key)
    if (e.key == 'w') {

        //   alert('a key')

        dino = document.querySelector('.dino');
        dino.classList.add('animateDino');
        setTimeout(() => {
            dino.classList.remove('animateDino')
        }, 700);
    }
    if (e.key == 'ArrowRight') {

        //   alert('a key')

        dino = document.querySelector('.dino');
        dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left = dinoX + 112 + "px";
    }
    if (e.key == 'ArrowLeft') {

        //   alert('a key')

        dino = document.querySelector('.dino');
        dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left = (dinoX - 112) + "px";
    }
}
setInterval(() => {
    dino = document.querySelector('.dino');
    gameOver = document.querySelector('.gameOver');
    obstacle = document.querySelector('.obstacle');
    dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
    dy = parseInt(window.getComputedStyle(dino, null).getPropertyValue('top'));

    ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));

    offsetX = Math.abs(dx - ox);
    offsetY = Math.abs(dy - oy);
    // console.log(offsetX,offsetY)
    if (offsetX < 73 && offsetY < 52) {
        gameOver.innerHTML= "GAME OVER ";
        obstacle.classList.remove('obstacleAni')
    }
    else if (offsetX < 145 && cross) {
        score += 1;
        updatScore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);
        setTimeout(() => {
            aniDur = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));
            newDur = aniDur - 0.4;
            obstacle.style.animationDuration = newDur + 's';
        }, 500);

    }
    


}, 10);

//27.17 
function updatScore(score) {

    scoreCount.innerHTML = "your score " + score;
}