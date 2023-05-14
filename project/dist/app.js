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
        i += 5;
    }
    const span = compteur === null || compteur === void 0 ? void 0 : compteur.querySelector('span');
    if (span) {
        span.innerText = i.toString();
    }
};
compteur === null || compteur === void 0 ? void 0 : compteur.addEventListener('click', increment);
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
