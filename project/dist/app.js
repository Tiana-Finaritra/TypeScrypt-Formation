"use strict";
// const a: string = "Hello Word";
// const n: number = 3;
// const b: boolean = true;
// const d:null = null;
// const arr: string[] = ["fianritra","mahery"];
// const arrAny: any[] = ["any",5,true,null];
// const user: {firstname: string, lastname?: string, age: number, tf:boolean} = {firstname: "John",age: 75, tf:true };
// const date: Date = new Date();
// const cb: Function = (e: MouseEvent) =>{
// };
// function pintId(id: number | string):void{
//     console.log(id.toString());
// };
// const compteur = document.querySelector('#compteur') as HTMLButtonElement;
const compteur = document.querySelector('#compteur');
let i = 0;
const increment = (e) => {
    i++;
    if (i > 50) {
        i += 5 * i;
    }
    const span = compteur === null || compteur === void 0 ? void 0 : compteur.querySelector('span');
    if (span) {
        span.innerText = i.toString();
    }
};
compteur === null || compteur === void 0 ? void 0 : compteur.addEventListener('click', increment);
const user = { firstname: "John", lastname: "Doe" };
const date = 'dto,';
// Generic
function identity(arg) {
    return arg;
}
const aa = identity(2);
function first(args) {
    return args[0];
}
const bb = first(["ajnej", "afqskj", "jhf"]);
