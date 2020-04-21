/*
var Question = function(question, answers, rightAnswer) {
    this.question = question;
    this.answers = answers;
    this.rightAnswer = rightAnswer;
};

var girlFriend = new Question('What is my girlfriends name?', ['Sabrina', 'Allison', 'Amanda'], 2);

var videoGame = new Question('What is my favourite Xbox one game?', ['Titanfall 2','Gears 4', 'Halo 5'], '0');

var team = new Question('What is the best hockey team?', ['Habs', 'Avalanche', 'Freaking Leafs!'], '2');

var quiz = [girlFriend, videoGame, team];

//method to print random questions to the console
Question.prototype.randomize = function() {
    var quizQuest = quiz[Math.floor(Math.random() * quiz.length)];
    console.log(quizQuest.question);
    console.log('0: ' + quizQuest.answers[0]);
    console.log('1: ' + quizQuest.answers[1]);
    console.log('2: ' + quizQuest.answers[2])
}


//method to check whether the users answer is correct
Question.prototype.checker = function() {
    var asker = prompt('What is the correct answer? (type the number)');
  
    if(this.question === quiz[0] && asker === girlFriend.rightAnswer) {
        console.log('woo hoo!')
    } else {
        console.log('boo!')
    }

}

// if(Question.prototype.randomize === quiz[0] && asker === girlFriend.rightAnswer) {
//     console.log('woo hoo!')
// } else if(Question.prototype.randomize === quiz[1] && asker === videoGame.rightAnswer) {
//     console.log('Yippee!')
// } else if(Question.prototype.randomize === quiz[2] && asker === team.rightAnswer){
//     console.log('Go Leafs Go!')
// } else {
//     console.log('Boo!')
// }




//console.log(Question.prototype.randomize());

Question.prototype.randomize();
Question.prototype.checker();

*/

//////////////////////////////////////////////////////////////////////
//All of my work is above this line. Below is Jonas' work


(function() {
    function Question(question, answers, correct) {
        this.question = question;
        this.answers = answers;
        this.correct = correct;
    }
    
    Question.prototype.displayQuestion = function (){
        console.log(this.question);
    
        for(var i = 0; i < this.answers.length; i++) {
            console.log(i + ': ' + this.answers[i]);
        }
    }
    
    Question.prototype.checkAnswer = function (ans) {
        if(ans === this.correct) {
            console.log('That\'s the correct answer!!');
        } else {
            console.log('Wrong Answer');
        }
    }
    
    var girlFriend = new Question('What is my girlfriends name?', ['Sabrina', 'Allison', 'Amanda'], 2);
    
    var videoGame = new Question('What is my favourite Xbox one game?', ['Titanfall 2','Gears 4', 'Halo 5'], 0);
    
    var team = new Question('What is the best hockey team?', ['Habs', 'Avalanche', 'Freaking Leafs!'], 2);
    
    var questions = [girlFriend, videoGame, team];
    
    var n = Math.floor(Math.random() * questions.length);
    
    questions[n].displayQuestion();
    
    var  answer = parseInt(prompt('Please select the correct answer.'));
    questions[n].checkAnswer(answer);

})();


