export function addSortNewListProducts(
  products,
  sortArray,
  userArray,
  fridgeLitValue,
) {
  for (let i = 0; i < products.length; i++) {
    //убираем дупликаты
    if (!sortArray.includes(products[i])) {
      sortArray.push(products[i]);
    }
  }

  for (let i = 0; i < userArray.length; i++) {
    //сверяем без дупликатов список со списком пользователя и добавляем то, что не повторяется
    if (!sortArray.includes(userArray[i])) {
      sortArray.push(userArray[i]);
    }
  }

  for (let i = 0; i < sortArray.length; i++) {
    //выводим на страницу
    const newLi = document.createElement("li");
    newLi.textContent = sortArray[i];
    fridgeLitValue.append(newLi);
  }
}
