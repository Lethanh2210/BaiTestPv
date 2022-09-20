function findLast(number, count){
    if(number <= 3){
        return count
    }
    return findLast(number - 2, count + 2);
}

console.log(findLast(7, 1))


