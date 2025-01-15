let mainFrame = document.querySelector('.main-frame')
let cpuBoxes = document.querySelectorAll('.box')
let boxes = document.querySelectorAll('.user-box')
let result = document.querySelector('.result-area')
let cpuScore = document.querySelector('.system-score')
let userScore = document.querySelector('.user-score')
let btn;
let cpuPoint = 0
let userPoint = 0
boxes.forEach((item)=>{
    item.addEventListener('click',(e)=>{
        makemove(e);
        blockGame();
    })
})

function makemove(elem){
    let userVal = elem.target.dataset.value
    let select = elem.target.parentElement
    select.style.backgroundColor = '#E5D0AC'
    cpuMakeMove(userVal);
}
function cpuMakeMove (elem){
    let cpuMove = Math.floor(Math.random()*3+1)
    if(cpuMove === 1){
        let cpuRock = document.querySelector('.cpu-rock')
        cpuRock.style.backgroundColor = '#E5D0AC'
    }else if(cpuMove === 2){
        let cpuPaper = document.querySelector('.cpu-paper')
        cpuPaper.style.backgroundColor = '#E5D0AC'
    }else if (cpuMove === 3){
        let cpuscissor = document.querySelector('.cpu-scissor')
        cpuscissor.style.backgroundColor = '#E5D0AC'
    }
    calculation(elem ,cpuMove);
}
function calculation (elem , cpu){
    let user = parseInt(elem)
   if(user === cpu){
    result.innerText = 'Its a tie...'
   }
   else if(user === 1 && cpu === 2){
    result.innerText = 'You Win...'
    userPoint = userPoint+1
    cpuPoint = cpuPoint-1
    pointAdd();
   }
   else if(user === 1 && cpu === 3){
    result.innerText = 'You Lost...'
    userPoint = userPoint-1
    cpuPoint = cpuPoint+1
    pointAdd();
   }
   else if(user === 2 && cpu === 1){
    result.innerText = 'You Win...'
    userPoint = userPoint+1
    cpuPoint = cpuPoint-1
    pointAdd();
   }
   else if(user === 2 && cpu === 3){
    result.innerText = 'You Lost...'
    userPoint = userPoint-1
    cpuPoint = cpuPoint+1
    pointAdd();
   }
   else if(user === 3 && cpu === 2){
    result.innerText = 'You Win...'
    userPoint = userPoint+1
    cpuPoint = cpuPoint-1
    pointAdd();
   }
   else if(user === 3 && cpu === 1){
    result.innerText = 'You Lost...'
    userPoint = userPoint-1
    cpuPoint = cpuPoint+1
    pointAdd();
   }
   againBtn();
}

function againBtn (){
    btn = document.createElement('button')
    btn.innerText = 'Again...'
    btn.id = 'btn'
    document.querySelector('.panel').append(btn)
    btn.addEventListener('click',()=>{
        boxes.forEach((item)=>{
            item.style.backgroundColor = '#FEF9E1'
        })
        cpuBoxes.forEach((item)=>{
            item.style.backgroundColor = '#FEF9E1'
        })
        boxes.forEach((item)=>{
            item.removeAttribute('disabled','')
        })
        btn.remove();
    })

}

function blockGame(){
    boxes.forEach((item)=>{
        item.setAttribute('disabled','')
    })
}

function pointAdd (){
    if(cpuPoint < 0){
        cpuPoint = 0
    }
    else if (userPoint < 0){
        userPoint = 0
    }
    cpuScore.innerText = cpuPoint
    userScore.innerText = userPoint
    if(cpuPoint === 3){
        let overMenu = document.createElement('div')
        overMenu.id = 'over-menu'
        overMenu.innerText = 'You Lost'
        mainFrame.append(overMenu)
    }
    else if(userPoint === 3){
        let overMenu = document.createElement('div')
        overMenu.id = 'over-menu'
        overMenu.innerText = 'You Win'
        mainFrame.append(overMenu)
    }
}