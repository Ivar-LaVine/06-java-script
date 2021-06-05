function num1() {
    let z = (Math.PI * 3 - Math.E ** 2 + Math.sqrt(39)) / (Math.abs(-23) + Math.log10(24) + 4);
    let y = (Math.cos(radInDeg(160)) * Math.sin(radInDeg(83)) - ctg(radInDeg(42))) / (Math.tan(radInDeg(48)) + Math.cos(radInDeg(50)) + 0.67);
    document.getElementById("num1").innerText = "Результат Z: " + z.toFixed(5) + "; " + "Результат Y: " + y.toFixed(5);    
}
function radInDeg(x) { return x * Math.PI / 180; }
function ctg(x) { return 1 / Math.tan(x); }

function num2(myForm) {
    let a = parseFloat(document.getElementById("a").value);
    let b = parseFloat(document.getElementById("b").value);
    let x = parseFloat(document.getElementById("x").value);
    let f1 = ((Math.E ** (2 * x)) * Math.log(a + x)) / Math.acos(b ** (3 * x) * Math.log10(b - x));
    let f2 = (Math.asin(Math.E ** (-1 * a * x) * Math.sqrt(x + 1))) / (b ** (-1 * x) * Math.sqrt(Math.abs(1.5 - x)));
    document.getElementById("num2").innerText = "Результат F1: " + f1.toFixed(5) + "; " + "Результат F2: " + f2.toFixed(5);
}
