//Questions and Answers
var questions = [
    ["What instrument do you play?",["Piano","MC"],["Violin","MC"],["Eletric Guitar","CR"],["Boomwhacker","CR"],["Grass","PBS"]],
    ["What do you like to draw?",["Happy Elves","PBS"],["Educational Content","PBS"],["Realistic Flowers","MC"],["Sharp Objects","CR"]],
    ["What is your favorite color?",["Blue","NO"],["Green","PBS"],["Black","CR"],["Red","CR"],["Yellow or Orange","MC"]],
    ["What is your favorite book genre?",["Fantasy","NO"],["Picture Books","CR"],["Realistic Fiction","MC"],["Poetry","PBS"]],
    ["What is your favorite type of toy?",["Action Figures","CR"],["Stuffed Animals","MC"],["Rocks","PBS"],["Imagination","PBS"]],
    ["What is your favorite show?",["Khan Academy","PBS"],["Jimmy Neutron","PBS"],["SpongeBob SquarePants","CR"],["Mr. Rogers Neighborhood","MC"]],
    ["What is your favorite food?",["Gummy Worms","CR"],["Toast with Butter","NO"],["Lunchables","CR"],["Sandwiches","MC"],["Miscellaneous Backyard Treats","PBS"]],
    ["What is your favorite medium of expression?",["Art","NO"],["Music","MC"],["Puppetry","PBS"],["Throwing Rocks at Windows","CR"]],
    ["What is your favorite type of music?",["Nature","PBS"],["Classical","MC"],["Heavy Metal","CR"],["Rock","NO"]],
];

//Dictionary to see how many points each type gives
var typeDict = {
    "MC": 2,
    "NO": 1,
    "CR": 0,
    "PBS": 2.1
}

//Creating the page
var quizContents = document.getElementById("quizContents");
var bodyContents = document.getElementById("bodyContents");
for(var i = 0; i < questions.length; i++) {
    var question = document.createElement("h2");
    question.innerHTML = questions[i][0];
    
    var space = document.createElement("br");
    var form = document.createElement("form");
    
    quizContents.appendChild(question);
    quizContents.appendChild(form);

    for(var a = 1; a < questions[i].length; a++) {
        var answer = document.createElement("input");
        answer.type = "radio";
        answer.name = questions[i];
        answer.value = questions[i][a][1];

        var label = document.createElement("label");
        var space = document.createElement("br");
        label.innerHTML = questions[i][a][0];
        label.appendChild(answer);
        form.appendChild(label);
        form.appendChild(space);
    }

    quizContents.appendChild(space);
}

//Add up all the points and check what type they are
function TypeFinder() {
    var total = 0;

    for(var i = 0; i < questions.length; i++) {
        var name = document.getElementsByName(questions[i]);

        for(var a = 0; a < name.length; a++) {
            if(name[a].checked) {
                total += typeDict[name[a].value];
            }
        }
    }
    total /= questions.length;
    
    bodyContents.remove(bodyContents);

    var mainText = document.createElement("h1");
    var captionText = document.createElement("p");

    if(total <= 0.5) {
        mainText.innerHTML = "You're crazy";
        captionText.innerHTML = "You are the crazy cool kid, many people see you as the popular kid, whether or not you are kind. But one thing is for certain, you like the extreme.";
    }
    else if(total > 0.5 && total < 1.5) {
        mainText.innerHTML = "You're the average joe";
        captionText.innerHTML = "You may be pretty average, but what truly matters is that there is nothing special about you.";
    }
    else if(total >= 1.5 && total < 2.075) {
        mainText.innerHTML = "You're a model citizen";
        captionText.innerHTML = "Even though you aren't the traditional disney cool kid, everyone is still lining up to be your friend. You have a dashing personality and are able to have real emotions, unlike some other cool kids.";
    }
    else if(total >= 2.075) {
        mainText.innerHTML = "You are a PBS cool kid";
        captionText.innerHTML = "While some people may see you as the weird kid that likes to lick rocks, you are truly a rare breed, and that makes you special. Even though you were probably homeschooled and have little to no friends besides the toad next door, you have a stunning imagination and will probably write the next award-winning thesaurus.";
    }
    document.body.appendChild(mainText);
    document.body.appendChild(captionText);

    console.log(total);
}