function b(){
    function a(){    //函數聲明置頂
    console.log(a);
    }
    
    a = 10;
    return;
    }


    var a;
    a = 1;
    b();
    console.log(a);