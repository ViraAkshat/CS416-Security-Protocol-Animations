var modal = document.getElementById("ssl_anim_box");

var btn = document.getElementById("ssl_learn");

var span = document.getElementById("close1");

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if(event.target == modal) {
        modal.style.display = "none";
    }
}