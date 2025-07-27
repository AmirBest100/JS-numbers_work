//subject : Symmetry OMG!!!
//اعداد قرینه اند یا نه
//-----------------------------------

const p = document.getElementById("p")

const input = document.getElementById("num")

var GOTinput = input.value

const btn = document.getElementById("btn")

btn.addEventListener("click", isPalindrome)

// var enter = null
input.addEventListener("keydown",key)
function key(e) {
    // console.log(e.key)
    if (e.key === "Enter") {
isPalindrome()
    }
}

var reverse = null

function isPalindrome() {
    var GOTinput = input.value
    // console.log(GOTinput);

    if (GOTinput != "") {
       reverse = GOTinput.split("").reverse().join("")
       if (reverse === GOTinput) {
        p.innerHTML = "YES !"
        p.setAttribute("class", "p1")
       }
       else{
        p.innerHTML = "NO !"
        p.setAttribute("class", "p2")
       }
    }
    else{
p.innerHTML = "Empty value !"
p.setAttribute("class", "p")
    }
}
