import 'reflect-metadata';


function Test(
    target: Function
){
    Reflect.defineMetadata('a', 100,target);
    const meta = Reflect.getMetadata('a', target);
    console.log('meta', meta)
}

function Prop(
    target: Object,
    name: string
){}

@Test
export class C {
    @Prop prop:number;
}