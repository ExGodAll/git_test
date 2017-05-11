window.onload = function () {
document.getElementById('button').onclick=function () {
        var text = document.getElementById('text').value;
        var result = "";
        for (var i = 0; i < text.length; i++) {
            var temp = text.charCodeAt(i);
            if (temp > 0xFF) temp -= 0x350;
            result += temp + " ";
        }
        document.getElementById('result').innerHTML = result;
    };
};