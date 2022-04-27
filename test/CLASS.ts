// CLASS TOPIK

class Coord {
    lat: number;
    long: number
    sms = '1'

    protected test() {
        if (this.lat > 0) { console.log('protected test') }
    }

    computeDistance(newLat: number, newLong: number): number {
        return 100;
    }

    constructor(lat: number, long: number) {
        this.lat = lat;
        this.long = long;
        console.log(this.sms)
    }
}

// const point = new Coord(15,60)

class MapLocation extends Coord {
    _name: string;
    sms = '2'
    constructor(lat: number, long: number, name: string) {
        super(lat, long);
        console.log(this.sms)
    }

    override  computeDistance(newLat: number, newLong: number): number {
        this.test()
        return 500;
    }

    get name() {
        return this._name
    }

    set name(s: string) {
        this._name = s;
    }

}

const point2 = new MapLocation(20, 30, 'test')

interface LoggerService {
    log: (s: string) => void;
    bot: (n: number) => void;
    sod:()=>number;
}

class Logger implements LoggerService {

    public log(s: string): void {
        console.log('s>', s)
    }

    public bot (n: number): void{

    }

    sod ():number {
        return 100;
    }

}

const l = new Logger();

l.log('');

class MyClass<T> {
    static a = '1';
    b: T;
}

MyClass.a
const bbb = new MyClass<string>()
const ccc = new MyClass<number>()
bbb.b

ccc.b


abstract class Base {

    print(s: string) { console.log(s) }

    abstract error(s: string): void
}

class BaseExtended extends Base {
    error(s: string): void {

    }
}

const ddd = new BaseExtended().print('');

class Animal {
    name: string;
}

class Bildog {
    name: string;
    tail: boolean;
}

const puppy: Animal = new Bildog();

let aa: string;
let ba: typeof a;
type Coords = {
    lat: number;
    long: number;
}

type P = keyof Coords;

let acoords: P = 'long';