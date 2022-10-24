let d = new Date();
let time = d.toLocaleTimeString();
console.log(time);

console.log("");

setInterval(() => {
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}, 1000);