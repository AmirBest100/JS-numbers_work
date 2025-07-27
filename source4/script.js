const p = document.getElementById("p")
const inp = document.getElementById("inp")
const btn = document.getElementById("btn")

function is_prime(X) {
    if (X <= 1)return false ;
    for (let i = 2; i <X; i++) {
        if (X % i === 0)return false ;
    }
    return true;
}

// inp.addEventListener("keydown",key)
// function key(e) {
//     // console.log(e.key)
//     if (e.key === "Space") {
// is_prime(next)
//     }
// }

btn.addEventListener("click", ()=>{
    let got = parseInt(inp.value);
    let next = got + 1;
    
    while (!is_prime(next)) {
        next ++
        //هنگامی که در حلقه به جواب "false" برسیم حلقه متوقف میشود !!!
    }
p.innerHTML= `Next prime is: ${next}`;
//این نوع نوشتن از + "" جلوگیری میکند و در واقع همان کار را میکند
})



//===--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// let next = 0; // مقدار اولیه

// inp.addEventListener("keydown", key);

// function key(e) {
//     if (e.key === "Space") {
//         if (next === 0) {
//             next = parseInt(inp.value) || 1; // مقدار اولیه از ورودی
//         }
        
//         next++; // حرکت به عدد بعدی
//         while (!isPrime(next)) {
//             next++;
//         }

//         console.log(`Next prime is: ${next}`); // چاپ عدد اول بعدی در کنسول
//     }
// }

// function isPrime(num) {
//     if (num <= 1) return false;
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i === 0) return false;
//     }
//     return true;
// }
