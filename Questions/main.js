const questions = document.querySelectorAll(".question");

questions.forEach((item)=>{
    item.addEventListener("click",(event)=>{
       const question = event.currentTarget.parentElement.parentElement;
       question.classList.toggle("show-text");
    })
})
