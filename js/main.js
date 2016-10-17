// 111 one hundred eleven
String.prototype.inHumanReadable = function () {
  var num = parseInt(this.replace(',', ''));
  if (num < 100) {
    return num;
  } else if (num < 99999) {
    var text = Math.floor(num / 1000) + ' thousand ';
    num = num % 1000;
    return text += Math.floor(num / 100) + ' hundred ' + num % 100;
  } else if (num < 999999) {
    var text = Math.floor(num / 10000) + ' lakh ';
    num = num % 10000;
    text += Math.floor(num / 1000) + ' thousand ';
    num = num % 1000;
    return text += Math.floor(num / 100) + ' hundred ' + num % 100;
  } else {
    var text = Math.floor(num / 1000000) + ' crore '
    num = num % 100000;
    text += Math.floor(num / 10000) + ' lakh ';
    num = num % 10000;
    text += Math.floor(num / 1000) + ' thousand ';
    num = num % 1000;
    return text += Math.floor(num / 100) + ' hundred ' + num % 100;
  }
};

function readIt() {
  var num = document.getElementById('num').value;
  var inString = num.inHumanReadable();
  document.getElementById('show').innerHTML = inString;
}
