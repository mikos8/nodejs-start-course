
// GENERIC
interface HasLength {
    length:number
}


function log<T extends HasLength,K>(ogj: T, arr: K[]): K[]{
    console.log(ogj);
    ogj.length;
    arr.length;
    return arr;
}

log<string, number>('sdf',[1]);
log<string, number>('sdsdf',[5]);

interface IUser {
    name: string;
    age?:number;
    bid:<T>(sum: T)=>boolean
}

function bid<T>(sum: T): boolean {

    return true;
}