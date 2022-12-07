const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");

const btnOpenModal = document.querySelectorAll(".show-modal");
// console.log(btnOpenModal);

const OpenModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

for (let i = 0; i < btnOpenModal.length; i++) {
  btnOpenModal[i].addEventListener("click", OpenModal);

  const closeModal = function () {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
  };

  btnCloseModal.addEventListener("click", closeModal);

  overlay.addEventListener("click", closeModal);

  document.addEventListener("keydown", function (e) {
    // console.log("A key was pressed ");
    console.log(e.key);

    if (e.key === "Escape" && !modal.classList.contains("hidden")) {
      // if (!modal.classList.contains("hidden"))
      // if the modal does not contain the hidden class then close the modal
      closeModal();
    }
  });
}
