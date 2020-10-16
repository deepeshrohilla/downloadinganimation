var btn = document.querySelector(".btn")
var loading_box = document.querySelector(".loading-box")
var load_bar = document.querySelector("#load-bar")
var success = document.querySelector(".success")

// on button click animation
btn.addEventListener("click", () => {
    loading_box.style.bottom = "0"
    loading_box.style.height = "100%"
    load_bar.style.width = "100%"
    success.style.bottom = "0"
    success.style.height = "100%"
})