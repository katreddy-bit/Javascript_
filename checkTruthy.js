const array=[1,2,null,undefined,6,'ram',false,NaN,0,''];
let count=0;
console.log(checkTruthy(array));
function checkTruthy(){
    for( let val of array){
        if (!val){
            count+=1;
        }
       
    }
    return count;
}


