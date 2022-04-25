// Store the wallet amount to your local storage with key "amount"
// alert("Hi from index")
let amt = JSON.parse(localStorage.getItem("amount")) || 0
document.getElementById("wallet").textContent = amt

function add_wallet() {
    let sum = +(document.getElementById("wallet").textContent)
    let add_amt = +(document.getElementById("amount").value)
    document.getElementById("wallet").textContent = sum + add_amt
    localStorage.setItem("amount", JSON.stringify(sum+add_amt))    
}
