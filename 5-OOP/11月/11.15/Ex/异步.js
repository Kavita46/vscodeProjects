
// 兔子类
class rabbit {
  constructor() {
    this.speed = 3;
    this.time = 0;
    this.distance = 0;
    this.sleepCount = 0;
  }

  run() {
    var timer = setInterval(() => {
      if (this.distance < 100) {
        this.time++;
      //   //console.log(this.time);
        let random = Math.random();
        //console.log("随机数是" + random);
        if (random < 0.6) {
          this.sleepCount++;
          //console.log('兔子打盹' + this.sleepCount + "次");
        } else {
          //console.log('兔子跑了' + this.distance+ '米');
          this.distance += this.speed;
        }
      } else if (this.distance >= 100) {
        clearInterval(timer);
        console.log("兔子跑完了----------------");
        //console.log("一共花了" + this.time);
        console.log('兔子跑了' + this.distance + '米' + "花了" + this.time + '秒');
        console.log("兔子一共睡了" + this.sleepCount + "次");
      }
    }, 100);


  }
}

class turtle {
  constructor() {
    this.speed = 1;
    this.time = 0;
    this.distance = 0;
  }

  run() {
    var timer = setInterval(() => {
      if (this.distance < 100) {
        this.time++;
        this.distance += this.speed;
        console.log('乌龟跑了' + this.time + '分钟' + '跑了' + this.distance + '米');
      } else if (this.distance >= 100) {
           console.log("乌龟跑完了--------------");


        clearInterval(timer);
      }
    }, 100);
  
  }
}

var rabbit_1 = new rabbit();
var turtle_1 = new turtle();
//   rabbit_1.run();



console.log(rabbit_1.run());

console.log(turtle_1.run());

console.log(rabbit_1.time);

console.log(turtle_1.time);
//   if(rabbit_1.run() > turtle_1.run()) {
//     //console.log("兔子赢了");
//   } else {
//     //console.log("乌龟赢了");
//   }
//   //console.log(rabbit_1.time);
// //   这个时候打印不出来, 是计时器在异步吗?
// //   //console.log("兔子一共跑的时间是----------" + rabbit_1.time);
//   //console.log(rabbit_1.time)



// 
