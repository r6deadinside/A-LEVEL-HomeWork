let cmd = function(a, b) {
    return +a > +b ? 1 : -1;
}
function my() {
    let arr1 = parseInt(document.getElementById("arr1").value)
    let arr2 = parseInt(document.getElementById("arr2").value)
    let arr = [];
    for(let i=0; i<arr1; i++) {
        arr[i]=[];
        for(let j=0; j<arr2; j++)
            arr[i][j] = Math.floor(Math.random()*(200-100+1))+100;
        arr[i].sort(cmd);
        document.getElementById("ban").innerHTML+=lm(arr)+"\n";
    }
}
function lm(arr) {
    let res = "";
    for (let line of arr)
            res+= line.toString() + "\n";
    return res;
}


