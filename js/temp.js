function tempmain() {
    // 输入框
    var input1 = document.getElementById("input1");
    var input2 = document.getElementById("input2");
    var input3 = document.getElementById("input3");














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
        // textarea1.select();
        // document.execCommand("Copy");
    }

    // 概率计算
    document.getElementById("btn3").onclick = function () {
        var input4 = document.getElementById("input4");
        var input5 = document.getElementById("input5");

        var jieguoSpanId = document.getElementById("jieguoSpanId");

        jieguoSpanId.innerText = "结果："+ parseInt(input4.value) / parseInt(input5.value);
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
            tempmain();
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
