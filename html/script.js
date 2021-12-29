let table = document.querySelector("table");
document.querySelector("#price17").style.backgroundColor = localStorage.getItem('#price17');
document.querySelector(".standart").style.backgroundColor = localStorage.getItem('.standart');
document.querySelector(".ultimate").style.backgroundColor = localStorage.getItem('.ultimate');
document.querySelector(".premium").style.backgroundColor = localStorage.getItem('.premium');
document.querySelector("#price17").style.backgroundColor = localStorage.getItem('#price17');
document.querySelector('#price37').style.backgroundColor = localStorage.getItem('#price37');
document.querySelector('#price97').style.backgroundColor = localStorage.getItem('#price97');
document.querySelector('#limi').style.backgroundColor = localStorage.getItem('#limi');
document.querySelector('#unlimi').style.backgroundColor = localStorage.getItem('#unlimi');
document.querySelector('#supp').style.backgroundColor = localStorage.getItem('#supp');
document.querySelector('#one').style.backgroundColor = localStorage.getItem('#one');
document.querySelector('#ten').style.backgroundColor = localStorage.getItem('#ten');
document.querySelector('#fifthe').style.backgroundColor = localStorage.getItem('#fifthe');
table.style.borderColor = localStorage.getItem('table.style.borderColor');
document.querySelector(".container").style.fontFamily = localStorage.getItem('all.style.fontFamily');

document.querySelector(".btn1").onclick = function func() {
    if (table.style.borderColor !== "brown") {
        let all = document.querySelector(".container");
        all.style.fontFamily = "Graphik Light";
        localStorage.setItem('all.style.fontFamily', 'Graphik Light');
        table.style.borderColor = "brown"
        localStorage.setItem('table.style.borderColor', 'brown');
        localStorage.setItem('.standart', document.querySelector(".standart").style.backgroundColor = "rgb(166, 90, 55)");
        localStorage.setItem('.ultimate', document.querySelector(".ultimate").style.backgroundColor = "rgb(193, 90, 55)");
        localStorage.setItem('.premium', document.querySelector(".premium").style.backgroundColor = "rgb(199, 74, 60)");
        localStorage.setItem('#price17', document.querySelector("#price17").style.backgroundColor = "rgb(63,159,238)");
        localStorage.setItem('#price37', document.querySelector("#price37").style.backgroundColor = "rgb(38 153 179)");
        localStorage.setItem('#price97', document.querySelector("#price97").style.backgroundColor = "rgb(5 175 175)");
        localStorage.setItem('#limi', document.querySelector("#limi").style.backgroundColor = "rgb(189, 146, 96)");
        localStorage.setItem('#unlimi', document.querySelector("#unlimi").style.backgroundColor = "rgb(189, 146, 96)");
        localStorage.setItem('#supp', document.querySelector("#supp").style.backgroundColor = "rgb(189, 146, 96)");
        localStorage.setItem('#one', document.querySelector("#one").style.backgroundColor = "rgb(189, 146, 96)");
        localStorage.setItem('#ten', document.querySelector("#ten").style.backgroundColor = "rgb(189, 146, 96)");
        localStorage.setItem('#fifthe', document.querySelector("#fifthe").style.backgroundColor = "rgb(189, 146, 96)");
    } else {
        let styled = document.querySelectorAll("*[style]");
        for (i = 0; i < styled.length; i++) {
            styled[i].removeAttribute("style");
        }
        localStorage.clear();
    }
}

