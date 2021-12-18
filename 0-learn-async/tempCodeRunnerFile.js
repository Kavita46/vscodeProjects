setTimeout(() => {
    console.log('等待三秒')

    setTimeout(() => {
        console.log('又等待三秒');

        setTimeout(() => {
            console.log('还等待三秒');
        }, 3000)
    }, 3000)
}, 3000);

let i = 1;
setInterval(() => {
    if(i>20){
        clearInterval(i)
    }

    console.log('第'+i + '秒');
    i++},1000)


    // fetch('https://api.github.com/users/github')