class Particle {
        constructor() {
                this.x = random(-width/2,width/2);
                this.y = random(-height/2,height/2);
                this.z = random(width);
                this.pz = this.z;
        }
        show() {
                var sx = map(this.x/this.z, 0, 1, 0, width);
                var sy = map(this.y/this.z, 0, 1, 0, height);
                
                var px = map(this.x/this.pz, 0, 1, 0, width);
                var py = map(this.y/this.pz, 0, 1, 0, height);
                
                stroke(255);
                fill(255);
                var r = floor(map(this.z, 0, width, 4, 0));
                //ellipse(sx,sy, r*2,r*2);
                line(sx,sy,px,py);
        }
        update() {
               this.pz = this.z;
               this.z -= 20; 
               if (this.z < 1) {
                this.z = random(width);
                this.pz = this.z
               }
        }

}
