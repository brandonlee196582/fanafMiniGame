var extraSpritesImg = new Image();
extraSpritesImg.src = "./images/extra-sprites.png";

export class error {
    constructor(ctx) {
        this.x = 0;
        this.y = 0;
        this.sx = 801;
        this.sy = 5560;
        this.width = 200;
        this.height = 100;
        this.sWidth = 199;
        this.sHeight = 96;
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
            extraSpritesImg,
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