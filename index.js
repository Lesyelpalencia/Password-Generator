const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let setPassOneEl = document.getElementById("setpass-one")
let setPassTwoEl = document.getElementById("setpass-two")
let setPassThreeEl = document.getElementById("setpass-three")
let inputEl = document.getElementById("input-pass")
const passLength = 15

function getRandom() {
    let random = Math.floor(Math.random() * characters.length)
    return characters[random]
}

function setPassOne() {
    let passOne = ""
    for (let i=0; i<passLength; i++) {
        passOne += getRandom()
    }
    return passOne
}

function setPassTwo() {
    let passTwo = ""
    for (let i=0; i<passLength; i++) {
        passTwo += getRandom()
    }
    return passTwo
}

function setPassThree() {
    let passThree = ""
    for (let i=0; i<passLength; i++) {
        passThree += getRandom()
    }
    return passThree
}

function generatePass() {
    setPassOneEl.textContent = setPassOne()
    setPassTwoEl.textContent = setPassTwo()
    setPassThreeEl.textContent = setPassThree()
}


// Optional on click copy clipboard
function myFunction() {
    // // setPassOneEl.setSelectionRange(0, 99999); // For mobile devices
  
     // Copy the text inside the text field
    navigator.clipboard.writeText(setPassOne());
  
    // Alert the copied text
    alert("Copied the text: " + setPassOne());
  }
