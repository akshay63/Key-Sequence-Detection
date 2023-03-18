/*
 **--------- Project12: Key Sequence Detection ---------**
 */

//When someone enters a sequence of keys into your window or input then something happens
//This is mostly used online for - Konami Code(in 80s, 90s where we used to press some sequence of code and unlimited lives were given to us in games like Mario etc.)
//Ex: Buzzfeed have konami code: See images

//Logic:
//1) we're gonna have to listen to what key user are pressing
//2) after knowing what key is pressed then we're going to store them in an array
//3) we need to define the sequence of code that when pressed will have some fun stuff triggered.
//4) after user pressed the sequence of code that we defined we need to tell the pc what that 'fun' thing should happen

//2)
const pressed = [];

//3)
const secretCode = "akshay";

//1)
window.addEventListener("keyup", (e) => {
  // console.log(e.key);
  pressed.push(e.key);
  // console.log(pressed);

  //we need to trim the array to the length of the secretCode otherwise your array will grow too big
  // console.log(-secretCode.length - 1, pressed.length - secretCode.length);
  pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
  // console.log(pressed);
  if (pressed.join("").includes(secretCode)) {
    // console.log("DING DING");
    cornify_add();
  }
});

//THIGNS THAT I LEARNED:
//1) How to trim the array and make it exact length when user input changes - splice() method
