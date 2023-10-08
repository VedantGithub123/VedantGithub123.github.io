// Initializing the variables
var sentences;
var sentences2;
var allWords;
var allWords2;
var occ;
var keys;
var testQuestions;
var score;

// Creating the class
class TestQuestion {
    constructor(sentence, question, answer, id) {
        this.sentence = sentence
        this.question = question
        this.answer = answer
        this.id = id
        this.answered = false
    }
    createQuestion() { // Creating the question in the HTML document
        var questionElement = document.createElement("div")
        questionElement.classList.add("question-element")
        questionElement.id = "id-"+this.id

        var num = document.createElement("h2")
        num.innerText = this.id+1
        questionElement.appendChild(num)

        var question = document.createElement("p")
        question.classList.add("question")
        question.id = "question-id-"+this.id
        question.innerText = this.question
        questionElement.appendChild(question)

        var form = document.createElement("form")
        form.onsubmit = function(){return false}
        var input = document.createElement("input")
        input.classList.add("paragraph-input")
        input.id = "input-id-"+this.id
        input.setAttribute("type", "text")
        input.setAttribute("placeholder", "Type your answer...")
        form.appendChild(input)

        var submit = document.createElement("button")
        submit.classList.add("paragraph-btn")
        submit.type = "button"
        submit.id = "submit-id-"+this.id
        
        var graphicContainer = document.createElement("a")
        var graphic = document.createElement("i")
        graphic.classList.add("fas")
        graphic.classList.add("fa-arrow-right")
        graphicContainer.appendChild(graphic)
        submit.appendChild(graphicContainer)
        form.appendChild(submit)
        questionElement.appendChild(form)
        questionElement.appendChild(document.createElement("br"))

        document.getElementById("quiz").appendChild(questionElement)
        document.getElementById("submit-id-"+this.id).onclick = function(){testQuestions[this.id.split("-").slice(-1)[0]].checkAnswer()}
    }
    checkAnswer() { // Checking the answer
        var ans = document.getElementById("input-id-"+this.id).value
        document.getElementById("question-id-"+this.id).innerHTML = this.question.split("________")[0]+this.answer.italics().bold()+this.question.split("________")[1]
        if (this.answered==false){
            this.answered=true
            if (ans.toUpperCase() === this.answer){
                score+=1
            }else{
            }
        }
        console.log(score)
        document.getElementById("score").innerText = score+" / "+testQuestions.length
    }
}

function getInfo() { // Passes information from the first page to the second
    sentences = JSON.parse(localStorage.getItem("sentences"))
    sentences2 = JSON.parse(localStorage.getItem("sentences2"))
    allWords = JSON.parse(localStorage.getItem("allWords"))
    allWords2 = JSON.parse(localStorage.getItem("allWords2"))
    occ = JSON.parse(localStorage.getItem("occ"))
    keys = JSON.parse(localStorage.getItem("keys"))
    testQuestions = JSON.parse(localStorage.getItem("testQuestions"))

    score = 0

    // Creates the objects again in the second page
    for (var i in testQuestions){
        testQuestions[i] = new TestQuestion(testQuestions[i].sentence, testQuestions[i].question, testQuestions[i].answer, testQuestions[i].id)
    }

    // Creates the questions
    for (var i in testQuestions){
        testQuestions[i].createQuestion()
    }
    document.getElementById("score").innerText = "0 / "+testQuestions.length

}

// This function takes the paragraph and processes it
function processParagraph(){
    // This part splits it into sentences
    sentences = document.getElementById("paragraph-input").value.split(". ")
    sentences2 = []
    for (var i of sentences) {
        sentences2.push(i.split("! "))
    }
    sentences = sentences2.flat(Infinity)
    sentences2 = [];
    for (var i of sentences) {
        sentences2.push(i.split("? "))
    }
    sentences = sentences2.flat(Infinity)

    // This part gets all the important words
    allWords = []
    for (var i of sentences) {
        allWords.push(i.split(" "))
    }

    allWords = allWords.flat(Infinity)
    var temp;
    allWords2 = [];
    for (var i of allWords) {
        temp = i.toString().replaceAll(",", "")
        temp = temp.replaceAll("/", "")
        temp = temp.replaceAll("?", "")
        temp = temp.replaceAll(">", "")
        temp = temp.replaceAll("<", "")
        temp = temp.replaceAll(";", "")
        temp = temp.replaceAll(":", "")
        temp = temp.replaceAll("[", "")
        temp = temp.replaceAll("]", "")
        temp = temp.replaceAll("{", "")
        temp = temp.replaceAll("}", "")
        temp = temp.replaceAll("=", "")
        temp = temp.replaceAll("+", "")
        temp = temp.replaceAll("-", "")
        temp = temp.replaceAll("_", "")
        temp = temp.replaceAll(")", "")
        temp = temp.replaceAll("(", "")
        temp = temp.replaceAll("*", "")
        temp = temp.replaceAll("&", "")
        temp = temp.replaceAll("^", "")
        temp = temp.replaceAll("%", "")
        temp = temp.replaceAll("$", "")
        temp = temp.replaceAll("#", "")
        allWords2.push(temp)
    }
    allWords = []

    for (var i of allWords2) {
        allWords.push(i.toLowerCase())
    }
    allWords2 = []
    var badWords = ['able', 'about', 'above', 'accept', 'across', 'action', 'affect', 'after', 'again', 'agree', 'ahead', 'allow', 'almost', 'alone', 'along', 'also', 'always', 'among', 'amount', 'anyone', 'appear', 'apply', 'around', 'avoid', 'away', 'baby', 'best', 'better', 'bill', 'blue', 'board', 'both', 'break', 'bring', 'call', 'card', 'care', 'carry', 'case', 'chance', 'change', 'charge', 'claim', 'clear', 'close', 'come', 'cost', 'could', 'dark', 'data', 'decide', 'deep', 'door', 'down', 'draw', 'drop', 'each', 'east', 'easy', 'edge', 'else', 'enjoy', 'enough', 'enter', 'entire', 'ever', 'every', 'great', 'group', 'grow', 'guess', 'half', 'hang', 'hard', 'have', 'hear', 'heat', 'help', 'here', 'high', 'hold', 'huge', 'idea', 'inside', 'into', 'item', 'join', 'just', 'keep', 'kind', 'know', 'land', 'last', 'late', 'lead', 'learn', 'least', 'leave', 'left', 'less', 'life', 'like', 'line', 'list', 'live', 'long', 'look', 'lose', 'loss', 'love', 'main', 'make', 'many', 'maybe', 'mean', 'meet', 'might', 'miss', 'month', 'more', 'most', 'move', 'much', 'must', 'near', 'need', 'next', 'nice', 'none', 'note', 'often', 'once', 'only', 'onto', 'open', 'order', 'other', 'over', 'page', 'pain', 'part', 'party', 'pass', 'past', 'pick', 'plan', 'play', 'poor', 'pull', 'push', 'remove', 'rest', 'rich', 'right', 'rise', 'risk', 'road', 'rock', 'role', 'room', 'rule', 'safe', 'same', 'save', 'scene', 'seat', 'seek', 'seem', 'sell', 'send', 'short', 'shot', 'side', 'sign', 'site', 'size', 'some', 'song', 'soon', 'sort', 'star', 'stay', 'step', 'stop', 'such', 'sure', 'take', 'talk', 'task', 'tell', 'term', 'than', 'that', 'them', 'then', 'there', 'these', 'they', 'thing', 'think', 'this', 'those', 'thus', 'tough', 'unit', 'upon', 'very', 'view', 'wait', 'walk', 'wall', 'want', 'wear', 'week', 'well', 'what', 'when', 'where', 'which', 'while', 'white', 'whole', 'whom', 'whose', 'will', 'wish', 'with', 'work', 'yeah', 'your']
    for (var i of allWords) {
        if (!badWords.includes(i)) {
            allWords2.push(i)
        }

    }
    allWords = allWords2.filter(element => element.length >= 4 )

    // This part get the most common works or the key words from the paragraph
    
    occ = {};
    for (var word of allWords) {
        if (occ[word] !== undefined) {
            occ[word] += 1;
        } else {
            occ[word] = 1;
        }
    }
    keys = Object.keys(occ)
    keys.sort((a, b) => occ[b] - occ[a])
    keys = keys.slice(0, (sentences.length / 2) | 0)

    // This part makes the questions
    testQuestions = []
    temp = 0
    for (var i of sentences) {
        for (var j of keys) {
            if (i.toLowerCase().includes(j.toString())) {
                testQuestions.push(new TestQuestion(i.toString().toUpperCase(), i.toString().toUpperCase().replace(j.toString().toUpperCase(), "________"), j.toString().toUpperCase(), temp))
                temp+=1
                break
            }
        }
        keys = keys
        .map(value => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value)
    }

    // This part saves the variables
    localStorage.setItem("sentences", JSON.stringify(sentences))
    localStorage.setItem("sentences2", JSON.stringify(sentences2))
    localStorage.setItem("allWords", JSON.stringify(allWords))
    localStorage.setItem("allWords2", JSON.stringify(allWords2))
    localStorage.setItem("occ", JSON.stringify(occ))
    localStorage.setItem("keys", JSON.stringify(keys))
    localStorage.setItem("testQuestions", JSON.stringify(testQuestions))
}