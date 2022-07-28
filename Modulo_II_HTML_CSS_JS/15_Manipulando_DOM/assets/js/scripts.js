let btnMode = document.getElementById("mode-selector")

function switchMode() {
    let body = document.getElementsByTagName("body")[0]
    let text = document.getElementById("page-title")
    let footer = document.getElementsByTagName("footer")[0]
    
    btnMode.classList.toggle("dark-mode")
    body.classList.toggle("dark-mode")
    text.classList.toggle("dark-mode")
    footer.classList.toggle("dark-mode")
    
    if (btnMode.classList.contains("dark-mode")) {
        btnMode.innerHTML = "Light Mode"
    } else {
        btnMode.innerHTML = "Dark Mode"
    }

    if (text.classList.contains("dark-mode")) {
        text.innerHTML = "Ichigo Ichie"
    } else {
        text.innerHTML = "いちごいちえ"
    }   
}

btnMode.addEventListener("click", switchMode)