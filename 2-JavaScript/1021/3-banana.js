


var init = 1;
for(var i = 0; i < 10; i ++){
init = (init + 1 ) *2;
}

console.log("init = " + init);


final = init;
for(var i = 0; i < 10; i++){
    final = final / 2 - 1;
}

console.log("final =" + final);