import React, { useState, useEffect } from "react";
import { Room } from "./classes/Room";
import { BonnieMove } from "./classes/BonnieMove";
import { error } from "./classes/error";
import { followMe } from "./classes/FollowMe";
import { cover } from "./classes/cover";
import { Room1 } from "./classes/Room1";
import { shadowFreddyMove } from "./classes/shadowFreddyMove";

import "./FanafGame.css"

export const FanafGame = () => {

    useEffect(() => {
        const onPageLoad = () => {
            startGame();
        };

        if (document.readyState === "complete") {
            onPageLoad();
        } else {
            window.addEventListener("load", onPageLoad, false);
            return () => window.removeEventListener("load", onPageLoad);
        }
    }, []);

    const startGame = () => {
        //@ts-check
        /** @type {HTMLCanvasElement} */
        //@ts-ignore canvas is an HTMLCanvasElement
        const canvas = document.getElementById("game-canvas");
        /** @type {CanvasRenderingContext2D} */
        //@ts-ignore
        const ctx = canvas.getContext("2d");
        canvas.width = 1021;
        canvas.height = 766;

        var shadowFredImg = new Image();
        shadowFredImg.src = "./images/shadow-Fred.png";

        var extraSpritesImg = new Image();
        extraSpritesImg.src = "./images/extra-sprites.png";

        var coverImg = new Image();
        coverImg.src = "./images/pixel-cover.png";

        var fredRoomImg1 = new Image();
        fredRoomImg1.src = "./images/fredRoom.png";

        var bonnieImg = new Image();
        bonnieImg.src = "./images/BonnieSprites.png";

        const up = [0, -40, 0, 600];
        const down = [0, 40, 0, 0];
        const left = [];
        const right = [40, 0, 0, 400];

        const tOpeningObsticle = [
            { xFrom: -153, xTo: 260, yFrom: -75, yTo: -196 },
            { xFrom: 553, xTo: 973, yFrom: -75, yTo: -196 }
        ];
        const tBlockObsticle = [
            { xFrom: -153, xTo: 973, yFrom: -75, yTo: -196 }
        ];
        const bOpeningObsticle = [
            { xFrom: -153, xTo: 260, yFrom: 768, yTo: 480 },
            { xFrom: 553, xTo: 973, yFrom: 768, yTo: 480 }
        ];
        const bBlockObsticle = [
            { xFrom: -153, xTo: 973, yFrom: 768, yTo: 480 }
        ];
        const lOpeningObsticle = [
            { xFrom: -153, xTo: 40, yFrom: 67, yTo: -196 },
            { xFrom: -153, xTo: 40, yFrom: 768, yTo: 350 }
        ];
        const lBlockObsticle = [
            { xFrom: -153, xTo: 40, yFrom: 768, yTo: -196 }
        ];
        const rOpeningObsticle = [
            { xFrom: 773, xTo: 973, yFrom: 67, yTo: -196 },
            { xFrom: 773, xTo: 973, yFrom: 768, yTo: 350 }
        ];
        const rBlockObsticle = [
            { xFrom: 773, xTo: 973, yFrom: 768, yTo: -196 }
        ];

        const tblOpeningRoomObsticle = tOpeningObsticle.concat(bOpeningObsticle, lOpeningObsticle, rBlockObsticle);
        const tbrOpeningRoomObsticle = tOpeningObsticle.concat(bOpeningObsticle, lBlockObsticle, rOpeningObsticle);
        const tlrOpeningRoomObsticle = tOpeningObsticle.concat(bBlockObsticle, lOpeningObsticle, rOpeningObsticle);
        const blrOpeningRoomObsticle = tBlockObsticle.concat(bOpeningObsticle, lOpeningObsticle, rOpeningObsticle);
        const tbOpeningRoomObsticle = tOpeningObsticle.concat(bOpeningObsticle, lBlockObsticle, rBlockObsticle);
        const tlOpeningRoomObsticle = tOpeningObsticle.concat(bBlockObsticle, lOpeningObsticle, rBlockObsticle);
        const trOpeningRoomObsticle = tOpeningObsticle.concat(bBlockObsticle, lBlockObsticle, rOpeningObsticle);
        const lrOpeningRoomObsticle = tBlockObsticle.concat(bBlockObsticle, lOpeningObsticle, rOpeningObsticle);
        const tOpeningRoomObsticle = tOpeningObsticle.concat(bBlockObsticle, lBlockObsticle, rBlockObsticle);
        const bOpeningRoomObsticle = tBlockObsticle.concat(bOpeningObsticle, lBlockObsticle, rBlockObsticle);
        const rOpeningRoomObsticle = tBlockObsticle.concat(bBlockObsticle, lBlockObsticle, rOpeningObsticle);

        let obsticleArray = [];
        obsticleArray = rOpeningRoomObsticle;
        obsticleArray.push({ xFrom: 20, xTo: 578, yFrom: 335, yTo: -45 });
        Room.addRoom(new Room(0, { x: 0, y: 768 }, right, obsticleArray));
        obsticleArray = blrOpeningRoomObsticle;
        Room.addRoom(new Room(1, { x: 1024, y: 768 }, right, obsticleArray));
        obsticleArray = tbrOpeningRoomObsticle;
        Room.addRoom(new Room(2, { x: 1024, y: 1536 }, right, obsticleArray));
        obsticleArray = tbOpeningRoomObsticle;
        Room.addRoom(new Room(3, { x: 1024, y: 2304 }, up, obsticleArray));
        obsticleArray = trOpeningRoomObsticle;
        Room.addRoom(new Room(4, { x: 1024, y: 3072 }, right, obsticleArray));
        obsticleArray = blrOpeningRoomObsticle;
        Room.addRoom(new Room(5, { x: 2048, y: 768 }, right, obsticleArray));
        obsticleArray = tlrOpeningRoomObsticle;
        Room.addRoom(new Room(6, { x: 2048, y: 1536 }, right, obsticleArray));
        obsticleArray = lrOpeningRoomObsticle;
        Room.addRoom(new Room(7, { x: 2048, y: 3072 }, right, obsticleArray));
        obsticleArray = blrOpeningRoomObsticle;
        Room.addRoom(new Room(8, { x: 3072, y: 768 }, right, obsticleArray));
        obsticleArray = tblOpeningRoomObsticle;
        Room.addRoom(new Room(9, { x: 3072, y: 1536 }, up, obsticleArray));
        obsticleArray = tbOpeningRoomObsticle;
        Room.addRoom(new Room(10, { x: 3072, y: 2304 }, up, obsticleArray));
        obsticleArray = tlOpeningRoomObsticle;
        Room.addRoom(new Room(11, { x: 3072, y: 3072 }, up, obsticleArray));
        obsticleArray = bOpeningRoomObsticle;
        Room.addRoom(new Room(12, { x: 4096, y: 0 }, null, obsticleArray));
        obsticleArray = tblOpeningRoomObsticle;
        Room.addRoom(new Room(13, { x: 4096, y: 768 }, up, obsticleArray));
        obsticleArray = tOpeningRoomObsticle;
        Room.addRoom(new Room(14, { x: 4096, y: 1536 }, up, obsticleArray));

        Room.setCurrentRoom(Room.getAllRooms()[5]);
        let shadowInRoom = false;
        let bonnieWalkCycleInterval = null;
        let building1 = new Room1(canvas, ctx);
        let shadowFred = new shadowFreddyMove(ctx);
        let Bonnie = new BonnieMove(ctx);
        let makeCover = new cover(canvas, ctx);
        let err = new error(ctx);
        let shadowTalk = new followMe(ctx);

        const moveShadowFred = (moveParams) => {
            shadowFred.move(moveParams[0], moveParams[1], moveParams[2], moveParams[3]);
        };

        let collumNum = 3;
        let rowNum = 1;
        let roomNum = 3;
        let shawdowMoving = false;

        let FredRoomMove = () => {
            let randNum = Math.random();

            const interval = {};

            Room.getAllRooms().forEach((room) => {
                room.intervals.forEach((interval, index) => {
                    // @ts-ignore
                    clearInterval(interval.id);
                    delete room.intervals[index];
                });
            });

            // @ts-ignore
            Room.setCurrentRoom(
                Room.getAllRooms().find(
                    (room) =>
                        room.cordinates.x === building1.sx &&
                        room.cordinates.y === building1.sy
                )
            );

            // @ts-ignore
            if (randNum > 0.5 || Room.getCurrentRoom().moveShadow === null) {
                shadowFred.x = 999999;
                shadowFred.y = 999999;
                shadowInRoom = false;
            }
            // @ts-ignore
            if (randNum < 0.5 && Room.getCurrentRoom().moveShadow !== null) {
                // shadowFred.draw();
                shadowFred.x = 392;
                shadowFred.y = 250;
                shadowInRoom = true;
            }

            // @ts-ignore
            if (Room.getCurrentRoom().moveShadow !== null && shadowInRoom === true) {
                let intervalId = setInterval(
                    moveShadowFred,
                    500,
                    // @ts-ignore
                    Room.getCurrentRoom().moveShadow
                );
                interval.id = intervalId;
                interval.start = Date.now();
                // @ts-ignore
                Room.getCurrentRoom().intervals.push(interval);
                shawdowMoving = true;
            }
            console.log(Room.getCurrentRoom());
        };

        let update = () => {
            // console.log(Bonnie.x, Bonnie.y)
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            if (Bonnie.sx > 200) {
                Bonnie.sx = 0;
            }

            if (shadowFred.sx > 200) {
                shadowFred.sx = 0;
            }

            if (Bonnie.x > 973) {
                Bonnie.x = -40;
                Bonnie.y = Bonnie.y;
                building1.sx = building1.sx + 1024;
                FredRoomMove();
            }
            if (Bonnie.x < -155) {
                Bonnie.x = 873;
                Bonnie.y = Bonnie.y;
                building1.sx = building1.sx - 1024;
                FredRoomMove();
            }
            if (Bonnie.y > 760) {
                Bonnie.y = 2;
                Bonnie.x = Bonnie.x;
                building1.sy = building1.sy + 768;
                FredRoomMove();
            }
            if (Bonnie.y < -196) {
                Bonnie.y = 575;
                Bonnie.x = Bonnie.x;
                building1.sy = building1.sy - 768;
                FredRoomMove();
            }

            let erro = false;
            if (roomNum === 0) {
                erro = true;
            } else {
                erro = false;
            }
            building1.draw();
            shadowFred.draw();
            Bonnie.draw();
            if (shadowInRoom === true) {
                shadowTalk.draw();
            }
            if (erro === true) {
                shadowTalk.y = -100;
            } else {
                shadowTalk.y = 0;
            }
            // @ts-ignore
            if (Room.getCurrentRoom().room === 12) {
                err.draw();
            }
            makeCover.draw();

            Room.getAllRooms().forEach((room) => {
                room.intervals.forEach((interval, index) => {
                    // @ts-ignore
                    if (Date.now() - interval.start > 15000) {
                        // @ts-ignore
                        clearInterval(interval.id);
                        delete room.intervals[index];
                    }
                });
            });

            requestAnimationFrame(update);
        };

        requestAnimationFrame(update);

        const spriteChangerBonnie = () => {
            Bonnie.sx = Bonnie.sx + 200;
        };

        // @ts-ignore
        bonnieWalkCycleInterval = setInterval(
            spriteChangerBonnie,
            2500 / Bonnie.getMoveSpeed()
        );

        const spriteChangerShadowFred = () => {
            shadowFred.sx = shadowFred.sx + 200;
        };
        const coverMove = () => {
            makeCover.sx = makeCover.sx + 200;
        };

        setInterval(spriteChangerShadowFred, 500);

        window.addEventListener("keypress", (event) => {
            let pressedKey = event.key.toUpperCase();
            if (pressedKey === "D") {
                Bonnie.move(Bonnie.getMoveSpeed(), 0, 0, 400);
            }
            if (pressedKey === "A") {
                Bonnie.move(-Bonnie.getMoveSpeed(), 0, 0, 200);
            }

            if (pressedKey === "W") {
                Bonnie.move(0, -Bonnie.getMoveSpeed(), 0, 600);
            }
            if (pressedKey === "S") {
                Bonnie.move(0, Bonnie.getMoveSpeed(), 0, 0);
            }
            if (pressedKey === "+") {
                if (Bonnie.getMoveSpeed() < 20) {
                    Bonnie.setMoveSpeed(Bonnie.getMoveSpeed() + 5);
                    clearInterval(bonnieWalkCycleInterval);
                    bonnieWalkCycleInterval = setInterval(
                        spriteChangerBonnie,
                        2500 / Bonnie.getMoveSpeed()
                    );
                }
            }
            if (pressedKey === "-") {
                if (Bonnie.getMoveSpeed() > 5) {
                    Bonnie.setMoveSpeed(Bonnie.getMoveSpeed() - 5);
                    clearInterval(bonnieWalkCycleInterval);
                    bonnieWalkCycleInterval = setInterval(
                        spriteChangerBonnie,
                        2500 / Bonnie.getMoveSpeed()
                    );
                }
            }
        });

    }

    return(
        <div>
            <h1>plat Bonnie</h1>
            <canvas id="game-canvas"></canvas>
        </div>
    )
}