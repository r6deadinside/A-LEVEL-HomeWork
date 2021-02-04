function lala() {
    let a = parseInt(document.getElementById("a").value)
    let b = parseInt(document.getElementById("b").value)
    let c = parseInt(document.getElementById("c").value)
    let mk = (document.getElementById("mk"))
    if (a && b && c > 0)
        mk.innerHTML= ((a + b - c) * (a * b / c)) ** ((a * b) * Math.sqrt(c))
     else
          mk.innerHTML = "Вы ввели число или числа<1";
}