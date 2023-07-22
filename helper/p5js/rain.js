// Drop class that represents a single drop of rain on the screen
class Drop {
    x = 0;
    y = 0;
    xBaseSpeed = 0;
    yBaseSpeed = 0;
    
    constructor() {
        this.x = random(-windowWidth, windowWidth * 2);
        this.y = random(-windowHeight, windowHeight);
        this.xBaseSpeed = random(-2, 5);
        this.yBaseSpeed = random(-2, 5);
    }
    
    fall() {
        const xSpeed = map(mouseX, 0, windowWidth, -10, 10) + this.xBaseSpeed;
        const ySpeed = map(mouseY, 0, windowHeight, 10, 20) + this.yBaseSpeed;
    
        this.x += xSpeed;
        this.y += ySpeed;
    
        if (this.y > windowHeight) {
        this.initDrop();
        }
    }
    
    initDrop() {
        this.x = random(-windowWidth, windowWidth * 2);
        this.y = random(-windowHeight, 0);
    }
    
    show() {
        const xSpeed = map(mouseX, 0, windowWidth, -10, 10);
        const ySpeed = map(mouseY, 0, windowHeight, 10, 20);
        stroke("#3c5369");
        line(this.x, this.y, this.x + xSpeed, this.y + random(30, 50));
    }
    }

function sketch(p) {

  let drops = [];
  let wait = 0;
  let lightningTimer = 0;
  
  function initDrops() {
    drops = [];
    for (let i = 0; i < 2000; i++) {
      drops.push(new Drop());
    }
  }
  
  p.windowResized = () => {
    const size = max(windowWidth, windowHeight)
    resizeCanvas(size, size);
  }
  
  p.setup = () => {
    const size = max(windowWidth, windowHeight)
    var c = createCanvas(size, size);
    c.class("p5Canvas");
    initDrops();
  }
  
  function checkForLightning() {
    const randomLightning = Math.floor(random(0, 1000));
    if (randomLightning == 5 || lightningTimer > 0) {
      fill("#ffffe04F");
  
      if (lightningTimer < 0) {
        lightningTimer = 10;
      }
  
      let x = random(-100, windowWidth + 100);
      let y = random(-100, windowHeight + 100);
  
      ellipse(x, y, windowWidth * 2, windowWidth * 2);
  
      if (wait > random(100, 500)) {
        wait = 0;
      }
    }
  }
  
  p.draw = () => {
  
    lightningTimer -= 1;
    wait++;
  
    background("#697a8c");
    drops.forEach(function (drop) {
      drop.fall();
      drop.show();
    });
  
    checkForLightning();
  }
}


export default sketch;