let textarea = document.getElementById("textarea");
function localStorageFeed() {
    localStorage.setItem("text", textarea.value);
}
if (localStorage.getItem("text")) {
    textarea.value = localStorage.getItem("text");
}
textarea.addEventListener("input", localStorageFeed);