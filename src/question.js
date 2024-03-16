class Question {
    constructor (text, choices, answer, difficulty){
        this.text = text; 
        this.choices = choices; 
        this.answer = answer;
        this.difficulty = difficulty;
    }
    shuffleChoices() {
        for (let i = this.choices.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1)); 
            [this.choices[i], this.choices[j]] = [this.choices[j], this.choices[i]]; 
        }
        return this.choices;
    }
    filterQuestionsByDifficulty() {
        let difficulty1 = this.difficulty.filter((el) => (el === 1))
        return difficulty1;
    }
}
const questions = [
    new Question("What is 2 + 2?", ["3", "4", "5", "6"], "4", 1),
    new Question("What is the capital of France?", ["Miami", "Paris", "Oslo", "Rome"], "Paris", 1),
    new Question("Who created JavaScript?", ["Plato", "Brendan Eich", "Lea Verou", "Bill Gates"], "Brendan Eich", 2),
    new Question("What is the mass–energy equivalence equation?", ["E = mc^2", "E = m*c^2", "E = m*c^3", "E = m*c"], "E = mc^2", 3),
    // Add more questions here
  ];

console.log(questions.shuffleChoices());