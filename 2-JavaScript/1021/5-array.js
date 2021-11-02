//求出一个数组中的最大值
        //计算一个数组中所有数据之和
        //计算平均数


        var arrays = [11, 33, 22, 17, 35, 76, 42];
        var max = arrays[0];
        var total = 0;
        for(var i = 0; i < arrays.length; i++){
            total+=arrays[i];
            if(arrays[i] > max){
                max = arrays[i]
            }
        }

        console.log("max = " + max);
        console.log("total = " + total);
        console.log(total/ arrays.length);

