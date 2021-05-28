const modal = document.getElementById("exitModal");

localStorage.showOnce = "false";

/*
document.addEventListener('mouseout', e => {
    if (!e.toElement && !e.relatedTarget) {
        modal.style.display = "block";
    }
});
*/

const exitEvent = (e) => {
  if (!e.toElement && !e.relatedTarget && e.clientY < 10) {
    localStorage.showOnce = "true";
    document.removeEventListener('mouseout', exitEvent);
    modal.style.display = "block";
  }
};

if (localStorage.showOnce == "false") {
    setTimeout(() => {
        document.addEventListener('mouseout', exitEvent);
    }, 15000);
}

window.onclick = (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
}
