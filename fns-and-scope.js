//////////////////PROBLEM 1////////////////////

var name = 'Tyler';
//Create a function called isTyler that accepts name as it's only parameter.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.

  function isTyler(p1) {
    if (p1 === "Tyler") {
      return true;
    }
    return false;
  }

//////////////////PROBLEM 2////////////////////


//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.


  function getName()
  {
    var  prompt1 = prompt("Please enter your name.");
    return prompt1;
  }


//////////////////PROBLEM 3////////////////////



//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.
  function welcome()
  {
   alert("Welcome, " + getName());
  }

//////////////////PROBLEM 4////////////////////




//What is the difference between arguments and parameters?

  //Function parameters are the names listed in the function definition. Function arguments are the real values passed to (and received by) the function.


//////////////////PROBLEM 5////////////////////



//What are all the falsy values in JavaScript and how do you check if something is falsy?


  // 0, Nan, undefined, null, false, " ", ' ',



//////////////////PROBLEM 6////////////////////



//Create a function called myName that returns your name

  function myName() {
    var myname = "DJ Payne";
    return myname;
  }



//Now save the function definition of myName into a new variable called newMyName

  var newMyName = myName;

//Now alert the result of invoking newMyName

alert(newMyName());

//////////////////PROBLEM 7////////////////////



//Create a function called outerFn which returns an anonymous function which returns your name.

  function outerFn() {
      return function(){
        return newMyName();
      }
  }

//Now save the result of invoking outerFn into a variable called innerFn.

  var innerFn = outerFn();

//Now invoke innerFn.
innerFn();
