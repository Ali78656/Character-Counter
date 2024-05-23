let textareaE= document.querySelector("textarea");
let totalE=document.querySelector(".total");
let remainingE=document.querySelector(".remaining");




let totalCh=0;
let remainingCh=50;
const typingGame = (e) => {
    if( remainingCh === 0)
        {
            return ;
        }
    let inputText = e.target.value;  
    totalCh= inputText.length;
    remainingCh= 50-totalCh;


    totalE.innerHTML=totalCh;
    remainingE.innerHTML=remainingCh;
};
textareaE.addEventListener("keyup",typingGame);