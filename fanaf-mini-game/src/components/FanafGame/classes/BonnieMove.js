import { Room } from "./Room";
var bonnieImg = new Image();
bonnieImg.src = "./images/BonnieSprites.png";

export class BonnieMove {
    constructor(ctx) {
        this.x = 210;
        this.y = 100;
        this.sx = 0;
        this.sy = 0;
        this.sWidth = 194;
        this.sHeight = 198;
        this.width = 200;
        this.height = 200;
        this.moveSpeed = 5;
        this.ctx = ctx;
    }

    move(xMod, yMod, sxMod, syMod) {
        // @ts-ignore
        let xModChange = xMod;
        let yModChange = yMod;
        let allowUp = true;
        let allowDown = true;
        let allowLeft = true;
        let allowRight = true;
        // @ts-ignore
        Room.getCurrentRoom().obstacles.forEach((obstacle, index) => {
            let tContact = this.y >= obstacle.yTo;
            let bContact = this.y <= obstacle.yFrom;
            let lContact = this.x >= obstacle.xFrom;
            let rContact = this.x <= obstacle.xTo;
            let tolerance = 10;

            if (tContact && bContact && lContact && rContact) {
                if (
                    this.y - obstacle.yFrom <= tolerance ||
                    this.y - obstacle.yFrom <= -tolerance
                ) {
                    allowUp = false;
                }

                if (
                    this.y - obstacle.yTo <= tolerance ||
                    this.y - obstacle.yTo <= -tolerance
                ) {
                    allowDown = false;
                }
                if (
                    this.x - obstacle.xTo >= -tolerance ||
                    obstacle.xTo - this.x <= tolerance
                ) {
                    allowLeft = false;
                }
                if (
                    this.x - obstacle.xFrom <= tolerance ||
                    obstacle.xFrom - this.x >= -tolerance
                ) {
                    allowRight = false;
                }
            }
        });
        if (!allowUp) {
            if (yMod < 1) {
                yModChange = 0;
            }
        }
        if (!allowLeft) {
            if (xMod < 1) {
                xModChange = 0;
            }
        }
        if (!allowRight) {
            if (xMod > 1) {
                xModChange = 0;
            }
        }
        this.x = this.x + xModChange;
        this.y = this.y + yModChange;
        this.sy = syMod;
    }

    draw() {
        this.ctx.drawImage(
            bonnieImg,
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

    getMoveSpeed() {
        return this.moveSpeed;
    }

    setMoveSpeed(newSpeed) {
        this.moveSpeed = newSpeed;
    }
}