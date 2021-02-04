 function plus(a,b) {
    a = parseInt(a);
    b = parseInt(b);
    return (a + b);
}

    function minus(a,b) {
    return (a - b);
}

    function multiply(a,b) {
    return (a * b);
}

    function divide(a,b) {
    return (a / b);
}

    function calc() {
    let w;
    let x = document.getElementById("oper1").value;
    let y = document.getElementById("operx").value;
    let z = document.getElementById("oper2").value;

    switch (y) {
    case '0':
    w = plus(x, z);
    document.getElementById("resul").innerHTML=w;
    break;
    case '1':
    w = minus(x, z);
    document.getElementById("resul").innerHTML=w;
    break;
    case '2':
    w = multiply(x, z);
    document.getElementById("resul").innerHTML=w;
    break;
    case '3':
    w = divide(x, z);
    document.getElementById("resul").innerHTML=w;
    break;
    default:
    w = "Don't really know..";
}
}