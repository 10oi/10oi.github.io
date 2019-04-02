window.onload = function () {
    // 概率计算
    document.getElementById("btn1").onclick = function () {
        var input1 = document.getElementById("input1");
        var input2 = document.getElementById("input2");

        var jieguoSpanId = document.getElementById("jieguoSpanId");
        jieguoSpanId.innerText = "概率：" + Math.floor((parseInt(input1.value) / parseInt(input2.value)) * 10000) / 100 + "%";
    }
}