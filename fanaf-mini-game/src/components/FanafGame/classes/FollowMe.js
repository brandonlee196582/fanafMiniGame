var extraSpritesImg = new Image();
extraSpritesImg.src = "./images/extra-sprites.png";

export class followMe {
    constructor(ctx) {
        this.x = 0;
        this.y = 0;
        this.sx = 801;
        this.sy = 5323;

        this.width = 300;
        this.height = 50;
        this.sWidth = 574;
        this.sHeight = 73;
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