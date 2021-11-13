const modalOverlay = document.querySelector(".modal-overlay");
const cards = document.querySelectorAll(".card");

for (let card of cards) {
  console.log(
    card.addEventListener("click", () => {
      modalOverlay.classList.add("active");
    })
  );
}

document.querySelector(".close-modal").addEventListener("click", () => {
  modalOverlay.classList.remove("active");
});

document.querySelector("iframe").src =
  "https://www.youtube.com/embed/zPyg4N7bcHM";
