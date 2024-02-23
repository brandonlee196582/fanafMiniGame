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
            console.log("componentLoaded");
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

        Room.addRoom(new Room(1, { x: 65, y: 46 }, null, []));
        Room.addRoom(new Room(2, { x: 65, y: 179 }, right, []));
        Room.addRoom(new Room(3, { x: 65, y: 312 }, null, []));
        Room.addRoom(new Room(4, { x: 65, y: 445 }, null, []));
        Room.addRoom(new Room(5, { x: 65, y: 578 }, null, []));
        Room.addRoom(new Room(6, { x: 241, y: 46 }, null, []));
        Room.addRoom(
            new Room(7, { x: 241, y: 179 }, right, [
                { xFrom: -153, xTo: 40, yFrom: 67, yTo: -196 },
                { xFrom: -153, xTo: 973, yFrom: -75, yTo: -196 },
                { xFrom: 773, xTo: 973, yFrom: 67, yTo: -196 },
            ])
        );
        Room.addRoom(new Room(8, { x: 241, y: 312 }, right, []));
        Room.addRoom(new Room(9, { x: 241, y: 445 }, up, []));
        Room.addRoom(new Room(10, { x: 241, y: 578 }, right, []));
        Room.addRoom(new Room(11, { x: 417, y: 46 }, null, []));
        Room.addRoom(
            new Room(12, { x: 417, y: 179 }, right, [
                { xFrom: -153, xTo: 40, yFrom: 67, yTo: -196 },
                { xFrom: -153, xTo: 973, yFrom: -75, yTo: -196 },
                { xFrom: 773, xTo: 973, yFrom: 67, yTo: -196 },
            ])
        );
        Room.addRoom(new Room(13, { x: 417, y: 312 }, right, []));
        Room.addRoom(new Room(14, { x: 417, y: 445 }, null, []));
        Room.addRoom(new Room(15, { x: 417, y: 578 }, right, []));
        Room.addRoom(new Room(16, { x: 593, y: 46 }, null, []));
        Room.addRoom(
            new Room(17, { x: 593, y: 179 }, right, [
                { xFrom: -153, xTo: 40, yFrom: 67, yTo: -196 },
                { xFrom: -153, xTo: 973, yFrom: -75, yTo: -196 },
                { xFrom: 773, xTo: 973, yFrom: 67, yTo: -196 },
            ])
        );
        Room.addRoom(new Room(18, { x: 593, y: 312 }, up, []));
        Room.addRoom(new Room(19, { x: 593, y: 445 }, up, []));
        Room.addRoom(new Room(20, { x: 593, y: 578 }, up, []));
        Room.addRoom(new Room(21, { x: 769, y: 46 }, null, []));
        Room.addRoom(new Room(22, { x: 769, y: 179 }, up, []));
        Room.addRoom(new Room(23, { x: 769, y: 312 }, up, []));
        Room.addRoom(new Room(24, { x: 769, y: 445 }, null, []));
        Room.addRoom(new Room(25, { x: 769, y: 578 }, null, []));

        Room.setCurrentRoom(Room.getAllRooms()[11]);
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
            // console.log(Room.getCurrentRoom());
        };

        let update = () => {
            console.log(Bonnie.x, Bonnie.y)
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
                building1.sx = building1.sx + 176;
                FredRoomMove();
            }
            if (Bonnie.x < -155) {
                Bonnie.x = 873;
                Bonnie.y = Bonnie.y;
                building1.sx = building1.sx - 176;
                FredRoomMove();
            }
            if (Bonnie.y > 760) {
                Bonnie.y = 2;
                Bonnie.x = Bonnie.x;
                building1.sy = building1.sy + 133;
                FredRoomMove();
            }
            if (Bonnie.y < -196) {
                Bonnie.y = 575;
                Bonnie.x = Bonnie.x;
                building1.sy = building1.sy - 133;
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
            if (Room.getCurrentRoom().room === 21) {
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