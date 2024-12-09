let button = document.getElementById("link-button");

button.addEventListener("click", (x) => {
let message = document.getElementById("content-paragraph");
message.style.display = "flex";

	setTimeout(() => {
message.style.display = "none";
}, 2000)
})
