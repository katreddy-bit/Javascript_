// // read write execute
// //00000100
// //00000010
// //00000001

const read = 4;
const write =2;
const execute=1;
let mypermission=0;

mypermission=mypermission|read|write|execute;
console.log(mypermission);

let msg=(mypermission&read) ? 'Yes':'No';
console.log(msg);
