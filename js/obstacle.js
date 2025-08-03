class Obstacle extends Element{
    constructor(node, className, imgSrc, x, y, w, h, speed) {
        super(node, className, imgSrc, x, y, w, h);
        this.speed = speed;
    }
    
    automaticMovement() {
        this.x -= this.speed;
        this.render();
    }
}
