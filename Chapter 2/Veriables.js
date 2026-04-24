/**
 * Var is function-scoped, which means it is accessible within the entire function in which it is declared. It can be re-declared and updated within its scope.
 * Let is block-scoped, which means it is only accessible within the block (enclosed by curly braces) in which it is declared. It can be updated but not re-declared within its scope.
 * Const is also block-scoped, but it cannot be updated or re-declared after it has been assigned a value. It must be initialized at the time of declaration.
 * /
 * / Example of var
function exampleVar() {
    var x = 10; 
    if (true) { 
        var x = 20;
        console.log(x); // Output: 20
    }      
    */
   var a=10;
   console.log(a); // Output: 10  
   
   function Varexample(){
    var a=20;
   }