/*var element = document.forms[0];
var question1 = element.q1;
var question2 = element.q2;
var question3 = element.q3;
var question4 = element.q4;
var question5 = element.q5;
var result = element.btn;

console.log(question1);
console.log(question2);
console.log(question3);
console.log(question4);
console.log(question5);



result.addEventListener('click', ()=> {
    for(var i = 0; i < question1.length; i++) {
        if (question1[i].checked) {
            console.log(question1[i].value);
        }
    }
}, false);
result.addEventListener('click', ()=> {
    for(var i = 0; i < question2.length; i++) {
        if (question2[i].checked) {
            console.log(question2[i].value);
        }
    }
}, false);
result.addEventListener('click', ()=> {
    for(var i = 0; i < question3.length; i++) {
        if (question3[i].checked) {
            console.log(question3[i].value);
        }
    }
}, false);
result.addEventListener('click', ()=> {
    for(var i = 0; i < question4.length; i++) {
        if (question4[i].checked) {
            console.log(question4[i].value);
        }
    }
}, false);
result.addEventListener('click', ()=> {
    for(var i = 0; i < question5.length; i++) {
        if (question5[i].checked) {
            console.log(question5[i].value);
        }
    }
}, false);
*/



function getValue() {
    var radioButton = ['q1','q2','q3','q4','q5'];
    var yes = [20,20,20,20,20];
    var no = [0,0,0,0,0];
    var yesScore = 0;
    var noScore = 0;
    for (var i=0; i<radioButton.length; i++) {
        var radios = document.getElementsByName(radioButton[i]);
        for (var j=0; j<radios.length; j++) {
            if (radios[j].checked) {
                var radioValue = radios[j].value;
                if (radioValue == 'YES') {
                    yesScore = yesScore + yes[i];
                } else if (radioValue == 'NO') {
                    noScore = noScore + no[i];
                }
                break;
            }
        }
    }
    if (yesScore == 0) {
        var result = 0
        var comment = '<p>あなたの猫度は0％・・・もしかして犬派・・？</p>'
    } else if (yesScore == 20) {
        var result = 20
        var comment = '<p>あなたの猫度は20％　まだまだだね〜</p>'
    } else if (yesScore == 40) {
        var result = 40
        var comment = '<p>あなたの猫度は40％　ふ〜ん？少しは猫らしくなってきたんじゃない？</p>'
    } else if (yesScore == 60) {
        var result = 60
        var comment = '<p>あなたの猫度は60％　なかなかやるね！猫仲間に入れてあげてもいいよ〜</p>'
    } else if (yesScore == 80) {
        var result = 80
        var comment = '<p>あなたの猫度は80％　君の前世は絶対に猫だった！</p>'
    } else {
        var result = 100
        var comment = 'あなたの猫度は100％　にゃにゃにゃにゃ！これで伝わるよね？'
    }
    
    document.getElementById('result').innerHTML = result + '%!!';
    document.getElementById('comment').innerHTML = comment;
}