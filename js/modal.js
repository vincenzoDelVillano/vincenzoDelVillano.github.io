const modal = document.getElementById("exitModal");

const span = document.getElementsByClassName("close")[0];

document.addEventListener('mouseout', e => {
    if (!e.toElement && !e.relatedTarget) {
        modal.style.display = "block";
    }
});

const exitEvent = (e) => {
  if (!e.toElement && !e.relatedTarget) {
    document.removeEventListener('mouseout', exitEvent);
    modal.style.display = "block";
  }
};

setTimeout(() => {
    document.addEventListener('mouseout', exitEvent);
}, 1000);

span.onclick = () => {
  modal.style.display = "none";
}

window.onclick = (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
}
