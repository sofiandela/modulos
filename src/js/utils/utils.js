import {length } from "./common";


export let validate = (val)=> {
    console.log("validate ejecutado con", val);
    return (val < length);
}

console.log("utils");

