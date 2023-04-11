// ---------------------- MENU ---------------------- //
const navId = document.getElementById("nav_menu"),
  ToggleBtnId = document.getElementById("toggle_btn"),
  CloseBtnId = document.getElementById("close_btn");

// ------------------- SHOW MENU -------------------- //
ToggleBtnId.addEventListener("click", () => {
  navId.classList.add("show");
});

// ------------------- HIDE MENU ------------------- //
CloseBtnId.addEventListener("click", () => {
  navId.classList.remove("show");
});

// -------------------- REVIEWS --------------------//
const controls = document.querySelectorAll('.control');
let currentCard = 0;
const cards = document.querySelectorAll('.card');
const maxCards = cards.length;

controls.forEach(control => {
    control.addEventListener('click', () => {
        const isLeft = control.classList.contains('arrow-left');
        const isRight = control.classList.contains('arrow-right');
        if (isLeft) {
            currentCard -= 1;
        } else {
            currentCard += 1;
        }

        if (currentCard >= maxCards) {
            currentCard = 0;
        }

        if (currentCard < 0) {
            currentCard = maxCards - 1;
        }
        
        cards.forEach(card => {
            card.classList.remove('current-card');
            cards[currentCard].scrollIntoView({
                inline: "center",
                behavior: "smooth",
            });

            cards[currentCard].classList.add('current-card');
        })
    })
});
