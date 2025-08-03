class Element {
    constructor(node, className, imgSrc, x, y, w, h) {
        this.node = document.createElement(node);
        this.node.className = className;
        this.node.src = imgSrc;
        gameBoxNode.append(this.node);
        
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;

        this.node.style.position = "absolute";
        this.node.style.width = `${this.w}px`;
        this.node.style.height = `${this.h}px`
        this.render()
    }

    checkCollision(otherElement) {
        return (
            this.x < otherElement.x + otherElement.w &&
            this.x + this.w > otherElement.x &&
            this.y < otherElement.y + otherElement.h &&
            this.y + this.h > otherElement.y
        );
    }

    render() {
        this.node.style.top = `${this.y}px`;
        this.node.style.left = `${this.x}px`;
    }
}