"use strict";
// const a: string = "Hello Word";
// const n: number = 3;
// const b: boolean = true;
// const d:null = null;
// const arr: string[] = ["fianritra","mahery"];
// const arrAny: any[] = ["any",5,true,null];
// const user: {firstname: string, lastname?: string, age: number, tf:boolean} = {firstname: "John",age: 75, tf:true };
// const date: Date = new Date();
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _a, _Geometry3_origin;
// const cb: Function = (e: MouseEvent) =>{
// };
// function pintId(id: number | string):void{
//     console.log(id.toString());
// };
// const compteur = document.querySelector('#compteur') as HTMLButtonElement;
// const compteur = document.querySelector('#compteur') as HTMLInputElement;
// let i = 0;
// const increment = (e: Event) =>{
//     i++;
//     if (i > 50) {
//         i += 5 * i;
//     }
//     const span = compteur?.querySelector('span');
//     if (span) {
//        span.innerText = i.toString();
//     }
// }
// compteur?.addEventListener('click',increment);  
// function printId(id: string | number){
//     if(typeof(id)== "number"){
//         console.log((id * 3).toString());
//     }else{
//         console.log(id.toLocaleUpperCase());
//     }
// }
// function example(a:string |boolean , b:string | number | null) {
//     if (a == b) {
//         a
//     }
// }
// function example2(a:string | Date) {
//     if (a instanceof Date) {
//         a
//     }
// }
// function example3(a:string | Date) {
//     if (Array.isArray(a)) {
//         return a[0];
//     }
//     return 
// }
// function exemple4 (a: MouseEvent | HTMLInputElement){
//     if ("value" in a) {
//         a
//     }
// }
// function isDate (a:any):a is Date{
//     return a instanceof Date
// }
/* ------------Alias & Generic--------------- */
// Alias
// type User = {firstname: string, lastname: string};
// const user : User = {firstname: "John", lastname:"Doe"};
// type DateString = string;
// const date: DateString = 'dto,';
// type ID = string | number;
// type Identity<ArgTypei> = (arg: ArgTypei) => ArgTypei;
// type P = keyof User;
// // Generic
// function identity<ArgType>(arg:ArgType):ArgType{
//     return arg;
// }
// const aa = identity<number>(2);
// function first<Type>(args: Type[]):Type{
//     return args[0]; 
// }
// const bb = first (["ajnej","afqskj","jhf"]);
// const nex: Array<string | number> = ["aze","ace",3];
// //extends 
// function consoleSize<Type extends {length:number}>(arg: Type):Type{
//     console.log(arg.length);
//     return arg;
// }
// const abb = consoleSize(['2',5]);
/*======================= Class =======================*/
// function reverse<T> (arr: readonly T[]): T[] {
//     return [...arr].reverse();
// }
// class A {
//     private a = 3;
//     log (){
//         console.log(this.a)
//     }
// }
//Visibility: public, protected, private
// class A {
//     protected a = 4;
//     log (){
//         console.log(this.a)
//     }
// }
// class B extends A {
//     log (){
//         console.log(this.a)
//     } 
// }
// const aInstance = new A();
// // console.log(aInstance.a);
// aInstance.log();
//constructor
// class C {
//     constructor(c)(
//        public c:number;
//     ){
//     }
// }
// class Collection <T>{
//     constructor(private  items:T[]){
//     }
//     add(item:T){
//         this.items.push(item);
//         return this;
//     }
//     first(): T | null{
//         return this.items[0] || null
//     }
//     isEqual(a: this){
//         return a.items === this.items
//     }
// } 
// class SubCollection<T> extends Collection<T>{
//     a = 3
// }
// const a = new Collection(["aze",2]);
// const d = new Collection([1,2]);
// a.isEqual(d);
// const b = a.first();
// const e = a.first();
// const c = a.add(3);
// class Subscriber {
//     on (this: HTMLInputElement, name: string , cb: Function){
//         this.
//     }
// }
// class Subscriber{
//     on = (name:string, cb:Function) =>{
//     }
// }
// ++++++++++++++++++Example with class:
class Point {
    constructor() {
        this.x = 0;
        this.y = 0;
    }
}
class Geometry {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.surface = 0;
    }
}
function getX(p) {
    return p.x;
}
getX(new Geometry());
class Geometry2 {
    constructor() {
        this.x = 0;
        this.y = 0;
    }
}
class Triangle extends Geometry2 {
    constructor() {
        super(...arguments);
        this.x = 0;
        this.y = 0;
    }
    surface() {
        return 3;
    }
}
//Methode static:
class Geometry3 {
}
_a = Geometry3;
_Geometry3_origin = { value: void 0 };
(() => {
    __classPrivateFieldSet(Geometry3, _a, { x: 0, y: 0 }, "f", _Geometry3_origin);
})();
class Geometry4 {
    constructor(x, y) {
    }
}
Geometry4.origin = { x: 0, y: 0 };
class Triangle2 {
    constructor(x, y) {
    }
    surface() {
        return 3;
    }
}
function shapeGenerator(shapeType, x, y) {
    return new shapeType(x, y);
}
// shapeGenerator(Geometry4,10,20);
shapeGenerator(Triangle2, 10, 20);
