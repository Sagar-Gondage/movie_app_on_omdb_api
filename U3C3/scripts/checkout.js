// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time

let amt = JSON.parse(localStorage.getItem("amount")) || 0;
document.getElementById("wallet").textContent = +amt;

let data1 = JSON.parse(localStorage.getItem("movie"))

console.log(data1)

data1.map(function(elem){

    let box = document.createElement("div")
    
    let title = document.createElement("h3")
    title.textContent = elem.title
    
    let image = document.createElement("img")
    image.src = elem.Poster
    
    box.append(title, image)
    
    document.getElementById("movie").append(box)
})  

// console.log(amt)
function confirm(){
    let seat_amt = document.getElementById("number_of_seats").value
    // console.log("Hi from check")
    // console.log(+(seat_amt))
    // console.log(seat_amt * 100)
    if(seat_amt * 100 > amt){
        alert("Insufficient Balance !")
    } else {
        user_name = document.getElementById("user_name").value
        number_of_seats = document.getElementById("number_of_seats").value
        if(user_name.length > 0 && number_of_seats.length > 0 && seat_amt * 100 <= amt){
            final_amt = amt - seat_amt * 100
            document.getElementById("wallet").textContent = final_amt
            
            localStorage.setItem("amount", JSON.stringify(final_amt))
            alert("Booking Successful!")
            window.location.reload()
        }
    }
}
