var Question = function(question, answers, rightAnswer) {
    this.question = question;
    this.answers = answers;
    this.rightAnswer = rightAnswer;
};

var girlFriend = new Question('What is my girlfriends name?', ['Sabrina', 'Allison', 'Amanda'], 2);

var videoGame = new Question('What is my favourite Xbox one game?', ['Titanfall 2','Gears 4', 'Halo 5'], 0);

var team = new Question('What is the best hockey team?', ['Habs', 'Avalanche', 'Freaking Leafs!'], 2);

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
    if(asker === 0) {
        console.log('holy moly')
    }
}

team.randomize();
var asker = window.prompt('What is the correct answer? (type the nuumber)');




//console.log(quiz)