class Bird extends Element{
    constructor(node, className, imgSrc, x, y, w, h, speedGravity, speedJump) {
        super(node, className, imgSrc, x, y, w, h);
        this.gravitySpeed = speedGravity;
        this.jumpSpeed = speedJump;
    }

    gravityEffect() {
        if (this.y > gameBoxNode.offsetHeight - this.h) {
            return;
        }
        this.y += this.gravitySpeed;
        this.render();
    }

    jump() {
        if (this.y < 0) {
            return;
        }
        this.y -= this.jumpSpeed;
        this.render();
    }
}