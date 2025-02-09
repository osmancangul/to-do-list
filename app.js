let btn = document.getElementById("btn");
let input = document.getElementById("giris");
let ul = document.querySelector(".liste");

btn.addEventListener("click", function() {

    if (input.value.trim() !== "") {
        let li = document.createElement("li");
        ul.appendChild(li); 
        li.textContent = input.value;
        input.value = "";
    }
})
