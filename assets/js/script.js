function navigationBar() {
    var header = document.getElementById("header");
    if (header.className === "navbar") {
        header.className += " responsive";
    } else {
        header.className = "navbar";
    }
}