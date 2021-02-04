function getSum(array) {
    let sortArray  = array.sort((a,b) => (a - b));
    return (sortArray[0]+sortArray[1])
}
console.log(getSum([16,16,7,17,8,17,18,18,18,9,1]))
