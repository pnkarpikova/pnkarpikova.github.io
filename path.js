function verify() {
    let path1 = parseInt(document.getElementsByTagName("input")[1].value);
    let path2= parseInt(document.getElementsByTagName("input")[2].value);
    let path3 = parseInt(document.getElementsByTagName("input")[3].value);
    console.log(path1, path2, path3)


    if (path1 >= 0 && path2 >= 0 && path3 >= 0 ) {
        result = ' Ваша стоимость: ' +  String(path1 * 400 + path2 * 200 + path3 * 200) + ' рублей'
        document.getElementById("result").innerText = messageText + result;
        check = true;
    } else {
        result = ' Введите большую сумму'
        document.getElementById("result").innerText = messageText + result;
        check = false;
    }
}

function send() {
    if (check) {
        let textCondition = document.getElementsByTagName('p')[0].innerText
        document.getElementsByName('formulation')[0].value = textCondition;
        document.getElementsByName('result')[0].value = result;
        document.getElementById("UserEnter").submit();
    } else {
        alert("Есть недостатки. Повторите ввод")
    }
}

function verify_send() {
    verify();
    send();
}

let messageText = document.getElementById("result").innerText
let result;
let check = false;

const elementA = document.getElementById("path1");
elementA.addEventListener('keyup', verify);
const elementB = document.getElementById("path2");
elementB.addEventListener('keyup', verify);
const elementC = document.getElementById("path3");
elementC.addEventListener('keyup', verify);

const elementSend = document.getElementById("send");
elementSend.addEventListener('click', send)