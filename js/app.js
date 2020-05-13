'use strict'


var score = 0;
var userName = prompt('What is Your Name?');
console.log(userName);
alert('Your Welcome ' + userName + ' In My Web Page');

var ask = confirm('Okay ' + userName + ' Let\'s Play a Game! I Will Ask You and Your Answer Shuld be Yes or No Y/N');

var question1 = prompt('Did I am smoker or no?!')
var answer1 = question1.toLowerCase();

switch (answer1) {
    case ('yes'):
    case ('y'):
        alert('You Right ' + userName + ' I am Smoker');
        score +=1;
        break;
    case ('no'):
    case ('n'):
        alert('I Hope to stop Smoking Someday, Pray To Me ' + userName + ' Please!!');
        break;
    default:
        alert('Your Answer Should Be Yes or No Y/N !')
        break;    
    }



var question2 = prompt('Do You think I am a Fat Man?')
var answer2 = question2.toLowerCase();

switch (answer2) {
    case ('yes'):
    case ('y'):
        alert('no ' + userName + ' I am not Fat!');
        break;
    case ('no'):
    case ('n'):
        alert('Yes You Right ' + userName + ' I am Not fat!');
        score +=1;
        break;
    default:
        alert('Your Answer Should Be Yes or No Y/N !')
        break;
}

var question3 = prompt('Do You think I Like Tea?')
var answer3 = question3.toLowerCase();

switch (answer3) {
    case ('yes'):
    case ('y'):
        alert('yes Correct ' + userName + ' I Like Tea!');
        score +=1;
        break;
    case ('no'):
    case ('n'):
        alert('No ' + userName + ' I Like Tea!');
        break;
    default:
        alert('Your Answer Should Be Yes or No Y/N !')
        break;
}

var question4 = prompt('Do you think I am a skilled painter?')
var answer4 = question4.toLowerCase();

switch (answer4) {
    case ('yes'):
    case ('y'):
        alert('Actually I am Not Good Panter At All ' + userName);
        break;
    case ('no'):
    case ('n'):
        alert('Yes you Right I am Not Good Panter At All ' + userName);
        score +=1;
        break;
    default:
        alert('Your Answer Should Be Yes or No Y/N !')
        break;
}

var question5 = prompt('Do you think I am a good programmer?')
var answer5 = question5.toLowerCase();

switch (answer5) {
    case ('yes'):
    case ('y'):
        alert('Thank You ' + userName + ' I hope that');
        score +=1;
        break;
    case ('no'):
    case ('n'):
        alert('Okay ' + userName + ' I am Doing My Beast To Be Good Programmer');
        break;
    default:
        alert('Your Answer Should Be Yes or No Y/N !');
        break;
}

var question6 = prompt('How Old Am I ?');
var answer6 = question6;
var myAge = 25;
for (var i = 0; i < 4 ; i++) {
    if(answer6 == myAge){
        alert('graet '+userName+' I am 25 years old');
        score +=1;
        break;    
}else if(answer6 < myAge){
   answer6 = prompt('no '+userName+' to low');
}else if(answer6 > myAge){
    answer6 = prompt('no '+userName+' too old');
}
}
if (score == false){alert(userName+' My Age Is 25');}


/*
"Example For me"
if (answer6 == myAge) {
    alert('Great ' + userName + ' I am 25 years old');
    score +=1;
} else {
  //  var newAnswer = prompt('try again');
    for (var i = 0; i < 3; i++) {
        if (newAnswer == myAge) {
            alert('Great ' + userName + ' I am 25 years old');
            score +=1;
            i += 4;
        }else if(newAnswer < myAge){
            alert('too low');
        }else if(newAnswer > myAge){
            alert('too old');
        }
    }
}



var programingLangusges = ['html', 'css', 'javascript'];
for (var i = 0; i < 6; i++) {
    var question7 = prompt('Which programming language do you think I used to develop this web site?');
    var t = programingLangusges.includes(question7);
    if(t == true){
        alert('Good Answer '+userName+' I used '+programingLangusges.join(' and ')+' To Produce My web Page');
        score +=1;
        i +=6;
    }
}
if(score == 0){alert('No '+userName+' I Used '+programingLangusges.join(' and '))}

alert(userName+' you got '+score+' out of 7');

alert('Thank You ' + userName + ' For Visting My Web Page And Playing With Me, Please Read My Web Page To Know Some Information About Me !');