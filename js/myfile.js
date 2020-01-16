//In this file I'll write my Javascript so I can remember it later and learn by doing this

var number = 1;

function add(num1, num2){
    let sum = num1 + num2;
}

console.log(add(number, 2));


//Functions in Javascript
//they can be assigned to variables
//passed as a property to other functions as an argument
//can return other functions

var doMath = function(num1, num2){
    var result = num1 + num2;
    return result;
}

var myResult = doMath(2,3);

/**********/

function message(){
    return "It's. the information age ";
}

function displayMessage(msgFunction, person){
    console.log(msgFunction() + person);
}

displayMessage(message, "Tomislav"); // -> It's the information age Tomislav

//NPM(Node packet manager) tool used to download all kinds of libreries and frameworks
//Let’s go over the first line since that is what you need to do to get this to work.
//Node Package Manger commands start with npm.
//To install a module, tell npm the name of the module you want to install.
//If you want that module to work anywhere on your computer, add -g.

/*npm install -g http-server*/


//Git
git add [filename]//tells git to track this file
git status
git init
git commit -m "commit description" //m is used to add message about the commit you're trying to make
//always do git commit before pushing, cause that command actually doesn't everything in the background to make sure we added
//stuff to the file
git push    //only "pushes the changes online"
//always git add file that is changed then git commit and then push


/**If we need a variable that it's contents we wouldn't wanna change we would use const **/
/*Const can't be changed unless an object is stored inside const variable then we can change it's fields*/
/* Examples */
const name = "Tomislav";
name = "Ivan"; //-> error

const obj = {};
obj.firstName = "Tomislav";
obj.lastName = "Keskic"; //no errors so far
obj = {}; //-> error


/* let variable */
//let keyword is used when we want to use variable inside just one block of code and after that it will just dissapear
for(let i=0; i<10; i++){
    console.log(i); //0-9
}

console.log(i) //undefined

//if we do the same thing with var the variable would still exist depending on the scope


let myArray = ["one", "two", "three", "four"];
myArray.forEach((value, index, array) => {
    console.log(value);
    console.log(index);
    console.log(array);
});