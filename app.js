// Function to ask a question and return the answer
function questions(question) {
    let answer = prompt(question + " (Yes/No)");
    if (answer === null || answer.trim() === '') {
        return "invalid";
    }
    return answer.toLowerCase();
}

// Function to start the quiz, ask questions, and log answers
function answer() {
    const Allquestions = [
        "Do you like coding?",
        "Is JavaScript your favorite language?",
        "Do you want to learn more about programming?"
    ];
  
    for (let i = 0; i < Allquestions.length; i++) {
        const answer = questions(Allquestions[i]);
        console.log( answer);
    }
}

answer();

var username=prompt("Enter your name")
var usergender=prompt("Enter you gender")
var age=prompt("Enter your Age")
if (age<=0){
    alert("the age can't be less than or equal zero")
}
confirm ("Are you sure you want skip the welcome message?")
if(usergender=="Male"){
    alert("Welcome MR. " + username + "your Age is " + age)

}else if (usergender=="Female"){
    alert("Welcome Ms. " + username + "your Age is " + age)  
}else{
    alert("Welcome " + username + "your Age is " + age)   
}
