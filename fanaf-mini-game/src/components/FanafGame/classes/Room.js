export class Room {
    static allRooms = [];
    static currentRoom = null;

    constructor(room, cordinates, moveShadow, obstacles) {
        this.room = room;
        this.cordinates = cordinates;
        this.moveShadow = moveShadow;
        this.obstacles = obstacles;
        this.intervals = [];
    }

    static getCurrentRoom() {
        return this.currentRoom;
    }

    static setCurrentRoom(newRoom) {
        this.currentRoom = newRoom;
    }

    static getAllRooms() {
        return this.allRooms;
    }

    static addRoom(roomToAdd) {
        this.allRooms.push(roomToAdd);
    }
}