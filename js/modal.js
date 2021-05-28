const modal = document.getElementById("exitModal");

/*
document.addEventListener('mouseout', e => {
    if (!e.toElement && !e.relatedTarget) {
        modal.style.display = "block";
    }
});
*/

const exitEvent = (e) => {
  if (!e.toElement && !e.relatedTarget) {
    document.removeEventListener('mouseout', exitEvent);
    modal.style.display = "block";
  }
};

setTimeout(() => {
    document.addEventListener('mouseout', e => {
        if (!e.toElement && !e.relatedTarget) {
            modal.style.display = "block";
        }
    });

}, 15000);

window.onclick = (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
}
