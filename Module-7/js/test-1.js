"use strict";

const ulParent = document.querySelector("#categories");
console.log(`В списке ${ulParent.children.length} категории.`);
function getAllTitleAndLength() {
  const foo = [...ulParent.children].map((el) =>
    console.log(
      `Категоря: ${el.children[0].textContent}, 
Количество єлементов: ${el.children[1].children.length}`
    )
  );
}
getAllTitleAndLength();
