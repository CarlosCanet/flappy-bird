class Bird extends Element{
    constructor() {
        this.node = document.createElement("img");
        this.node.className = "bird";
        this.node.src = "./images/taylor.png";
        gameBoxNode.append(this.node);
        
        this.x = 70;
        this.y = 50;
        this.w = 50;
        this.h = 40;
        
        this.gravitySpeed = 2;
        this.jumpSpeed = 50;

        this.node.style.position = "absolute";
        this.node.style.width = `${this.w}px`;
        this.node.style.height = `${this.h}px`
        this.node.style.top = `${this.y}px`;
        this.node.style.left = `${this.x}px`;
        this.render()
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

    render() {
        this.node.style.top = `${this.y}px`;
        this.node.style.left = `${this.x}px`;
    }

}