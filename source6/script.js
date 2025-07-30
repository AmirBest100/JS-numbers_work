const p = document.querySelector("p")
const btn = document.getElementById("btn")
const inp = document.querySelector(".inp input")

inp.addEventListener("keydown", key_)
btn.addEventListener("click", counter)

function counter() {
    let value = inp.value
    let A = value.split("")
    if (A.length < 2) {
        let B = `your text length is ${A.length} digit`
        p.innerHTML = B
    }
    else {
        let B = `your text length is ${A.length} digits`
        p.innerHTML = B
    }
}
function key_(x) {
    if (x.key === "Enter") {
        counter()
    }
}