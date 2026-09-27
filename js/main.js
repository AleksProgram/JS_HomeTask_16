// import { getListValue } from "./listFridgeService";

const userInputField = document.querySelector("#productInput");
const buttonAdd = document.querySelector("#addButton");
const fridgeLitValue = document.querySelector("#productList");
const dishTitleInput = document.querySelector("#dishTitle");

const errorModal = document.querySelector("#errorModal");
const errorMessage = document.querySelector("#errorMessage");
const closeModalBtn = document.querySelector("#closeModalBtn");

closeModalBtn.addEventListener("click", () => {
  // отслеживает клик по кнопке и закрывает модальное окно;
  errorModal.close();
});

buttonAdd.addEventListener("click", async (e) => {
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
  } catch (error) {
    // В случае ЛЮБОЙ ошибки
    errorMessage.textContent = error.message;
    errorModal.showModal(); // Показываем модалку
  }
});
