// import { getListValue } from "./listFridgeService";

const userInputField = document.querySelector("#productInput");
const buttonAdd = document.querySelector("#addButton");
const fridgeLitValue = document.querySelector("#productList");
const dishTitleInput = document.querySelector("#dishTitle");
const productName = document.querySelector("#productName");

const errorModal = document.querySelector("#errorModal");
const errorMessage = document.querySelector("#errorMessage");
const closeModalBtn = document.querySelector("#closeModalBtn");

closeModalBtn.addEventListener("click", () => {
  // отслеживает клик по кнопке и закрывает модальное окно;
  errorModal.close();
});

buttonAdd.addEventListener("click", (e) => {
  e.preventDefault();
  try {
    if (!userInputField.value || !userInputField.value.trim()) {
      throw new Error("The name of the product is required!");
    }
    const UserInputFieldValue = userInputField.value.trim();
    const newLi = document.createElement("li");
    newLi.textContent = UserInputFieldValue;
    fridgeLitValue.append(newLi);
    userInputField.value = "";

    userInputField.focus(); //снова делаем активным поле ввода, чтобы пользователь не нажимал повторно
  } catch (error) {
    // В случае ЛЮБОЙ ошибки
    errorMessage.textContent = error.message;
    errorModal.showModal(); // Показываем модалку
  }
});

fridgeLitValue.addEventListener("click", (e) => {
  //#1 пЕРВЫЙ СПОСОБ: добавление/удаление галочки около названия продукта
  if (e.target.tagName === "LI") {
    if (!e.target.textContent.includes("v")) {
      e.target.textContent += " v";
    } else {
      e.target.textContent = e.target.textContent.replace("v", "");
    }
  }
  //#2 ВТОРОЙ СПОСОБ: зачеркивание/ продукта
  // if (e.target.tagName === "LI") {
  //   if (e.target.style.textDecoration === "line-through") {
  //     e.target.style.textDecoration = "none";
  //   } else {
  //     e.target.style.textDecoration = "line-through";
  //   }
  // }
});
