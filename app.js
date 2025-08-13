const questions=[{
    'ques' : 'Which of the follwing is a markup language?',
    'a' :'HTML',
    'b' :'CSS',
    'c' :'Javascript',
    'd' :'PHP',
    'correct' : 'a',
},
{ 
    'ques' : 'What year was Javascript launched?',
    'a' : '1996',
    'b' :'1995',
    'c' :'1994',
    'd' :'none of the above',
    'correct' : 'b',

},
{
    'ques' : 'What does CSS stands for?',
    'a' :'Hyper Text Markup Language',
    'b' :'Cascading Style Sheet',
    'c' :'Jason Object Notation',
    'd' :'Internet Service Provider',
    'correct' : 'b',
},
{
        'ques' : 'Which HTML tag is used to create a hyperlink?',
        'a' : '<a>',
        'b' : '<link>',
        'c' : '<href>',
        'd' : '<hyper>',
        'correct' : 'a',
    },
    {
        'ques' : 'Inside which HTML element do we put JavaScript code?',
        'a' : '<javascript>',
        'b' : '<script>',
        'c' : '<js>',
        'd' : '<code>',
        'correct' : 'b',
    }
]
let index=0;
let total = questions.length;
let right=0;
wrong=0;

const quesBox=document.getElementById("quesBox")
const optionInputs=document.querySelectorAll('.option')
const loadQuestion =() =>{
    if(index === total){
        return endQuiz()
    }
    reset()

    const data = questions[index]
    console.log(data)
    quesBox.innerText = `${ index+1}) ${data.ques}`;
    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;
}
const submitQuiz=()=>{
    const data=questions[index];
    const ans=getAnswer()
    if (ans===data.correct){
        right++;
    }
    else{
        wrong++;
    }
    index++;
    loadQuestion();
    return;
}
const getAnswer=()=>{
    let answer;
    optionInputs.forEach(
        (input)=>{
            if(input.checked){
            answer= input.value;
            }
        }
    )
    return answer;
}
const reset=()=>{
    optionInputs.forEach(
        (input)=>{
            input.checked=false;
        }
    )
}
const endQuiz = () => {
   document.getElementById("box").innerHTML=`
   <div style = "text-align: center">
        <h3> Thank you for playing the quiz </h3> 
        <h2> ${right} / ${total} are correct </h2>
</div>
    `;
 }

loadQuestion(); 