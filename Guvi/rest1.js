
        // function addition(){
        //     var arr=[1,2,3,4,5];
        //     var sum=0;
        //     for(var i=0;i<arr.length;i++){
        //         sum=sum+arr[i];
        //     }
        //     return sum;
        // }
        // console.log(addition());


        function addition(...arr){
            console.log(arr);
            var sum=0;
            for(var i=0;i<arr.length;i++){
                sum=sum+arr[i];
            }
            console.log(sum);
        }
        addition(1,2,3,4,5,5);
    