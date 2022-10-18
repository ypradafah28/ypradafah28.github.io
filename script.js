const bar = document.querySelector("#bar")
const list = document.querySelector("#list-bar")
const close = document.querySelector("#close")
bar.addEventListener("click",function(){
    list.classList.remove("hidden")
    bar.style.display="none"
    close.style.display = "block"
    close.classList.add("-mt-6")

})

close.addEventListener("click",function(){
    list.classList.add("hidden")
    close.style.display ="none "
    bar.style.display="block"
    bar.classList.add("-mt-6")
})