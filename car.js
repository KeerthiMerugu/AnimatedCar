var pos_x = 550;
var pos_y = 200;

const left = 37;
const up = 38;
const right = 39;
const down = 40;

document.addEventListener('keydown',keyHandler);

function keyHandler(e){
  var car = document.getElementById('car');

  switch(e.which) {

        case up:
            if(pos_y>50) {
                pos_y-= 20;

            }
        break;

        case down:
            if(pos_y<550) {
                pos_y+= 20;
                angle=270;
            }
        break;

        case left:
            if(pos_x>0) {
                pos_x-= 20;
                angle=0;
            }
        break;

        case right:
            if(pos_x<1200) {
                pos_x+= 20;
                angle=180;
            }
        break;

    }
    console.log(pos_x+pos_y);
    car.style.top = pos_y+'px';
    car.style.left = pos_x+'px';

}
