var Question = function(question, answers, rightAnswer) {
    this.question = question;
    this.answers = answers;
    this.rightAnswer = rightAnswer;
};

var girlFriend = new Question('What is my girlfriends name?', ['Leslie', 'Allison', 'Amanda'], 2);

var videoGame = new Question('What is my favourite Xbox one game?', ['Titanfall 2','Gears 4', 'Halo 5'], 0);

var team = new Question('What is the best hockey team?', ['Habs', 'Avalanche', 'Freaking Leafs!'], 2);

var quiz = [girlFriend, videoGame, team];

Question.prototype.randomize = function() {
    
}


console.log(quiz)