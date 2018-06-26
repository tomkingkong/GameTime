var GamePiece = require('./GamePiece.js');
var canvas = document.querySelector('#game');
var context = canvas.getContext('2d');

var isGameOver = false;
var firstBlock = new GamePiece(50, 50, 10, 10, 'rgb(200, 0, 0)', 1);
var secondBlock = new GamePiece(150, 50, 10, 10, 'rgb(0, 200, 0)', -1);

var blocks = [firstBlock, secondBlock];

function animate() {
  blocks.forEach((block, i) => {
    block.draw(context)
    block.move();
    
    blocks.forEach(function(block2, j){
      if (i !== j && block.isCollidingWith(block2)){
        block.dx = 0;
        block2.dx = 0;
        // isGameOver = true;
      }
    })
  });
}

requestAnimationFrame(function gameLoop() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  
  if (isGameOver){
    //do some end game stuff
  } else {
    animate();
  }

  // animate();

  requestAnimationFrame(gameLoop);
});

// requestAnimationFrame(gameLoop);

canvas.addEventListener('click', function (event) {
  console.log('You clicked me!');
  console.log(event.layerX, event.layerY);
  var block = new GamePiece(event.layerX, event.layerY, 10, 10, 'rgb(200, 0, 0)', -1);
  blocks.push(block);
});

console.log(context)