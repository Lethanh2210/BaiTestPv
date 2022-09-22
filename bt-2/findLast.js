// function findLast(number, count){
//     if(number <= 3){
//         return count
//     }
//     return findLast(number - 2, count + 2);
// }
//
// console.log(findLast(7, 1))

function findingNemo(n) {
    let arr=[];
    for (let i = 1; i <= n; i++) {
        arr.push(i)
    }
    for(let j=0;arr.length>1;j++){
        if(j===arr.length){
            j=0;
        }
        if(j===arr.length-1){
            j=-1;
        }
        arr.splice(j+1,1);
    }
    console.log('result',(arr[0]))
}

findingNemo(10);



