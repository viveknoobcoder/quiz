
    const quizData = [{
        question: "Which of the following is a client site language?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Cascading Style Sheet",
        c: "Jason Object Notation",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
    {
        question: "What does CSS stands for?",
        a: "Hypertext Markup Language",
        b: "Cascading Style Sheet",
        c: "Jason Object Notation",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "b",
    },
    {
        question: "Who is greatest finisher in internaitonl?",
        a: "Virat Kohli",
        b: "MIcheal Bevan",
        c: "Lance Klusner",
        d: "Dhoni",
        correct: "b",
    },
    {
        question: "Who is goat bowler?",
        a: "Starc",
        b: "Akram",
        c: " MURALI ",
        d: "Zaheeer khan",
        correct: "b",
    }
    ];
    
    
    
    
    const start_btn = document.querySelector('.start_btn button');
    const info_box = document.querySelector('.info_box');
    
    const continue_btn = info_box.querySelector('.buttons');
    const quiz_box = document.querySelector('.quiz_box');
    
    let main = document.getElementById("main")
    
    
    //If Start Quiz Button Clicked
    start_btn.onclick = () => {
      info_box.classList.add("activeInfo");  //show the info box
      
    }
    
    
    
    //If Continue Button Clicked
    continue_btn.onclick = () => {
      info_box.classList.remove("activeInfo");  //hide the info box
      start_btn.classList.add("startdel")
       // quiz_box.classList.add("activeQuiz");  //show the quiz box 
      
    
    
       main.classList.replace("mainly", "main")
        timer = 15; // Reset the timer to 15 seconds
    
        
      
    }
    
    
    
    
    
    let index = 0;
    let correct = 0,
        incorrect = 0,
        total = quizData.length;
    let questionBox = document.getElementById("questionBox");
    let allInputs = document.querySelectorAll("input[type='radio']")
    
    let selectedAnswer = null; 
    
    
    
    
    const loadQuestion = () => {
        if (total === index) {
            return quizEnd()
            
        }
        reset()
        const data = quizData[index]
        questionBox.innerHTML = `${index + 1}) ${data.question}`
        allInputs[0].nextElementSibling.innerText = data.a
        allInputs[1].nextElementSibling.innerText = data.b
        allInputs[2].nextElementSibling.innerText = data.c
        allInputs[3].nextElementSibling.innerText = data.d
    
    
        selectedAnswer = getAnswer();
        clearInterval(inti);
        timer = 15;
        inti = setInterval(minus, 1000);
        selectedAnswer = getAnswer();
    }
    
    document.querySelector("#submit").addEventListener(
        "click",
        function () {
            const data = quizData[index]
            const ans = getAnswer()
            if (ans === data.correct) {
                correct++;
            } else {
                incorrect++;
            }
            index++;
            loadQuestion();
    
    
        }
    )
    
    let getAnswer = () => {
        let ans;
        allInputs.forEach(
            (inputEl) => {
                if (inputEl.checked) {
                    ans = inputEl.value;
                }
            }
        )
        return ans;
    }
    
    const reset = () =>
        allInputs.forEach(
            (inputEl) => {
                inputEl.checked = false;
            }
        )
    
    
    
    
    
    const quizEnd = () => {
        // console.log(document.getElementsByClassName("container"));
        
        document.getElementById("jumba").innerHTML = `
                <div class="col">
                    <h3 class="w-100"> Hii, you've scored ${correct} / ${total} </h3>
                    <button onClick="show()" > SEE your Question and Answers </button>
                </div>
            `
    }
    
    
    
    
    
    let timer = 03;
    
    function minus() {
        timer--;
        document.getElementById('timer').innerText = timer;
        if (timer === 00) {
            clearInterval(inti)
            index++;
            loadQuestion()
        }
    
    
    
    
    
    }
    
    let inti = setInterval(minus, 1500);
    
    
    
    
    loadQuestion(index);
    
    
    function show() {
        
    
        let newer = document.getElementById('newer');
        newer.classList.replace('new', 'change');
    
    
    
        if (selectedAnswer) {
                    document.querySelector(`input[value="${selectedAnswer}"]`).nextElementSibling.classList.add("selected-answer");
                }
      
    }
    
    const quizContainer = document.getElementById("newer");
    
            // Create a new ordered list
            const ol = document.createElement("ol");
    
            // Loop through the quiz questions
            quizData.forEach((questionObj, index) => {
                // Create a list item for the question
                const li = document.createElement("li");
    
                // Set the innerHTML for the list item with the question and options
                li.innerHTML = `
                    <p>${questionObj.question}</p>
                    <ol type="a">
                        <li ${questionObj.selected === 'a' ? 'class="selected-answer"' : (questionObj.correct === 'a' ? 'class="correct-answer"' : '')}>${questionObj.a}</li>
                        <li ${questionObj.selected === 'b' ? 'class="selected-answer"' : (questionObj.correct === 'b' ? 'class="correct-answer"' : '')}>${questionObj.b}</li>
                        <li ${questionObj.selected === 'c' ? 'class="selected-answer"' : (questionObj.correct === 'c' ? 'class="correct-answer"' : '')}>${questionObj.c}</li>
                        <li ${questionObj.selected === 'd' ? 'class="selected-answer"' : (questionObj.correct === 'd' ? 'class="correct-answer"' : '')}>${questionObj.d}</li>
                    </ol>
                `;
    
                // Append the list item to the ordered list
                ol.appendChild(li);
            });
    
            // Append the ordered list to the quiz container
            quizContainer.appendChild(ol);
    
    