const p = document.getElementById("p")
const inp = document.getElementById("inp")
const btn = document.getElementById("btn")
// let left = (inp.value) % 2
// let b = 0
btn.addEventListener("click", () => {
    let got = parseInt(inp.value)
    if (got <= 1) {
        p.innerHTML = "no!"
        return;
    }
    
        for (let a = 2; a < got; a++) {

            if (got % a == 0) {
                p.innerHTML = "no!"; 
                return;
            }
        }
        p.innerHTML = "yes!";
    
})