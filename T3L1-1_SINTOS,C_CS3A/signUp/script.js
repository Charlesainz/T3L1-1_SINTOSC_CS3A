
var modal = document.getElementById('id01');


function openModal() {
    modal.style.display = "block";
}


function closeModal() {
    modal.style.display = "none";
}


window.onclick = function(event) {
    if (event.target == modal) {
        closeModal();
    }
}
