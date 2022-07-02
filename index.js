// let cardsNumber;

// function validateCardsNumbers(cardsNumber) {
//    const greater0 = cardsNumber > 0;

//    if (!greater0) {
//       throw new Error("Must be a number greater than 0");
//    }
// }

// function getCardsNumber() {
//    const cardNum = prompt("Introduce cards number", 5);
//    try {
//       validateCardsNumbers(cardNum);
//       cardsNumber = Number(cardNum);
//    } catch (error) {
//       alert(error);
//       location.reload()
//    }
// }
// getCardsNumber();

let cardsNumber = 5;
const body = document.querySelector("body");
let container;

function createContainer() {
   container = document.createElement("div");
   container.classList.add("container");
   body.appendChild(container);
}
function createCard(id) {
   const card = document.createElement("a");
   card.classList.add("card");
   card.href = "./bim-model.html?id=" + id;
   container.appendChild(card);

   function cardTitle(id) {
      const cardTitle = document.createElement("h1");
      cardTitle.classList.add("card-title");
      cardTitle.textContent = "Project " + id;
      card.appendChild(cardTitle);
   }
   cardTitle(id);

   function cardImage(id) {
      const cardImage = document.createElement("img");
      cardImage.classList.add("card-image");
      cardImage.src = "./Resources/building3d-" + id + ".jpg";
      card.appendChild(cardImage);
   }
   cardImage(id);
}

function createCards() {
   if (cardsNumber < 6) {
      for (let i = 1; i < cardsNumber + 1; i++) {
         createCard(i);
      }
   } else {
      for (let i = 1; i < Math.min(cardsNumber, 5) + 1; i++) {
         createCard(i);
      }
      for (let i = 6; i < cardsNumber + 1; i++) {
         createCard("generic");
      }
   }
}

// function createCards() {
//    for (let i = 1; i < cardsNumber + 1; i++) {
//       createCard(i);
//    }
// }

createContainer();
createCards();
