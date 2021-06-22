const $classBtnGroup = document.querySelectorAll(".btn-group")[0];
const $classBtnList = $classBtnGroup.querySelectorAll("button");
let prevClassBtn = $classBtnList[0];

const $quizBtnGroup =  document.querySelectorAll(".btn-group")[1];
const $quizBtnList = $quizBtnGroup.querySelectorAll("button");
let prevQuizBtn = $quizBtnList[0];

export function init() {
    setClassBtnEvent();
    setQuizBtnEvent();
}

function setClassBtnEvent() {
    for (const btn of $classBtnList) {
        btn.addEventListener("click",(event)=>{
            prevClassBtn.classList.remove("active");    
            event.target.classList.add("active");
            prevClassBtn = event.target;
            console.log(event.target.innerText);
        });
    }
}

function setQuizBtnEvent() {
    for (const btn of $quizBtnList) {
        btn.addEventListener("click",(event)=>{
            prevQuizBtn.classList.remove("active");    
            event.target.classList.add("active");
            prevQuizBtn = event.target;
        });
    }
}