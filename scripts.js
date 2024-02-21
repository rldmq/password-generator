const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let theme = "dark"

function themeChange(){
    const body = document.querySelector('body')
    const motto = document.querySelector('.motto')
    const textStandard = document.querySelector('.text-standard')
    const border = document.querySelectorAll('.border')
    const themeButton = document.querySelector('#theme')
    const labels = document.querySelectorAll('label')

    if(theme === "dark"){
        theme = "light"
        body.style.backgroundColor = "#ECFDF5"
        motto.style.color = "#2B283A"
        textStandard.style.color = "#6B7280"
        themeButton.textContent = "🌛"
        themeButton.style.background = "#1F2937"
        

        for(i = 0; i < border.length; i++){
            border[i].style.borderTop = "2px solid #D5D4D8"
        }

        for(i = 0; i < labels.length; i++){
            labels[i].style.color = "#2B283A"
        }
    }else{
        theme = "dark"
        body.style.backgroundColor = "#1F2937"
        motto.style.color = "white"
        textStandard.style.color = "#D5D4D8"
        themeButton.textContent = "🌞"
        themeButton.style.background = "#ECFDF5"

        for(i = 0; i < border.length; i++){
            border[i].style.borderTop = "2px solid #2F3E53"
        }

        for(i = 0; i < labels.length; i++){
            labels[i].style.color = "white"
        }
    }
    
}

function generatePassword(){
    const passOneEl = document.getElementById("pass-one")
    const passTwoEl = document.getElementById("pass-two")

    const length = document.getElementById('length').value
    const numbers = document.getElementById('numbers').checked
    const symbols = document.getElementById('symbols').checked

    let passOne = ""
    let passTwo = ""

    let charSet = [...characters]

    if(!numbers && !symbols){
        charSet = charSet.slice(0,52)
    }else if(!symbols){
        charSet = charSet.slice(0,62)
    }else if(!numbers){
        charSet.splice(52,10)
    }

    for(let i = 0; i < length; i++){
        passOne += charSet[Math.floor(Math.random()*charSet.length)]
        passTwo += charSet[Math.floor(Math.random()*charSet.length)]
    }

    passOneEl.textContent = passOne
    passTwoEl.textContent = passTwo
}

function copyPassword(e){
    const passEl = e.target.parentNode
    const password = passEl.firstChild.textContent
    navigator.clipboard.writeText(password)

    passEl.style.border = "1px solid #10B981"

    setTimeout(()=>{
        passEl.style.border = "none"
    }, 100)
}

