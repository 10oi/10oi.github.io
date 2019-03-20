function calc() {
    // 输入框
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

    // 直接加数组
    var shuzu = new Array(yiyi, erer, sansan, yiyi1, erer1, sansan1, yiyi2, erer2, sansan2, yiyi3, erer3, sansan3, yiyi4, erer4, sansan4, yiyi5, erer5, sansan5, yiyi6, erer6, sansan6, yiyi7, erer7, sansan7, yiyi8, erer8, sansan8);

    // 位置
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

    // 位置数组
    var shuzu1 = new Array(xianhou0, xianhou1, xianhou2, xianhou3, xianhou4, xianhou5, xianhou6, xianhou7, xianhou8, xianhou9);

    // 排序
    for (let i = 0; i < shuzu1.length - 1; i++) {
        for (let j = 0; j < shuzu1.length - 1 - i; j++) {
            if (shuzu1[j] > shuzu1[j + 1]) {
                let temp = shuzu1[j];
                shuzu1[j] = shuzu[j + 1];
                shuzu1[j + 1] = temp;
            }
        }
    }

    // 格式化
    var geshihua = shuzu.slice(0, (shuzu1[shuzu1.length - 1] + 1))
    var a = [];
    for (let i = 0; i < geshihua.length; i++) {
        if (i == geshihua.length - 1) {
            a = a + shuzu[i];
            break;
        } else if (i == 2 || i == 5 || i == 8 || i == 11 || i == 14 || i == 17 || i == 20 || i == 23 || i == 26 || i == 29) {
            a = a + shuzu[i] + " ";
        } else {
            a = a + shuzu[i];
        }
    }










    // 数组排序
    geshihua.sort(function (x, y) {
        return x - y;
    });

    // 计算重复值
    var chong0 = 0;
    var chong1 = 0;
    var chong2 = 0;
    var chong3 = 0;
    var chong4 = 0;
    var chong5 = 0;
    var chong6 = 0;
    var chong7 = 0;
    var chong8 = 0;
    var chong9 = 0;

    for (let i = 0; i < geshihua.length; i++) {
        if (0 == geshihua[i]) {
            chong0++;
        }
        if (1 == geshihua[i]) {
            chong1++;
        }
        if (2 == geshihua[i]) {
            chong2++;
        }
        if (3 == geshihua[i]) {
            chong3++;
        }
        if (4 == geshihua[i]) {
            chong4++;
        }
        if (5 == geshihua[i]) {
            chong5++;
        }
        if (6 == geshihua[i]) {
            chong6++;
        }
        if (7 == geshihua[i]) {
            chong7++;
        }
        if (8 == geshihua[i]) {
            chong8++;
        }
        if (9 == geshihua[i]) {
            chong9++;
        }
    }










    // 每两位之和
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

    // 每两位之和数组
    var shuzu00 = new Array(num1, num2, num3, yi, er, san, yi1, er1, san1, yi2, er2, san2, yi3, er3, san3, yi4, er4, san4, yi5, er5, san5, yi6, er6, san6, yi7, er7, san7, yi8, er8, san8);

    // 位置
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

    // 位置数组
    var shuzu11 = new Array(xianhouhou0, xianhouhou1, xianhouhou2, xianhouhou3, xianhouhou4, xianhouhou5, xianhouhou6, xianhouhou7, xianhouhou8, xianhouhou9);

    // 排序
    for (let i = 0; i < shuzu11.length - 1; i++) {
        for (let j = 0; j < shuzu11.length - 1 - i; j++) {
            if (shuzu11[j] > shuzu11[j + 1]) {
                let temp = shuzu11[j];
                shuzu11[j] = shuzu[j + 1];
                shuzu11[j + 1] = temp;
            }
        }
    }

    // 格式化
    var geshihua1 = shuzu00.slice(0, (shuzu11[shuzu11.length - 1] + 1));
    var b = [];
    for (let i = 0; i < geshihua1.length; i++) {
        if (i == geshihua1.length - 1) {
            b = b + shuzu00[i];
            break;
        } else if (i == 2 || i == 5 || i == 8 || i == 11 || i == 14 || i == 17 || i == 20 || i == 23 || i == 26 || i == 29) {
            b = b + shuzu00[i] + " ";
        } else {
            b = b + shuzu00[i];
        }
    }










    // 数组排序
    geshihua1.sort(function (x, y) {
        return x - y;
    });

    // 计算重复值
    var chong00 = 0;
    var chong11 = 0;
    var chong22 = 0;
    var chong33 = 0;
    var chong44 = 0;
    var chong55 = 0;
    var chong66 = 0;
    var chong77 = 0;
    var chong88 = 0;
    var chong99 = 0;

    for (let i = 0; i < geshihua1.length; i++) {
        if (0 == geshihua1[i]) {
            chong00++;
        }
        if (1 == geshihua1[i]) {
            chong11++;
        }
        if (2 == geshihua1[i]) {
            chong22++;
        }
        if (3 == geshihua1[i]) {
            chong33++;
        }
        if (4 == geshihua1[i]) {
            chong44++;
        }
        if (5 == geshihua1[i]) {
            chong55++;
        }
        if (6 == geshihua1[i]) {
            chong66++;
        }
        if (7 == geshihua1[i]) {
            chong77++;
        }
        if (8 == geshihua1[i]) {
            chong88++;
        }
        if (9 == geshihua1[i]) {
            chong99++;
        }
    }










    var zhi0 = 0;
    var zhi1 = 1;
    var zhi2 = 2;
    var zhi3 = 3;
    var zhi4 = 4;
    var zhi5 = 5;
    var zhi6 = 6;
    var zhi7 = 7;
    var zhi8 = 8;
    var zhi9 = 9;

    var zhi00 = 0;
    var zhi11 = 1;
    var zhi22 = 2;
    var zhi33 = 3;
    var zhi44 = 4;
    var zhi55 = 5;
    var zhi66 = 6;
    var zhi77 = 7;
    var zhi88 = 8;
    var zhi99 = 9;










    // 文本域
    var textarea1 = document.getElementById("textarea1");
    textarea1.value = "号码 " + input1.value + input2.value + input3.value + " 买" +
        "\n直接加 " + a + " 缺" + shuzu[shuzu1[shuzu1.length - 1]] + " 位" + (shuzu1[shuzu1.length - 1] + 1) +
        "\n" + "值 " + zhi0 + " " + zhi1 + " " + zhi2 + " " + zhi3 + " " + zhi4 + " " + zhi5 + " " + zhi6 + " " + zhi7 + " " + zhi8 + " " + zhi9 +
        "\n重 " + chong0 + " " + chong1 + " " + chong2 + " " + chong3 + " " + chong4 + " " + chong5 + " " + chong6 + " " + chong7 + " " + chong8 + " " + chong9 +
        "\n算后加 " + b + " 缺" + shuzu00[shuzu11[shuzu11.length - 1]] + " 位" + (shuzu11[shuzu11.length - 1] + 1) +
        "\n" + "值 " + zhi00 + " " + zhi11 + " " + zhi22 + " " + zhi33 + " " + zhi44 + " " + zhi55 + " " + zhi66 + " " + zhi77 + " " + zhi88 + " " + zhi99 +
        "\n重 " + chong00 + " " + chong11 + " " + chong22 + " " + chong33 + " " + chong44 + " " + chong55 + " " + chong66 + " " + chong77 + " " + chong88 + " " + chong99 +
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