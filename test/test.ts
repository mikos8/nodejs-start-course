function userHello(user: string | string[]) {
    if (Array.isArray(user)) {
        console.log(user.join(', ') + 'Hello! ');
    } else {
        console.log(user + 'Hello ')
    }
}

// type interface

type coord = { lat: number, long: number }
interface ICord {
    lat: number;
    long: number
}
type ID = number | string;
// function compute (coord: {lat: number, long: number }){
// }

function compute(coord: coord) {

}

interface Animal {
    name: string;
}

interface Dog extends Animal {
    tail?: boolean;
}

// const dog: Dog = {
//     name: 'rex',
//     tail: true
// }

// dog.name;

// type example

type Animal2 = {
    name: string;
}
type Dog2 = Animal & {
    tail: boolean;
}


const dog2: Dog2 = {
    name: 'Shar',
    tail: false
}

dog2.name;


interface Dog {
    name: string;
}

interface Dog {
    voice: boolean;
}

const doger: Dog = {
    name: 'ere',
    tail: true,
    voice: true
}

doger.voice;

// literal type

const a = 'asdasdasd';
let b: 'hi' = "hi";

type direction = 'left' | 'right';

function moveDog(direction: direction) {
    switch (direction) {
        case 'left':
            return -1;
        case 'right':
            return 1;
        default:
            return 0;
    }
}

interface IConnection {
    host: string;
    port: number;
}

function connect(connection: IConnection | "default") { }

connect({ host: '127.0.0.1', port: 5050 })

const connection = {
    host: 'localhost',
    protocol: 'https' as "https"
}

function connect2(host: string, protocol: 'https' | "https") { }

connect2(connection.host, connection.protocol)

// ENUM

type direct = 'left' | 'right';

enum Direct {
    Left = 'left',
    Right = 'right'
}

function testEnum(direct: Direct) {
    switch (direct) {
        case Direct.Left:
            return -1;
        case Direct.Right:
            return 1;
    }
}

function objMod(obj: { Left: number }) {

}

// objMod(Direct);

const enum Direct2 {
    Up, Down
}

let myDirect = Direct2.Up;

