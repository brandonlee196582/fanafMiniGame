var fredRoomImg1 = new Image();
fredRoomImg1.src = "./images/fredRoom.png";

export class Room1 {
    constructor(canvas, ctx) {
        this.x = 0;
        this.y = 0;
        this.sx = 417;
        this.sy = 179;
        this.sWidth = 176;
        this.sHeight = 130;
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
            fredRoomImg1,
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