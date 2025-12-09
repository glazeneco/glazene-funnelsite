const openPopupBtn = document.getElementById("button-7bwfrPL-Oa");
const closePopupBtn = document.getElementById("closeLPmodal");
const popupModal = document.getElementById("modal");

openPopupBtn.addEventListener("click", () => {
    popupModal.classList.add("open");
});

closePopupBtn.addEventListener("click", () => {
    popupModal.classList.remove("open");
});

