function amain() {
    // 输入框
    var input1 = document.getElementById("input1");
    var input2 = document.getElementById("input2");
    var input3 = document.getElementById("input3");










    // 号码
    var yi = parseInt(input1.value);
    var er = parseInt(input2.value);
    var san = parseInt(input3.value);

    // 三位号码
    var haoma = String(yi).charAt(String(yi).length - 1) + String(er).charAt(String(er).length - 1) + String(san).charAt(String(san).length - 1);

    // 跨
    var kua1;
    var kua2;
    var kua3;

    if (yi > er) {
        kua1 = yi - er;
    } else if (yi < er) {
        kua1 = er - yi;
    } else {
        kua1 = 0;
    }

    if (er > san) {
        kua2 = er - san;
    } else if (er < san) {
        kua2 = san - er;
    } else {
        kua2 = 0;
    }

    if (san > yi) {
        kua3 = san - yi;
    } else if (san < yi) {
        kua3 = yi - san;
    } else {
        kua3 = 0;
    }

    // 每两位之和
    var yier = String(yi + er).charAt(String(yi + er).length - 1);
    var ersan = String(er + san).charAt(String(er + san).length - 1);
    var sanyi = String(san + yi).charAt(String(yi + san).length - 1);










    // 文本域
    var textarea1 = document.getElementById("textarea1");
    textarea1.value =
        "\n" + haoma + " " + kua1 + kua2 + kua3 + "=" + (kua1 + kua2 + kua3) + " " + yier + ersan + sanyi + "=" + String(parseInt(yier) + parseInt(ersan) + parseInt(sanyi)).charAt(String(parseInt(yier) + parseInt(ersan) + parseInt(sanyi)).length - 1) +
        "\n";










    // 清除输入数字
    document.getElementById("btn1").onclick = function () {
        input1.value = "";
        input2.value = "";
        input3.value = "";
        input1.focus();
        interval1 = setInterval(
            function () {
                if (input1.value != "") {
                    input2.focus();
                }
                if (input2.value != "") {
                    input3.focus();
                    clearInterval(interval1);
                }
            }, 100);
    }

    // 复制
    document.getElementById("btn2").onclick = function () {
        textarea1.select();
        document.execCommand("Copy");
    }
}










// 初始化获取焦点
window.onload = interval = setInterval(
    function () {
        input1.focus();
        clearInterval(interval);
    }, 200);

// 初始化计算
window.onload = setInterval(
    function () {
        if (input1.value != "" && input2.value != "" && input3.value != "") {
            amain();
        }
    }, 200);

// 初始化判断焦点
window.onload = interval1 = setInterval(
    function () {
        if (input1.value != "") {
            input2.focus();
        }
        if (input2.value != "") {
            input3.focus();
            clearInterval(interval1);
        }
    }, 100);