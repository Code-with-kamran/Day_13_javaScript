// import default 
import square from "./index.js";
console.log(square(4));
// import named export from index.js
import {sum, mul, div } from "./index.js"
console.log(sum(4,5));
console.log(mul(4,5));
console.log(div(4,5));



