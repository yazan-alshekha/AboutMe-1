'use strict'

var userName = prompt('What is Your Name?');
console.log(userName);
alert('Your Welcome '+ userName + ' In My Web Page');
 
var ask = confirm('Okay ' +userName+ ' Let\'s Play a Game! I Will Ask You and Your Answer Shuld be Yes or No Y/N');

var question1 = prompt('Did I am smoker or no?!')
var answer1 = question1.toLowerCase();

switch (answer1) {
    case ('yes'):
        alert('You Right '+userName+' I am Smoker');
        break;
    case ('y'):
        alert('You Right '+userName+' I am Smoker');
        break;    
    case ('no'):
        alert('I Hope to stop Smoking Someday, Pray To Me '+userName+' Please!!');
        break;
    case ('n'):
        alert('I Hope to stop Smoking Someday, Pray To Me '+userName+' Please!!');
        break;    
    default:
        alert('Your Answer Should Be Yes or No Y/N !')
        break;
}
var question2 = prompt('Do You think I am a Fat Man?')
var answer2 = question2.toLowerCase();

switch (answer2) {
    case ('yes'):
        alert('no '+userName+' I am not Fat!');
        break;
    case ('y'):
        alert('no '+userName+' I am not Fat!');
        break;    
    case ('no'):
        alert('Yes You Right '+userName+' I am Not fat!');
        break;
    case ('n'):
        alert('Yes You Right '+userName+' I am Not fat!');
        break;    
    default:
        alert('Your Answer Should Be Yes or No Y/N !')
        break;
}

var question3 = prompt('Do You think I Like Tea?')
var answer3 = question3.toLowerCase();

switch (answer3) {
    case ('yes'):
        alert('yes Correct '+userName+' I Like Tea!');
        break;
    case ('y'):
        alert('yes Correct '+userName+' I Like Tea!');
        break;    
    case ('no'):
        alert('No '+userName+' I Like Tea!');
        break;
    case ('n'):
        alert('No '+userName+' I Like Tea!');
        break;    
    default:
        alert('Your Answer Should Be Yes or No Y/N !')
        break;
}

var question4 = prompt('Do you think I am a skilled painter?')
var answer4 = question4.toLowerCase();

switch (answer4) {
    case ('yes'):
        alert('Actually I am Not Good Panter At All '+userName);
        break;
    case ('y'):
        alert('Actually I am Not Good Panter At All '+userName);
        break;    
    case ('no'):
        alert('Yes you Right I am Not Good Panter At All '+userName);
        break;
    case ('n'):
        alert('Yes you Right I am Not Good Panter At All '+userName);
        break;    
    default:
        alert('Your Answer Should Be Yes or No Y/N !')
        break;
}

var question5 = prompt('Do you think I am a good programmer?')
var answer5 = question5.toLowerCase();

switch (answer5) {
    case ('yes'):
        alert('Thank You '+userName+' But I am Still Learning');
        break;
    case ('y'):
        alert('Thank You '+userName+' But I am Still Learning');
        break;    
    case ('no'):
        alert('Okay '+userName+ ' I am Doing My Beast To Be Good Programmer');
        break;
    case ('n'):
        alert('Yes you Right I am Not Good Panter At All '+userName);
        break;    
    default:
        alert('Your Answer Should Be Yes or No Y/N !');
        break;
}

alert('Thank You '+userName+' For Visting My Web Page And Playing With Me, Please Read My Web Page To Know Some Information About Me !');