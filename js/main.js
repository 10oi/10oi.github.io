function main() {
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

    // // 位置
    // var xianhou0 = shuzu.indexOf("0");
    // var xianhou1 = shuzu.indexOf("1");
    // var xianhou2 = shuzu.indexOf("2");
    // var xianhou3 = shuzu.indexOf("3");
    // var xianhou4 = shuzu.indexOf("4");
    // var xianhou5 = shuzu.indexOf("5");
    // var xianhou6 = shuzu.indexOf("6");
    // var xianhou7 = shuzu.indexOf("7");
    // var xianhou8 = shuzu.indexOf("8");
    // var xianhou9 = shuzu.indexOf("9");

    // // 位置数组
    // var shuzu1 = new Array(xianhou0, xianhou1, xianhou2, xianhou3, xianhou4, xianhou5, xianhou6, xianhou7, xianhou8, xianhou9);

    // // 排序
    // for (let i = 0; i < shuzu1.length - 1; i++) {
    //     for (let j = 0; j < shuzu1.length - 1 - i; j++) {
    //         if (shuzu1[j] > shuzu1[j + 1]) {
    //             let temp = shuzu1[j];
    //             shuzu1[j] = shuzu[j + 1];
    //             shuzu1[j + 1] = temp;
    //         }
    //     }
    // }

    // // 格式化
    // var geshihua = shuzu.slice(0, (shuzu1[shuzu1.length - 1] + 1))
    // var a = [];
    // for (let i = 0; i < geshihua.length; i++) {
    //     if (i == geshihua.length - 1) {
    //         a = a + shuzu[i];
    //         break;
    //     } else if (i == 2 || i == 5 || i == 8 || i == 11 || i == 14 || i == 17 || i == 20 || i == 23 || i == 26 || i == 29) {
    //         a = a + shuzu[i] + " ";
    //     } else {
    //         a = a + shuzu[i];
    //     }
    // }

    var a = [];
    for (let i = 0; i < shuzu.length; i++) {
        if (i == shuzu.length - 1) {
            a = a + shuzu[i];
            break;
        } else if (i == 2 || i == 5 || i == 8 || i == 11 || i == 14 || i == 17 || i == 20 || i == 23 || i == 26 || i == 29) {
            a = a + shuzu[i] + " ";
        } else {
            a = a + shuzu[i];
        }
    }








    // // 数组排序
    // geshihua.sort(function (x, y) {
    //     return x - y;
    // });

    // // 值
    // var zhi0 = 0;
    // var zhi1 = 1;
    // var zhi2 = 2;
    // var zhi3 = 3;
    // var zhi4 = 4;
    // var zhi5 = 5;
    // var zhi6 = 6;
    // var zhi7 = 7;
    // var zhi8 = 8;
    // var zhi9 = 9;

    // // 重
    // var chong0 = 0;
    // var chong1 = 0;
    // var chong2 = 0;
    // var chong3 = 0;
    // var chong4 = 0;
    // var chong5 = 0;
    // var chong6 = 0;
    // var chong7 = 0;
    // var chong8 = 0;
    // var chong9 = 0;

    // for (let i = 0; i < geshihua.length; i++) {
    //     if (0 == geshihua[i]) {
    //         chong0++;
    //     }
    //     if (1 == geshihua[i]) {
    //         chong1++;
    //     }
    //     if (2 == geshihua[i]) {
    //         chong2++;
    //     }
    //     if (3 == geshihua[i]) {
    //         chong3++;
    //     }
    //     if (4 == geshihua[i]) {
    //         chong4++;
    //     }
    //     if (5 == geshihua[i]) {
    //         chong5++;
    //     }
    //     if (6 == geshihua[i]) {
    //         chong6++;
    //     }
    //     if (7 == geshihua[i]) {
    //         chong7++;
    //     }
    //     if (8 == geshihua[i]) {
    //         chong8++;
    //     }
    //     if (9 == geshihua[i]) {
    //         chong9++;
    //     }
    // }










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

    // // 位置
    // var xianhouhou0 = shuzu00.indexOf("0");
    // var xianhouhou1 = shuzu00.indexOf("1");
    // var xianhouhou2 = shuzu00.indexOf("2");
    // var xianhouhou3 = shuzu00.indexOf("3");
    // var xianhouhou4 = shuzu00.indexOf("4");
    // var xianhouhou5 = shuzu00.indexOf("5");
    // var xianhouhou6 = shuzu00.indexOf("6");
    // var xianhouhou7 = shuzu00.indexOf("7");
    // var xianhouhou8 = shuzu00.indexOf("8");
    // var xianhouhou9 = shuzu00.indexOf("9");

    // // 位置数组
    // var shuzu11 = new Array(xianhouhou0, xianhouhou1, xianhouhou2, xianhouhou3, xianhouhou4, xianhouhou5, xianhouhou6, xianhouhou7, xianhouhou8, xianhouhou9);

    // // 排序
    // for (let i = 0; i < shuzu11.length - 1; i++) {
    //     for (let j = 0; j < shuzu11.length - 1 - i; j++) {
    //         if (shuzu11[j] > shuzu11[j + 1]) {
    //             let temp = shuzu11[j];
    //             shuzu11[j] = shuzu[j + 1];
    //             shuzu11[j + 1] = temp;
    //         }
    //     }
    // }

    // // 格式化
    // var geshihua1 = shuzu00.slice(0, (shuzu11[shuzu11.length - 1] + 1));
    // var b = [];
    // for (let i = 0; i < geshihua1.length; i++) {
    //     if (i == geshihua1.length - 1) {
    //         b = b + shuzu00[i];
    //         break;
    //     } else if (i == 2 || i == 5 || i == 8 || i == 11 || i == 14 || i == 17 || i == 20 || i == 23 || i == 26 || i == 29) {
    //         b = b + shuzu00[i] + " ";
    //     } else {
    //         b = b + shuzu00[i];
    //     }
    // }

    var b = [];
    for (let i = 0; i < shuzu00.length; i++) {
        if (i == shuzu00.length - 1) {
            b = b + shuzu00[i];
            break;
        } else if (i == 2 || i == 5 || i == 8 || i == 11 || i == 14 || i == 17 || i == 20 || i == 23 || i == 26 || i == 29) {
            b = b + shuzu00[i] + " ";
        } else {
            b = b + shuzu00[i];
        }
    }








    // // 数组排序
    // geshihua1.sort(function (x, y) {
    //     return x - y;
    // });

    // // 值
    // var zhi00 = 0;
    // var zhi11 = 1;
    // var zhi22 = 2;
    // var zhi33 = 3;
    // var zhi44 = 4;
    // var zhi55 = 5;
    // var zhi66 = 6;
    // var zhi77 = 7;
    // var zhi88 = 8;
    // var zhi99 = 9;

    // // 重
    // var chong00 = 0;
    // var chong11 = 0;
    // var chong22 = 0;
    // var chong33 = 0;
    // var chong44 = 0;
    // var chong55 = 0;
    // var chong66 = 0;
    // var chong77 = 0;
    // var chong88 = 0;
    // var chong99 = 0;

    // for (let i = 0; i < geshihua1.length; i++) {
    //     if (0 == geshihua1[i]) {
    //         chong00++;
    //     }
    //     if (1 == geshihua1[i]) {
    //         chong11++;
    //     }
    //     if (2 == geshihua1[i]) {
    //         chong22++;
    //     }
    //     if (3 == geshihua1[i]) {
    //         chong33++;
    //     }
    //     if (4 == geshihua1[i]) {
    //         chong44++;
    //     }
    //     if (5 == geshihua1[i]) {
    //         chong55++;
    //     }
    //     if (6 == geshihua1[i]) {
    //         chong66++;
    //     }
    //     if (7 == geshihua1[i]) {
    //         chong77++;
    //     }
    //     if (8 == geshihua1[i]) {
    //         chong88++;
    //     }
    //     if (9 == geshihua1[i]) {
    //         chong99++;
    //     }
    // }










    // 减
    var yi000 = String(11 - parseInt(input1.value)).charAt(String(11 - parseInt(input1.value)).length - 1);
    var er000 = String(11 - parseInt(input2.value)).charAt(String(11 - parseInt(input2.value)).length - 1);
    var san000 = String(11 - parseInt(input3.value)).charAt(String(11 - parseInt(input3.value)).length - 1);

    var yi111 = String(12 - parseInt(input1.value)).charAt(String(12 - parseInt(input1.value)).length - 1);
    var er111 = String(12 - parseInt(input2.value)).charAt(String(12 - parseInt(input2.value)).length - 1);
    var san111 = String(12 - parseInt(input3.value)).charAt(String(12 - parseInt(input3.value)).length - 1);

    var yi222 = String(13 - parseInt(input1.value)).charAt(String(13 - parseInt(input1.value)).length - 1);
    var er222 = String(13 - parseInt(input2.value)).charAt(String(13 - parseInt(input2.value)).length - 1);
    var san222 = String(13 - parseInt(input3.value)).charAt(String(13 - parseInt(input3.value)).length - 1);

    var yi333 = String(14 - parseInt(input1.value)).charAt(String(14 - parseInt(input1.value)).length - 1);
    var er333 = String(14 - parseInt(input2.value)).charAt(String(14 - parseInt(input2.value)).length - 1);
    var san333 = String(14 - parseInt(input3.value)).charAt(String(14 - parseInt(input3.value)).length - 1);

    var yi444 = String(15 - parseInt(input1.value)).charAt(String(15 - parseInt(input1.value)).length - 1);
    var er444 = String(15 - parseInt(input2.value)).charAt(String(15 - parseInt(input2.value)).length - 1);
    var san444 = String(15 - parseInt(input3.value)).charAt(String(15 - parseInt(input3.value)).length - 1);

    var yi555 = String(16 - parseInt(input1.value)).charAt(String(16 - parseInt(input1.value)).length - 1);
    var er555 = String(16 - parseInt(input2.value)).charAt(String(16 - parseInt(input2.value)).length - 1);
    var san555 = String(16 - parseInt(input3.value)).charAt(String(16 - parseInt(input3.value)).length - 1);

    var yi666 = String(17 - parseInt(input1.value)).charAt(String(17 - parseInt(input1.value)).length - 1);
    var er666 = String(17 - parseInt(input2.value)).charAt(String(17 - parseInt(input2.value)).length - 1);
    var san666 = String(17 - parseInt(input3.value)).charAt(String(17 - parseInt(input3.value)).length - 1);

    var yi777 = String(18 - parseInt(input1.value)).charAt(String(18 - parseInt(input1.value)).length - 1);
    var er777 = String(18 - parseInt(input2.value)).charAt(String(18 - parseInt(input2.value)).length - 1);
    var san777 = String(18 - parseInt(input3.value)).charAt(String(18 - parseInt(input3.value)).length - 1);

    var yi888 = String(19 - parseInt(input1.value)).charAt(String(19 - parseInt(input1.value)).length - 1);
    var er888 = String(19 - parseInt(input2.value)).charAt(String(19 - parseInt(input2.value)).length - 1);
    var san888 = String(19 - parseInt(input3.value)).charAt(String(19 - parseInt(input3.value)).length - 1);

    var yi999 = String(20 - parseInt(input1.value)).charAt(String(20 - parseInt(input1.value)).length - 1);
    var er999 = String(20 - parseInt(input2.value)).charAt(String(20 - parseInt(input2.value)).length - 1);
    var san999 = String(20 - parseInt(input3.value)).charAt(String(20 - parseInt(input3.value)).length - 1);










    // // 分别减
    // var yi0000 = parseInt(input1.value) - 1;
    // var er0000 = parseInt(input2.value) - 1;
    // var san0000 = parseInt(input3.value) - 1;

    // if (yi0000 == -1) {
    //     yi0000 = 9;
    // } else {
    //     yi0000 = String(yi0000);
    // }
    // if (er0000 == -1) {
    //     er0000 = 9;
    // } else {
    //     er0000 = String(er0000);
    // }
    // if (san0000 == -1) {
    //     san0000 = 9;
    // } else {
    //     san0000 = String(san0000);
    // }

    // var yi1111 = parseInt(yi0000) - 1;
    // var er1111 = parseInt(er0000) - 1;
    // var san1111 = parseInt(san0000) - 1;

    // if (yi1111 == -1) {
    //     yi1111 = 9;
    // } else {
    //     yi1111 = String(yi1111);
    // }
    // if (er1111 == -1) {
    //     er1111 = 9;
    // } else {
    //     er1111 = String(er1111);
    // }
    // if (san1111 == -1) {
    //     san1111 = 9;
    // } else {
    //     san1111 = String(san1111);
    // }

    // var yi2222 = parseInt(yi1111) - 1;
    // var er2222 = parseInt(er1111) - 1;
    // var san2222 = parseInt(san1111) - 1;

    // if (yi2222 == -1) {
    //     yi2222 = 9;
    // } else {
    //     yi2222 = String(yi2222);
    // }
    // if (er2222 == -1) {
    //     er2222 = 9;
    // } else {
    //     er2222 = String(er2222);
    // }
    // if (san2222 == -1) {
    //     san2222 = 9;
    // } else {
    //     san2222 = String(san2222);
    // }

    // var yi3333 = parseInt(yi2222) - 1;
    // var er3333 = parseInt(er2222) - 1;
    // var san3333 = parseInt(san2222) - 1;

    // if (yi3333 == -1) {
    //     yi3333 = 9;
    // } else {
    //     yi3333 = String(yi3333);
    // }
    // if (er3333 == -1) {
    //     er3333 = 9;
    // } else {
    //     er3333 = String(er3333);
    // }
    // if (san3333 == -1) {
    //     san3333 = 9;
    // } else {
    //     san3333 = String(san3333);
    // }

    // var yi4444 = parseInt(yi3333) - 1;
    // var er4444 = parseInt(er3333) - 1;
    // var san4444 = parseInt(san3333) - 1;

    // if (yi4444 == -1) {
    //     yi4444 = 9;
    // } else {
    //     yi4444 = String(yi4444);
    // }
    // if (er4444 == -1) {
    //     er4444 = 9;
    // } else {
    //     er4444 = String(er4444);
    // }
    // if (san4444 == -1) {
    //     san4444 = 9;
    // } else {
    //     san4444 = String(san4444);
    // }

    // var yi5555 = parseInt(yi4444) - 1;
    // var er5555 = parseInt(er4444) - 1;
    // var san5555 = parseInt(san4444) - 1;

    // if (yi5555 == -1) {
    //     yi5555 = 9;
    // } else {
    //     yi5555 = String(yi5555);
    // }
    // if (er5555 == -1) {
    //     er5555 = 9;
    // } else {
    //     er5555 = String(er5555);
    // }
    // if (san5555 == -1) {
    //     san5555 = 9;
    // } else {
    //     san5555 = String(san5555);
    // }

    // var yi6666 = parseInt(yi5555) - 1;
    // var er6666 = parseInt(er5555) - 1;
    // var san6666 = parseInt(san5555) - 1;

    // if (yi6666 == -1) {
    //     yi6666 = 9;
    // } else {
    //     yi6666 = String(yi6666);
    // }
    // if (er6666 == -1) {
    //     er6666 = 9;
    // } else {
    //     er6666 = String(er6666);
    // }
    // if (san6666 == -1) {
    //     san6666 = 9;
    // } else {
    //     san6666 = String(san6666);
    // }

    // var yi7777 = parseInt(yi6666) - 1;
    // var er7777 = parseInt(er6666) - 1;
    // var san7777 = parseInt(san6666) - 1;

    // if (yi7777 == -1) {
    //     yi7777 = 9;
    // } else {
    //     yi7777 = String(yi7777);
    // }
    // if (er7777 == -1) {
    //     er7777 = 9;
    // } else {
    //     er7777 = String(er7777);
    // }
    // if (san7777 == -1) {
    //     san7777 = 9;
    // } else {
    //     san7777 = String(san7777);
    // }

    // var yi8888 = parseInt(yi7777) - 1;
    // var er8888 = parseInt(er7777) - 1;
    // var san8888 = parseInt(san7777) - 1;

    // if (yi8888 == -1) {
    //     yi8888 = 9;
    // } else {
    //     yi8888 = String(yi8888);
    // }
    // if (er8888 == -1) {
    //     er8888 = 9;
    // } else {
    //     er8888 = String(er8888);
    // }
    // if (san8888 == -1) {
    //     san8888 = 9;
    // } else {
    //     san8888 = String(san8888);
    // }

    // var yi9999 = parseInt(yi8888) - 1;
    // var er9999 = parseInt(er8888) - 1;
    // var san9999 = parseInt(san8888) - 1;

    // if (yi9999 == -1) {
    //     yi9999 = 9;
    // } else {
    //     yi9999 = String(yi9999);
    // }
    // if (er9999 == -1) {
    //     er9999 = 9;
    // } else {
    //     er9999 = String(er9999);
    // }
    // if (san9999 == -1) {
    //     san9999 = 9;
    // } else {
    //     san9999 = String(san9999);
    // }









    // 内容
    var haoma = input1.value + input2.value + input3.value;

    // var zhiliebiao1 = zhi0 + " " + zhi1 + " " + zhi2 + " " + zhi3 + " " + zhi4 + " " + zhi5 + " " + zhi6 + " " + zhi7 + " " + zhi8 + " " + zhi9;
    // var chongliebiao1 = chong0 + " " + chong1 + " " + chong2 + " " + chong3 + " " + chong4 + " " + chong5 + " " + chong6 + " " + chong7 + " " + chong8 + " " + chong9;

    // var zhiliebiao2 = zhi00 + " " + zhi11 + " " + zhi22 + " " + zhi33 + " " + zhi44 + " " + zhi55 + " " + zhi66 + " " + zhi77 + " " + zhi88 + " " + zhi99;
    // var chongliebiao2 = chong00 + " " + chong11 + " " + chong22 + " " + chong33 + " " + chong44 + " " + chong55 + " " + chong66 + " " + chong77 + " " + chong88 + " " + chong99;

    // var shuzi = "  1" + "      2" + "      3" + "      4" + "     5" + "      6" + "      7" + "     8" + "     9" + "      0";
    // var shuzi1 = "  1" + "      2" + "      3" + "      4" + "     5" + "      6" + "      7" + "     8" + "     9" + "      0";

    var jian = yi000 + er000 + san000 + " " + yi111 + er111 + san111 + " " + yi222 + er222 + san222 + " " + yi333 + er333 + san333 + " " + yi444 + er444 + san444 + " " + yi555 + er555 + san555 + " " + yi666 + er666 + san666 + " " + yi777 + er777 + san777 + " " + yi888 + er888 + san888 + " " + yi999 + er999 + san999;
    // var jian1 = yi0000 + er0000 + san0000 + " " + yi1111 + er1111 + san1111 + " " + yi2222 + er2222 + san2222 + " " + yi3333 + er3333 + san3333 + " " + yi4444 + er4444 + san4444 + " " + yi5555 + er5555 + san5555 + " " + yi6666 + er6666 + san6666 + " " + yi7777 + er7777 + san7777 + " " + yi8888 + er8888 + san8888 + " " + yi9999 + er9999 + san9999;










    var a1 = String(parseInt(yi000) + parseInt(er000) + parseInt(san000)).charAt(String(parseInt(yi000) + parseInt(er000) + parseInt(san000)).length - 1);
    var a2 = String(parseInt(yi111) + parseInt(er111) + parseInt(san111)).charAt(String(parseInt(yi111) + parseInt(er111) + parseInt(san111)).length - 1);
    var a3 = String(parseInt(yi222) + parseInt(er222) + parseInt(san222)).charAt(String(parseInt(yi222) + parseInt(er222) + parseInt(san222)).length - 1);
    var a4 = String(parseInt(yi333) + parseInt(er333) + parseInt(san333)).charAt(String(parseInt(yi333) + parseInt(er333) + parseInt(san333)).length - 1);
    var a5 = String(parseInt(yi444) + parseInt(er444) + parseInt(san444)).charAt(String(parseInt(yi444) + parseInt(er444) + parseInt(san444)).length - 1);
    var a6 = String(parseInt(yi555) + parseInt(er555) + parseInt(san555)).charAt(String(parseInt(yi555) + parseInt(er555) + parseInt(san555)).length - 1);
    var a7 = String(parseInt(yi666) + parseInt(er666) + parseInt(san666)).charAt(String(parseInt(yi666) + parseInt(er666) + parseInt(san666)).length - 1);
    var a8 = String(parseInt(yi777) + parseInt(er777) + parseInt(san777)).charAt(String(parseInt(yi777) + parseInt(er777) + parseInt(san777)).length - 1);
    var a9 = String(parseInt(yi888) + parseInt(er888) + parseInt(san888)).charAt(String(parseInt(yi888) + parseInt(er888) + parseInt(san888)).length - 1);
    var a10 = String(parseInt(yi999) + parseInt(er999) + parseInt(san999)).charAt(String(parseInt(yi999) + parseInt(er999) + parseInt(san999)).length - 1);

    // var b1 = String(parseInt(yi0000) + parseInt(er0000) + parseInt(san0000)).charAt(String(parseInt(yi0000) + parseInt(er0000) + parseInt(san0000)).length - 1);
    // var b2 = String(parseInt(yi1111) + parseInt(er1111) + parseInt(san1111)).charAt(String(parseInt(yi1111) + parseInt(er1111) + parseInt(san1111)).length - 1);
    // var b3 = String(parseInt(yi2222) + parseInt(er2222) + parseInt(san2222)).charAt(String(parseInt(yi2222) + parseInt(er2222) + parseInt(san2222)).length - 1);
    // var b4 = String(parseInt(yi3333) + parseInt(er3333) + parseInt(san3333)).charAt(String(parseInt(yi3333) + parseInt(er3333) + parseInt(san3333)).length - 1);
    // var b5 = String(parseInt(yi4444) + parseInt(er4444) + parseInt(san4444)).charAt(String(parseInt(yi4444) + parseInt(er4444) + parseInt(san4444)).length - 1);
    // var b6 = String(parseInt(yi5555) + parseInt(er5555) + parseInt(san5555)).charAt(String(parseInt(yi5555) + parseInt(er5555) + parseInt(san5555)).length - 1);
    // var b7 = String(parseInt(yi6666) + parseInt(er6666) + parseInt(san6666)).charAt(String(parseInt(yi6666) + parseInt(er6666) + parseInt(san6666)).length - 1);
    // var b8 = String(parseInt(yi7777) + parseInt(er7777) + parseInt(san7777)).charAt(String(parseInt(yi7777) + parseInt(er7777) + parseInt(san7777)).length - 1);
    // var b9 = String(parseInt(yi8888) + parseInt(er8888) + parseInt(san8888)).charAt(String(parseInt(yi8888) + parseInt(er8888) + parseInt(san8888)).length - 1);
    // var b10 = String(parseInt(yi9999) + parseInt(er9999) + parseInt(san9999)).charAt(String(parseInt(yi9999) + parseInt(er9999) + parseInt(san9999)).length - 1);

    var jianhe = "&nbsp;&nbsp;" + a1 + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + a2 + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + a3 + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + a4 + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + a5 + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + a6 + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + a7 + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + a8 + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + a9 + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + a10;
    // var jianhe1 = "&nbsp;&nbsp;" + b1 + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + b2 + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + b3 + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + b4 + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + b5 + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + b6 + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + b7 + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + b8 + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + b9 + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + b10;


    var c1 = String(parseInt(num1) + parseInt(num2) + parseInt(num3)).charAt(String(parseInt(num1) + parseInt(num2) + parseInt(num3)).length - 1);
    var c2 = String(parseInt(yi) + parseInt(er) + parseInt(san)).charAt(String(parseInt(yi) + parseInt(er) + parseInt(san)).length - 1);
    var c3 = String(parseInt(yi1) + parseInt(er1) + parseInt(san1)).charAt(String(parseInt(yi1) + parseInt(er1) + parseInt(san1)).length - 1);
    var c4 = String(parseInt(yi2) + parseInt(er2) + parseInt(san2)).charAt(String(parseInt(yi2) + parseInt(er2) + parseInt(san2)).length - 1);
    var c5 = String(parseInt(yi3) + parseInt(er3) + parseInt(san3)).charAt(String(parseInt(yi3) + parseInt(er3) + parseInt(san3)).length - 1);
    var c6 = String(parseInt(yi4) + parseInt(er4) + parseInt(san4)).charAt(String(parseInt(yi4) + parseInt(er4) + parseInt(san4)).length - 1);
    var c7 = String(parseInt(yi5) + parseInt(er5) + parseInt(san5)).charAt(String(parseInt(yi5) + parseInt(er5) + parseInt(san5)).length - 1);
    var c8 = String(parseInt(yi6) + parseInt(er6) + parseInt(san6)).charAt(String(parseInt(yi6) + parseInt(er6) + parseInt(san6)).length - 1);
    var c9 = String(parseInt(yi7) + parseInt(er7) + parseInt(san7)).charAt(String(parseInt(yi7) + parseInt(er7) + parseInt(san7)).length - 1);
    var c10 = String(parseInt(yi8) + parseInt(er8) + parseInt(san8)).charAt(String(parseInt(yi8) + parseInt(er8) + parseInt(san8)).length - 1);

    var suanhoujiahe = "&nbsp;&nbsp;" + c1 + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + c2 + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + c3 + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + c4 + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + c5 + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + c6 + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + c7 + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + c8 + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + c9 + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + c10;






    var huanhangId = document.getElementById("huanhangId");
    huanhangId.innerText = "\n";

    var haomaId = document.getElementById("haomaId");
    haomaId.innerText = "号码：" + haoma;

    // var zhijiejiaId = document.getElementById("zhijiejiaId");
    // zhijiejiaId.innerText = a;

    var shuziId = document.getElementById("shuziId");
    shuziId.innerHTML = "&nbsp;&nbsp;1" + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2" + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3" + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4" + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5" + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;6" + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;7" + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;8" + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;9" + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0";
    var jianId = document.getElementById("jianId");
    jianId.innerText = jian;
    var jianheId = document.getElementById("jianheId");
    jianheId.innerHTML = jianhe;



    var fengexianId = document.getElementById("fengexianId");
    fengexianId.innerText = "-------------------------------------------";



    var shuzi1Id = document.getElementById("shuzi1Id");
    shuzi1Id.innerHTML = "&nbsp;&nbsp;1" + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2" + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3" + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4" + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5" + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;6" + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;7" + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;8" + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;9" + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0";
    var suanhoujiaId = document.getElementById("suanhoujiaId");
    suanhoujiaId.innerText = b;
    var suanhoujiaheId = document.getElementById("suanhoujiaheId");
    suanhoujiaheId.innerHTML = suanhoujiahe;



    var fengexian1Id = document.getElementById("fengexian1Id");
    fengexian1Id.innerText = "-------------------------------------------";



    var shihang1Id = document.getElementById("shihang1Id");
    shihang1Id.innerText = "1： " + yi000 + er000 + san000
        + " " + String(parseInt(yi000) + 1).charAt(String(parseInt(yi000) + 1).length - 1) + String(parseInt(er000) + 1).charAt(String(parseInt(er000) + 1).length - 1) + String(parseInt(san000) + 1).charAt(String(parseInt(san000) + 1).length - 1)
        + " " + String(parseInt(yi000) + 2).charAt(String(parseInt(yi000) + 2).length - 1) + String(parseInt(er000) + 2).charAt(String(parseInt(er000) + 2).length - 1) + String(parseInt(san000) + 2).charAt(String(parseInt(san000) + 2).length - 1)
        + " " + String(parseInt(yi000) + 3).charAt(String(parseInt(yi000) + 3).length - 1) + String(parseInt(er000) + 3).charAt(String(parseInt(er000) + 3).length - 1) + String(parseInt(san000) + 3).charAt(String(parseInt(san000) + 3).length - 1);

    var shihang1Id = document.getElementById("shihang2Id");
    shihang1Id.innerText = "2： " + yi111 + er111 + san111
        + " " + String(parseInt(yi111) + 1).charAt(String(parseInt(yi111) + 1).length - 1) + String(parseInt(er111) + 1).charAt(String(parseInt(er111) + 1).length - 1) + String(parseInt(san111) + 1).charAt(String(parseInt(san111) + 1).length - 1)
        + " " + String(parseInt(yi111) + 2).charAt(String(parseInt(yi111) + 2).length - 1) + String(parseInt(er111) + 2).charAt(String(parseInt(er111) + 2).length - 1) + String(parseInt(san111) + 2).charAt(String(parseInt(san111) + 2).length - 1)
        + " " + String(parseInt(yi111) + 3).charAt(String(parseInt(yi111) + 3).length - 1) + String(parseInt(er111) + 3).charAt(String(parseInt(er111) + 3).length - 1) + String(parseInt(san111) + 3).charAt(String(parseInt(san111) + 3).length - 1);

    var shihang1Id = document.getElementById("shihang3Id");
    shihang1Id.innerText = "3： " + yi222 + er222 + san222
        + " " + String(parseInt(yi222) + 1).charAt(String(parseInt(yi222) + 1).length - 1) + String(parseInt(er222) + 1).charAt(String(parseInt(er222) + 1).length - 1) + String(parseInt(san222) + 1).charAt(String(parseInt(san222) + 1).length - 1)
        + " " + String(parseInt(yi222) + 2).charAt(String(parseInt(yi222) + 2).length - 1) + String(parseInt(er222) + 2).charAt(String(parseInt(er222) + 2).length - 1) + String(parseInt(san222) + 2).charAt(String(parseInt(san222) + 2).length - 1)
        + " " + String(parseInt(yi222) + 3).charAt(String(parseInt(yi222) + 3).length - 1) + String(parseInt(er222) + 3).charAt(String(parseInt(er222) + 3).length - 1) + String(parseInt(san222) + 3).charAt(String(parseInt(san222) + 3).length - 1);

    var shihang1Id = document.getElementById("shihang4Id");
    shihang1Id.innerText = "4： " + yi333 + er333 + san333
        + " " + String(parseInt(yi333) + 1).charAt(String(parseInt(yi333) + 1).length - 1) + String(parseInt(er333) + 1).charAt(String(parseInt(er333) + 1).length - 1) + String(parseInt(san333) + 1).charAt(String(parseInt(san333) + 1).length - 1)
        + " " + String(parseInt(yi333) + 2).charAt(String(parseInt(yi333) + 2).length - 1) + String(parseInt(er333) + 2).charAt(String(parseInt(er333) + 2).length - 1) + String(parseInt(san333) + 2).charAt(String(parseInt(san333) + 2).length - 1)
        + " " + String(parseInt(yi333) + 3).charAt(String(parseInt(yi333) + 3).length - 1) + String(parseInt(er333) + 3).charAt(String(parseInt(er333) + 3).length - 1) + String(parseInt(san333) + 3).charAt(String(parseInt(san333) + 3).length - 1);

    var shihang1Id = document.getElementById("shihang5Id");
    shihang1Id.innerText = "5： " + yi444 + er444 + san444
        + " " + String(parseInt(yi444) + 1).charAt(String(parseInt(yi444) + 1).length - 1) + String(parseInt(er444) + 1).charAt(String(parseInt(er444) + 1).length - 1) + String(parseInt(san444) + 1).charAt(String(parseInt(san444) + 1).length - 1)
        + " " + String(parseInt(yi444) + 2).charAt(String(parseInt(yi444) + 2).length - 1) + String(parseInt(er444) + 2).charAt(String(parseInt(er444) + 2).length - 1) + String(parseInt(san444) + 2).charAt(String(parseInt(san444) + 2).length - 1)
        + " " + String(parseInt(yi444) + 3).charAt(String(parseInt(yi444) + 3).length - 1) + String(parseInt(er444) + 3).charAt(String(parseInt(er444) + 3).length - 1) + String(parseInt(san444) + 3).charAt(String(parseInt(san444) + 3).length - 1);

    var shihang1Id = document.getElementById("shihang6Id");
    shihang1Id.innerText = "6： " + yi555 + er555 + san555
        + " " + String(parseInt(yi555) + 1).charAt(String(parseInt(yi555) + 1).length - 1) + String(parseInt(er555) + 1).charAt(String(parseInt(er555) + 1).length - 1) + String(parseInt(san555) + 1).charAt(String(parseInt(san555) + 1).length - 1)
        + " " + String(parseInt(yi555) + 2).charAt(String(parseInt(yi555) + 2).length - 1) + String(parseInt(er555) + 2).charAt(String(parseInt(er555) + 2).length - 1) + String(parseInt(san555) + 2).charAt(String(parseInt(san555) + 2).length - 1)
        + " " + String(parseInt(yi555) + 3).charAt(String(parseInt(yi555) + 3).length - 1) + String(parseInt(er555) + 3).charAt(String(parseInt(er555) + 3).length - 1) + String(parseInt(san555) + 3).charAt(String(parseInt(san555) + 3).length - 1);

    var shihang1Id = document.getElementById("shihang7Id");
    shihang1Id.innerText = "7： " + yi666 + er666 + san666
        + " " + String(parseInt(yi666) + 1).charAt(String(parseInt(yi666) + 1).length - 1) + String(parseInt(er666) + 1).charAt(String(parseInt(er666) + 1).length - 1) + String(parseInt(san666) + 1).charAt(String(parseInt(san666) + 1).length - 1)
        + " " + String(parseInt(yi666) + 2).charAt(String(parseInt(yi666) + 2).length - 1) + String(parseInt(er666) + 2).charAt(String(parseInt(er666) + 2).length - 1) + String(parseInt(san666) + 2).charAt(String(parseInt(san666) + 2).length - 1)
        + " " + String(parseInt(yi666) + 3).charAt(String(parseInt(yi666) + 3).length - 1) + String(parseInt(er666) + 3).charAt(String(parseInt(er666) + 3).length - 1) + String(parseInt(san666) + 3).charAt(String(parseInt(san666) + 3).length - 1);

    var shihang1Id = document.getElementById("shihang8Id");
    shihang1Id.innerText = "8： " + yi777 + er777 + san777
        + " " + String(parseInt(yi777) + 1).charAt(String(parseInt(yi777) + 1).length - 1) + String(parseInt(er777) + 1).charAt(String(parseInt(er777) + 1).length - 1) + String(parseInt(san777) + 1).charAt(String(parseInt(san777) + 1).length - 1)
        + " " + String(parseInt(yi777) + 2).charAt(String(parseInt(yi777) + 2).length - 1) + String(parseInt(er777) + 2).charAt(String(parseInt(er777) + 2).length - 1) + String(parseInt(san777) + 2).charAt(String(parseInt(san777) + 2).length - 1)
        + " " + String(parseInt(yi777) + 3).charAt(String(parseInt(yi777) + 3).length - 1) + String(parseInt(er777) + 3).charAt(String(parseInt(er777) + 3).length - 1) + String(parseInt(san777) + 3).charAt(String(parseInt(san777) + 3).length - 1);

    var shihang1Id = document.getElementById("shihang9Id");
    shihang1Id.innerText = "9： " + yi888 + er888 + san888
        + " " + String(parseInt(yi888) + 1).charAt(String(parseInt(yi888) + 1).length - 1) + String(parseInt(er888) + 1).charAt(String(parseInt(er888) + 1).length - 1) + String(parseInt(san888) + 1).charAt(String(parseInt(san888) + 1).length - 1)
        + " " + String(parseInt(yi888) + 2).charAt(String(parseInt(yi888) + 2).length - 1) + String(parseInt(er888) + 2).charAt(String(parseInt(er888) + 2).length - 1) + String(parseInt(san888) + 2).charAt(String(parseInt(san888) + 2).length - 1)
        + " " + String(parseInt(yi888) + 3).charAt(String(parseInt(yi888) + 3).length - 1) + String(parseInt(er888) + 3).charAt(String(parseInt(er888) + 3).length - 1) + String(parseInt(san888) + 3).charAt(String(parseInt(san888) + 3).length - 1);

    var shihang1Id = document.getElementById("shihang0Id");
    shihang1Id.innerText = "0： " + yi999 + er999 + san999
        + " " + String(parseInt(yi999) + 1).charAt(String(parseInt(yi999) + 1).length - 1) + String(parseInt(er999) + 1).charAt(String(parseInt(er999) + 1).length - 1) + String(parseInt(san999) + 1).charAt(String(parseInt(san999) + 1).length - 1)
        + " " + String(parseInt(yi999) + 2).charAt(String(parseInt(yi999) + 2).length - 1) + String(parseInt(er999) + 2).charAt(String(parseInt(er999) + 2).length - 1) + String(parseInt(san999) + 2).charAt(String(parseInt(san999) + 2).length - 1)
        + " " + String(parseInt(yi999) + 3).charAt(String(parseInt(yi999) + 3).length - 1) + String(parseInt(er999) + 3).charAt(String(parseInt(er999) + 3).length - 1) + String(parseInt(san999) + 3).charAt(String(parseInt(san999) + 3).length - 1);

    // var shuzi2Id = document.getElementById("shuzi2Id");
    // shuzi2Id.innerHTML = "&nbsp;&nbsp;1" + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2" + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3" + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4" + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5" + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;6" + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;7" + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;8" + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;9" + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0";
    // var jian1Id = document.getElementById("jian1Id");
    // jian1Id.innerText = jian1;
    // var jianhe1Id = document.getElementById("jianhe1Id");
    // jianhe1Id.innerHTML = jianhe1;

    var huanhang1Id = document.getElementById("huanhang1Id");
    huanhang1Id.innerText = "\n";

    // " 位" + (shuzu1[shuzu1.length - 1] + 1) +

    // " 位" + (shuzu11[shuzu11.length - 1] + 1) +

    // "\n" + "值 " + zhiliebiao1 + 
    // "\n" + "重 " + chongliebiao1 +

    // "\n" + "值 " + zhiliebiao2 + 
    // "\n" + "重 " + chongliebiao2 +










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
                    interval2 = setInterval(
                        function () {
                            if (input1.value != "" && input2.value != "" && input3.value != "") {
                                main();
                                clearInterval(interval2);
                            }
                        }, 200);
                    clearInterval(interval1);
                }
            }, 100);
    }

    // 复制
    document.getElementById("btn2").onclick = function () {
        var divText = document.getElementById("div");
        if (document.body.createTextRange) {
            var range = document.body.createTextRange();
            range.moveToElementText(divText);
            range.select();
        } else if (window.getSelection) {
            var selection = window.getSelection();
            var range = document.createRange();
            range.selectNodeContents(divText);
            selection.removeAllRanges();
            selection.addRange(range);
        } else {
            alert("none");
        }
        document.execCommand('Copy', 'false', null);
    }
}










// 初始化获取焦点
window.onload = interval = setInterval(
    function () {
        input1.focus();
        clearInterval(interval);
    }, 200);

// 初始化计算
window.onload = interval1 = setInterval(
    function () {
        if (input1.value != "" && input2.value != "" && input3.value != "") {
            main();
            clearInterval(interval1);
        }
    }, 200);

// 初始化判断焦点
window.onload = interval2 = setInterval(
    function () {
        if (input1.value != "") {
            input2.focus();
        }
        if (input2.value != "") {
            input3.focus();
            clearInterval(interval2);
        }
    }, 100);
