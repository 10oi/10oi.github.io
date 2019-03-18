function calc() {
    // 获取ID
    var input1 = document.getElementById("input1");
    var input2 = document.getElementById("input2");
    var input3 = document.getElementById("input3");

























    // 直接加
    var yiyi = String(parseInt(input1.value) + 1).charAt(String(parseInt(input1.value) + 1).length - 1);
    var erer = String(parseInt(input2.value) + 1).charAt(String(parseInt(input2.value) + 1).length - 1);
    var sansan = String(parseInt(input3.value) + 1).charAt(String(parseInt(input3.value) + 1).length - 1);

    var yiyi1 = String(parseInt(yiyi) + 1).charAt(String(parseInt(yiyi) + 1).length - 1);
    var erer1 = String(parseInt(erer) + 1).charAt(String(parseInt(erer) + 1).length - 1);
    var sansan1 = String(parseInt(sansan) + 1).charAt(String(parseInt(sansan) + 1).length - 1);

    var yiyi2 = String(parseInt(yiyi1) + 1).charAt(String(parseInt(yiyi1) + 1).length - 1);
    var erer2 = String(parseInt(erer1) + 1).charAt(String(parseInt(erer1) + 1).length - 1);
    var sansan2 = String(parseInt(sansan1) + 1).charAt(String(parseInt(sansan1) + 1).length - 1);

    var yiyi3 = String(parseInt(yiyi2) + 1).charAt(String(parseInt(yiyi2) + 1).length - 1);
    var erer3 = String(parseInt(erer2) + 1).charAt(String(parseInt(erer2) + 1).length - 1);
    var sansan3 = String(parseInt(sansan2) + 1).charAt(String(parseInt(sansan2) + 1).length - 1);

    var yiyi4 = String(parseInt(yiyi3) + 1).charAt(String(parseInt(yiyi3) + 1).length - 1);
    var erer4 = String(parseInt(erer3) + 1).charAt(String(parseInt(erer3) + 1).length - 1);
    var sansan4 = String(parseInt(sansan3) + 1).charAt(String(parseInt(sansan3) + 1).length - 1);

    var yiyi5 = String(parseInt(yiyi4) + 1).charAt(String(parseInt(yiyi4) + 1).length - 1);
    var erer5 = String(parseInt(erer4) + 1).charAt(String(parseInt(erer4) + 1).length - 1);
    var sansan5 = String(parseInt(sansan4) + 1).charAt(String(parseInt(sansan4) + 1).length - 1);

    var yiyi6 = String(parseInt(yiyi5) + 1).charAt(String(parseInt(yiyi5) + 1).length - 1);
    var erer6 = String(parseInt(erer5) + 1).charAt(String(parseInt(erer5) + 1).length - 1);
    var sansan6 = String(parseInt(sansan5) + 1).charAt(String(parseInt(sansan5) + 1).length - 1);

    var yiyi7 = String(parseInt(yiyi6) + 1).charAt(String(parseInt(yiyi6) + 1).length - 1);
    var erer7 = String(parseInt(erer6) + 1).charAt(String(parseInt(erer6) + 1).length - 1);
    var sansan7 = String(parseInt(sansan6) + 1).charAt(String(parseInt(sansan6) + 1).length - 1);

    var yiyi8 = String(parseInt(yiyi7) + 1).charAt(String(parseInt(yiyi7) + 1).length - 1);
    var erer8 = String(parseInt(erer7) + 1).charAt(String(parseInt(erer7) + 1).length - 1);
    var sansan8 = String(parseInt(sansan7) + 1).charAt(String(parseInt(sansan7) + 1).length - 1);

    var shuzu = new Array(yiyi, erer, sansan, yiyi1, erer1, sansan1, yiyi2, erer2, sansan2, yiyi3, erer3, sansan3, yiyi4, erer4, sansan4, yiyi5, erer5, sansan5, yiyi6, erer6, sansan6, yiyi7, erer7, sansan7, yiyi8, erer8, sansan8);

    var xianhou0 = shuzu.indexOf("0");
    var xianhou1 = shuzu.indexOf("1");
    var xianhou2 = shuzu.indexOf("2");
    var xianhou3 = shuzu.indexOf("3");
    var xianhou4 = shuzu.indexOf("4");
    var xianhou5 = shuzu.indexOf("5");
    var xianhou6 = shuzu.indexOf("6");
    var xianhou7 = shuzu.indexOf("7");
    var xianhou8 = shuzu.indexOf("8");
    var xianhou9 = shuzu.indexOf("9");

    var shuzu1 = new Array(xianhou0, xianhou1, xianhou2, xianhou3, xianhou4, xianhou5, xianhou6, xianhou7, xianhou8, xianhou9);

    for (let i = 0; i < shuzu1.length - 1; i++) {
        for (let j = 0; j < shuzu1.length - 1 - i; j++) {
            if (shuzu1[j] > shuzu1[j + 1]) {
                let temp = shuzu1[j];
                shuzu1[j] = shuzu[j + 1];
                shuzu1[j + 1] = temp;
            }
        }
    }

    var a = [];
    for (let i = 0; i < shuzu.slice(0, (shuzu1[shuzu1.length - 1] + 1)).length; i++) {

        if (i % 3 == 2) {
            a = a + shuzu[i] + " ";
        } else {
            a = a + shuzu[i];
        }
    }






















    // 计算输入数字每两位之和
    var num1 = String(parseInt(input1.value) + parseInt(input2.value)).charAt(String(parseInt(input1.value) + parseInt(input2.value)).length - 1);
    var num2 = String(parseInt(input2.value) + parseInt(input3.value)).charAt(String(parseInt(input2.value) + parseInt(input3.value)).length - 1);
    var num3 = String(parseInt(input1.value) + parseInt(input3.value)).charAt(String(parseInt(input1.value) + parseInt(input3.value)).length - 1);

    var yi = String(parseInt(num1) + 1).charAt(String(parseInt(num1) + 1).length - 1);
    var er = String(parseInt(num2) + 1).charAt(String(parseInt(num2) + 1).length - 1);
    var san = String(parseInt(num3) + 1).charAt(String(parseInt(num3) + 1).length - 1);

    var yi1 = String(parseInt(yi) + 1).charAt(String(parseInt(yi) + 1).length - 1);
    var er1 = String(parseInt(er) + 1).charAt(String(parseInt(er) + 1).length - 1);
    var san1 = String(parseInt(san) + 1).charAt(String(parseInt(san) + 1).length - 1);

    var yi2 = String(parseInt(yi1) + 1).charAt(String(parseInt(yi1) + 1).length - 1);
    var er2 = String(parseInt(er1) + 1).charAt(String(parseInt(er1) + 1).length - 1);
    var san2 = String(parseInt(san1) + 1).charAt(String(parseInt(san1) + 1).length - 1);

    var yi3 = String(parseInt(yi2) + 1).charAt(String(parseInt(yi2) + 1).length - 1);
    var er3 = String(parseInt(er2) + 1).charAt(String(parseInt(er2) + 1).length - 1);
    var san3 = String(parseInt(san2) + 1).charAt(String(parseInt(san2) + 1).length - 1);

    var yi4 = String(parseInt(yi3) + 1).charAt(String(parseInt(yi3) + 1).length - 1);
    var er4 = String(parseInt(er3) + 1).charAt(String(parseInt(er3) + 1).length - 1);
    var san4 = String(parseInt(san3) + 1).charAt(String(parseInt(san3) + 1).length - 1);

    var yi5 = String(parseInt(yi4) + 1).charAt(String(parseInt(yi4) + 1).length - 1);
    var er5 = String(parseInt(er4) + 1).charAt(String(parseInt(er4) + 1).length - 1);
    var san5 = String(parseInt(san4) + 1).charAt(String(parseInt(san4) + 1).length - 1);

    var yi6 = String(parseInt(yi5) + 1).charAt(String(parseInt(yi5) + 1).length - 1);
    var er6 = String(parseInt(er5) + 1).charAt(String(parseInt(er5) + 1).length - 1);
    var san6 = String(parseInt(san5) + 1).charAt(String(parseInt(san5) + 1).length - 1);

    var yi7 = String(parseInt(yi6) + 1).charAt(String(parseInt(yi6) + 1).length - 1);
    var er7 = String(parseInt(er6) + 1).charAt(String(parseInt(er6) + 1).length - 1);
    var san7 = String(parseInt(san6) + 1).charAt(String(parseInt(san6) + 1).length - 1);

    var yi8 = String(parseInt(yi7) + 1).charAt(String(parseInt(yi7) + 1).length - 1);
    var er8 = String(parseInt(er7) + 1).charAt(String(parseInt(er7) + 1).length - 1);
    var san8 = String(parseInt(san7) + 1).charAt(String(parseInt(san7) + 1).length - 1);

    var shuzu00 = new Array(num1, num2, num3, yi, er, san, yi1, er1, san1, yi2, er2, san2, yi3, er3, san3, yi4, er4, san4, yi5, er5, san5, yi6, er6, san6, yi7, er7, san7, yi8, er8, san8);

    var xianhouhou0 = shuzu00.indexOf("0");
    var xianhouhou1 = shuzu00.indexOf("1");
    var xianhouhou2 = shuzu00.indexOf("2");
    var xianhouhou3 = shuzu00.indexOf("3");
    var xianhouhou4 = shuzu00.indexOf("4");
    var xianhouhou5 = shuzu00.indexOf("5");
    var xianhouhou6 = shuzu00.indexOf("6");
    var xianhouhou7 = shuzu00.indexOf("7");
    var xianhouhou8 = shuzu00.indexOf("8");
    var xianhouhou9 = shuzu00.indexOf("9");

    var shuzu11 = new Array(xianhouhou0, xianhouhou1, xianhouhou2, xianhouhou3, xianhouhou4, xianhouhou5, xianhouhou6, xianhouhou7, xianhouhou8, xianhouhou9);

    for (let i = 0; i < shuzu11.length - 1; i++) {
        for (let j = 0; j < shuzu11.length - 1 - i; j++) {
            if (shuzu11[j] > shuzu11[j + 1]) {
                let temp = shuzu11[j];
                shuzu11[j] = shuzu[j + 1];
                shuzu11[j + 1] = temp;
            }
        }
    }

    var b = [];
    for (let i = 0; i < shuzu00.slice(0, (shuzu11[shuzu11.length - 1] + 1)).length; i++) {

        if (i % 3 == 2) {
            b = b + shuzu00[i] + " ";
        } else {
            b = b + shuzu00[i];
        }
    }





























    // 文本域
    var textarea1 = document.getElementById("textarea1");
    textarea1.value = "\n号码 " + input1.value + input2.value + input3.value + "\n直接加 " + a + " 缺" + shuzu[shuzu1[shuzu1.length - 1]] + " 位置" + (shuzu1[shuzu1.length - 1] + 1) + "\n" + "算后加 " + b + " 缺" + shuzu00[shuzu11[shuzu11.length - 1]] + " 位置" + (shuzu11[shuzu11.length - 1] + 1);











































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
            calc();
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