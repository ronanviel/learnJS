// Global scope
var globalVar = "I'm a global variable";
let globalLet = "I'm also global, but scoped with let";
const globalConst = "I'm a global constant";


{
// Block scope
var blockVar = "I'm a block-scoped var";
let blockLet = "I'm a block-scoped let";
const blockConst = "I'm a block-scoped const";
}

// Global scope
//console.log(globalVar); // Output: "I'm a global variable"
//console.log(globalLet); // Output: "I'm also global, but scoped with let"
//console.log(globalConst); // Output: "I'm a global constant"

//Block Scope
//console.log(blockVar);
//console.log(blockLet);

function show(){
var functionVar = "I'm a block-scoped var";
let functionLet = "I'm a block-scoped let";
const functionConst = "I'm a block-scoped const";
}
show();

//console.log(functionVar); // Throws ReferenceError
//console.log(functionLet); // Throws ReferenceError
//console.log(functionConst); // Throws ReferenceError

{
    let var1 = 1
    const CONSTANT = 1
    var var2 = 2

    var1 = 2
 //   CONSTANT = 2
    var2 = 3
}
var1 = 4
var2 = 4
console.log(var1)