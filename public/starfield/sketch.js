var stars = [];
function setup() {
        createCanvas(windowWidth, windowHeight);
        //fullscreen();
        for(var i=0; i<800; i++) {
                var star = new Particle()
                stars.push(star);
        }
}

function draw() {
        background(0);
        translate(width/2,height/2);
        for (var i=0; i<stars.length; i++) {
                stars[i].update();
                stars[i].show();
        }
}


