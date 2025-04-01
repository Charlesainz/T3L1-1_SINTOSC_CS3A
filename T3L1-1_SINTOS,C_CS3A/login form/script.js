// Get the modal
var modal = document.getElementById('id01');

// Show the modal
function showModal() {
    modal.style.display = "block";
}

// Hide the modal
function hideModal() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        hideModal();
    }
}
