let start = false;
let level = 0;
let h3 = document.querySelector("h3");
let btnList = ["red","yellow","green","blue"];
let gameSeq = [];
let userSeq = [];
document.addEventListener("keypress", function(){
    if(start===false){
        start = true;
        setTimeout(levelUp,800);
    }
})
function flash(ranBtn){
    let btn = document.querySelector(`.${ranBtn}`);
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash")
    },500);
}
let idx = 0;
function userFlash(){
    this.classList.add("userFlash");
    let btn = this;
    setTimeout(function(){
        btn.classList.remove("userFlash");
    },250);
    let id = btn.getAttribute("id");
    if(id === gameSeq[idx]){
        if(idx==level-1){
            userSeq = [];
            idx = 0;
            setTimeout(levelUp,1000);
        } else{
            userSeq.push(btn);
            idx++;
        }
    } else{
        let body = document.querySelector("body");
        body.classList.add("over");
        setTimeout(function(){
            body.classList.remove("over");
        },200);
        h3.innerHTML = `Game Over! Your score is ${level-1} <br>
                        Press any key to restart`;
        start = false;
        level = 0;
        gameSeq = [];
        userSeq = [];
        idx = 0;
    }
}
function levelUp(){
    level++;
    h3.innerText = `Level ${level}`;
    let ranIdx = Math.floor(Math.random()*4);
    let ranBtn = btnList[ranIdx];
    gameSeq.push(ranBtn);
    flash(ranBtn);
}
for(ele of btnList){
    let btn = document.querySelector(`.${ele}`);
    btn.addEventListener("click",userFlash);
}

