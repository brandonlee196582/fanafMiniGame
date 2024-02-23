var shadowFredImg = new Image();
shadowFredImg.src = "./images/shadow-Fred.png";

export class shadowFreddyMove {
    constructor(ctx) {
        this.image = shadowFredImg;
        this.x = 999000;
        this.y = 999000;
        this.sx = 0;
        this.sy = 0;
        this.sWidth = 194;
        this.sHeight = 198;
        this.width = 200;
        this.height = 200;
        this.ctx = ctx;
    }

    move(xMod, yMod, sxMod, syMod) {
        this.x = this.x + xMod;
        this.y = this.y + yMod;

        this.sy = syMod;
    }

    draw() {
        // @ts-ignore
        this.ctx.drawImage(
            this.image,
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