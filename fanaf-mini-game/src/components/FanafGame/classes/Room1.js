var gameMapImg = new Image();
gameMapImg.src = "./images/fanafMap.png";

export class Room1 {
    constructor(canvas, ctx) {
        this.x = 0;
        this.y = 0;
        this.sx = 2048;
        this.sy = 768;
        this.sWidth = 1024;
        this.sHeight = 768;
        this.width = canvas.width;
        this.height = canvas.height;
        this.ctx = ctx;
    }
    moveRoom(xMod, yMod, sxMod, syMod) {
        this.x = this.x + xMod;
        this.y = this.y + yMod;
        this.sx = this.sx + sxMod;
        this.sy = this.sy + syMod;
    }
    draw() {
        this.ctx.drawImage(
            gameMapImg,
            this.sx,
            this.sy,
            this.sWidth,
            this.sHeight,
            this.x,
            this.y,
            this.width,
            this.height
        );
    }
}