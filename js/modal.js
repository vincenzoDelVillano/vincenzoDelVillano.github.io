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
  if (!e.toElement && !e.relatedTarget) {
    localStorage.showOnce = "true";
    document.removeEventListener('mouseout', exitEvent);
    modal.style.display = "none";
  }
};

if (localStorage.showOnce == "false") {
    setTimeout(() => {
        document.addEventListener('mouseout', e => {
            if (!e.toElement && !e.relatedTarget) {
                modal.style.display = "block";
            }
        });

    }, 15000);
}

window.onclick = (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
}
