const questions = document.querySelectorAll(".question-btn");
const allOfThem = document.querySelectorAll(".question");

questions.forEach((item)=>{
    item.addEventListener("click",(event)=>{
        allOfThem.forEach((check)=>{


            if ( check !== item ){
                check.classList.remove("show-text");
                console.log (check)
                console.log (item)
            }
        })
       const question = event.currentTarget.parentElement.parentElement;
       question.classList.toggle("show-text");
    })
})
