const now = new Date();

console.log(now)

const then = new Date(1998, 12, 16)
console.log(then)

const xxx = now - then;
console.log(xxx / (365*1000*60*60*24))
console.log(xxx / (1000*60*60*24))