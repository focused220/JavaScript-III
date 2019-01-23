/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global Object binding - If not contained within an Object scope, 'this' has global scope.

* 2. Implicit Binding - methods/functions called with dot notation will automatically inherit parent scope with 'this' prefixed.

* 3. New bindning - wwhen used with a constructor function 'this' refers to the object it is being called on. 

* 4. Explicit binding - refers to the use of call and apply, 'this' is included as the first argument and denotes the Object the calling method invokes. 
*
* write out a code example of each explanation above
*/

// Principle 1

//console.log(this);

// Principle 2

// const speak = {
//     phrase : 'Hi',
//     deny : function(){
//         return this.phrase + ', ' + 'dont wanna talk rn.';
//     }
// }

//console.log(speak.deny());

// Principle 3
function makeCereal(kind){
    this.Kind = kind;
    this.eat = function(){
        console.log(`Im in a ${this.Kind} kind of mood. Think I'll have some captain crunch.`);
    }
}
const honeyNut = new makeCereal('healthy');
const captain = new makeCereal('fun');

captain.eat();


// Principle 4

function Test(arg1, arg2){
    arg1 = 0;
    arg2 = 1;
    return (arg2 + arg2) / (arg1 + (arg2 + 4));
}
function Test2(){
   return Test.call(this, 2, 3);
}

console.log(Test2());
