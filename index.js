function sayHi() {
    alert("Hello")
}

function greet() {
    alert ("Aloha")
}

// let root = document.getElementById("root")

// root.onclick = greet

// root.addEventListener("click", function(event) {
//     alert("This event happened")
// })

let alerter = document.querySelector("#alerter")

alerter.addEventListener("click", function(event) {
    alert("I was clicked!")
})

let someButton = document.querySelector(".someButton")

someButton.addEventListener("click", function(event){
    console.log("some button was clicked")
    event.stopPropagation()
})

let form = document.querySelector("form")

let userInput = form.querySelector("input")

let list = document.querySelector("ul")

let item1 = document.createElement("li")

item1.innerText = "Aloha"

list.appendChild(item1)

form.addEventListener("submit", function(e){
    e.preventDefault()
    let text = userInput.value
    let item = document.createElement("li")
    item.innerText = text
    list.appendChild(item)
    

    console.log("a message")
})