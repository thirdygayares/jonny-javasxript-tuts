function enter() {
    yourname = document.getElementById("name").value;
    name(yourname);
}

function name(name) {
   document.getElementById("welcome").innerHTML = name;
}