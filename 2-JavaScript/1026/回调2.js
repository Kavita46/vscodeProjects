// function CheckIfEven(v, i, a) {
//   console.log(v + "");

//   if (v % 2 == 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

// var arr = [1, 3, 5,7,8, 10, 12];

// if(arr.every(CheckIfEven)){
//     console.log("ALL are even");
// }else{
//     console.log("Some not even");
// }


function CheckIfEven(value) {
    console.log(value + " ");

    if (value % 2 == 0)
        return true;
    else
        return false;
}

// Create an array.
var numbers = [2, 4, 10, 6, 8];

// Check whether the callback function returns true for all of the
// array values.
if (numbers.every(CheckIfEven))
    console.log("All are even.");
else
    console.log("Some are not even.");





    