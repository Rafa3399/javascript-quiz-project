class Question {
    constructor (text, choices, answer, difficulty){
        this.text = text; 
        this.choices = choices; 
        this.answer = answer;
        this.difficulty = difficulty;
    }
    shuffleChoices(){
        let randomArr = [];
        for(let i=0 ; i< this.choices.length ; i++){
            let shuffle = Math.floor(Math.random() * this.choices.length); 
            randomArr[shuffle] = this.choices[i]
    }
    return randomArr;
}
}
let question1 = new Question ('How are you?',['good', 'bad', 'gg'], 'good', 1);
console.log(question1.shuffleChoices());d