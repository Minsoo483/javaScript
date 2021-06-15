function showText(){
    var text = document.getElementById("desc");
    text.style.display = "block";

    var button = document.getElementById("open");
    button.style.display = "none";
}
function hideText(){
    var text = document.getElementById("desc");
    text.style.display = "none";

    var button = document.getElementById("open");
    button.style.display = "block";
}