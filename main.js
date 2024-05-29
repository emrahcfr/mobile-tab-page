const contents = document.querySelectorAll(".content");
const navBtn = document.querySelectorAll("nav ul li");


navBtn.forEach((btn, idx) => {
    btn.addEventListener("click", () => {
        hideContents()
        hideBtns()

        btn.classList.add("active");
        contents[idx].classList.add("show")

    })
})

function hideContents() {
    contents.forEach((content) => {
        content.classList.remove("show")
    })
}
function hideBtns() {
    navBtn.forEach((item) => {
        item.classList.remove("active")
    })
}