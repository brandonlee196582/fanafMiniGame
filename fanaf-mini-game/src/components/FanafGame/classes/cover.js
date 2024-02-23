var coverImg = new Image();
coverImg.src = "./images/pixel-cover.png";

export class cover {
    constructor(canvas, ctx) {
        this.x = 0;
        this.y = 0;
        this.sx = 2045;
        this.sy = 0;
        this.width = canvas.width;
        this.height = canvas.height;
        this.sWidth = 889;
        this.sHeight = 586;
        this.ctx = ctx;
    }
    moveFrame(xMod, yMod, sxMod, syMod) {
        this.x = this.x + xMod;
        this.y = this.y + yMod;
        this.sx = this.sx + sxMod;
        this.sy = this.sy + syMod;
    }
    draw() {
        this.ctx.drawImage(
            coverImg,
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